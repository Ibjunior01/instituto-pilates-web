
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  criarLinkWhatsApp,
  unidades,
  type UnidadeId,
} from "@/data/units";
import { registrarConversao } from "@/lib/analytics";


const ids: UnidadeId[] = ["aldeota", "parquelandia"];

function obterWhatsApp(id: UnidadeId) {
  const telefone = unidades[id].whatsapp;
  if (!telefone) return null;

  const numero = telefone.replace(/\D/g, "");
  if (!/^55\d{10,11}$/.test(numero)) return null;

  return criarLinkWhatsApp(numero, id);
}

function IconeWhatsApp() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="27"
      height="27"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
      <path d="M9 9.5c.5 2.3 2.2 4.1 4.5 4.8l1.4-1.2 2 1c-.4 1.6-1.6 2.3-3.1 2.1-3.6-.5-6.7-3.4-7.1-7.1-.1-1.5.7-2.7 2-3.1l1 2-1.4 1.5Z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const pathname = usePathname();

  const [aberto, setAberto] = useState(false);
  const painelRef = useRef<HTMLDivElement>(null);
  const botaoRef = useRef<HTMLButtonElement>(null);

  const unidadeAtual: UnidadeId | null =
    pathname === "/aldeota"
      ? "aldeota"
      : pathname === "/parquelandia"
        ? "parquelandia"
        : null;

  const destinoDireto = unidadeAtual
    ? obterWhatsApp(unidadeAtual)
    : null;

  const unidadesDisponiveis = ids.filter(
    (id) => obterWhatsApp(id) !== null
  );

  // Fecha o painel na navegação entre páginas
  useEffect(() => {
    const fechar = () => setAberto(false);
    fechar();
  }, [pathname]);

  // Fecha ao pressionar Escape ou clicar fora
  useEffect(() => {
    if (!aberto) return;

    function tecla(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setAberto(false);
        botaoRef.current?.focus();
      }
    }

    function cliqueFora(event: PointerEvent) {
      if (
        painelRef.current &&
        !painelRef.current.contains(event.target as Node) &&
        !botaoRef.current?.contains(event.target as Node)
      ) {
        setAberto(false);
      }
    }

    document.addEventListener("keydown", tecla);
    document.addEventListener("pointerdown", cliqueFora);

    return () => {
      document.removeEventListener("keydown", tecla);
      document.removeEventListener(
        "pointerdown",
        cliqueFora
      );
    };
  }, [aberto]);

  // Não mostrar o botão sem contatos disponíveis
  if (unidadesDisponiveis.length === 0) {
    return null;
  }

  // Nas páginas individuais, abrir WhatsApp direto
  if (unidadeAtual) {
    if (!destinoDireto) return null;

    return (
      <a
        href={destinoDireto}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Conversar no WhatsApp da unidade ${unidades[unidadeAtual].bairro}`}
        className="fixed bottom-6 right-6 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-[#176B45] text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"

        onClick={() => {
          registrarConversao("whatsapp_click", {
            unidade: unidadeAtual,
            origem: "botao_flutuante_pagina",
          });
        }}
      >
        <IconeWhatsApp />
      </a>
    );
  }

  // Na Home, mostrar o seletor de unidades
  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {aberto && (
        <div
          ref={painelRef}
          id="painel-whatsapp"
          role="region"
          aria-label="Escolha sua unidade"
          className="absolute bottom-20 right-0 w-[min(340px,calc(100vw-3rem))] overflow-hidden rounded-3xl border border-border bg-white shadow-2xl"
        >
          <div className="bg-primary p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/65">
              Instituto Pilates
            </p>

            <h2 className="mt-3 text-xl font-bold">
              Como podemos ajudar?
            </h2>

            <p className="mt-2 text-sm text-white/70">
              Escolha a unidade para conversar.
            </p>
          </div>

          <div className="space-y-2 p-4">
            {unidadesDisponiveis.map((id) => {
              const unidade = unidades[id];
              const url = obterWhatsApp(id);

              if (!url) return null;

              return (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    registrarConversao("whatsapp_click", {
                      unidade: id,
                      origem: "botao_flutuante_home",
                    });

                    setAberto(false);
                  }}
                  className="block rounded-xl border border-border p-4 transition-colors hover:border-accent hover:bg-background"
                >
                  <span className="block font-bold text-primary">
                    {unidade.bairro}
                  </span>

                  <span className="mt-1 block text-xs text-muted">
                    {unidade.servicos.join(" · ")}
                  </span>

                  <span className="mt-3 block text-xs font-bold text-accent">
                    Conversar →
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}

      <button
        ref={botaoRef}
        type="button"
        aria-label={
          aberto
            ? "Fechar opções de WhatsApp"
            : "Abrir opções de WhatsApp"
        }
        aria-expanded={aberto}
        aria-controls="painel-whatsapp"
        onClick={() => setAberto((valor) => !valor)}
        className="ml-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#176B45] text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
      >
        {aberto ? (
          <span aria-hidden="true" className="text-3xl">
            ×
          </span>
        ) : (
          <IconeWhatsApp />
        )}
      </button>
    </div>
  );
}
