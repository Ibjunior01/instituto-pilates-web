
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const unidades = [
  {
    nome: "Aldeota",
    descricao: "Pilates",
    href: "/aldeota",
  },
  {
    nome: "Parquelândia",
    descricao: "Pilates e Laboratório de Força",
    href: "/parquelandia",
  },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [unidadesAbertas, setUnidadesAbertas] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function fecharComEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuAberto(false);
        setUnidadesAbertas(false);
      }
    }

    function fecharAoClicarFora(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuAberto(false);
        setUnidadesAbertas(false);
      }
    }

    document.addEventListener("keydown", fecharComEscape);
    document.addEventListener("mousedown", fecharAoClicarFora);

    return () => {
      document.removeEventListener("keydown", fecharComEscape);
      document.removeEventListener("mousedown", fecharAoClicarFora);
    };
  }, []);

  function fecharMenus() {
    setMenuAberto(false);
    setUnidadesAbertas(false);
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Identidade visual */}
        <Link
          href="/"
          onClick={fecharMenus}
          aria-label="Instituto Pilates - Página inicial"
          className="flex items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
            IP
          </span>

          <span className="flex flex-col leading-tight">
            <span className="text-[10px] font-semibold tracking-[0.25em] text-accent">
              INSTITUTO
            </span>
            <span className="text-xl font-extrabold tracking-tight text-primary">
              PILATES
            </span>
          </span>
        </Link>

        {/* Navegação desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 lg:flex"
        >
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className="font-medium text-primary transition-colors hover:text-accent"
          >
            Início
          </Link>

          <Link
            href="/#sobre"
            className="font-medium text-primary transition-colors hover:text-accent"
          >
            Sobre nós
          </Link>

          {/* Dropdown de unidades */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={unidadesAbertas}
              aria-controls="menu-unidades-desktop"
              onClick={() => setUnidadesAbertas(!unidadesAbertas)}
              className="flex items-center gap-2 font-medium text-primary hover:text-accent"
            >
              Unidades
              <span
                aria-hidden="true"
                className={`transition-transform ${
                  unidadesAbertas ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {unidadesAbertas && (
              <div
                id="menu-unidades-desktop"
                className="absolute left-1/2 top-full mt-5 w-72 -translate-x-1/2 rounded-2xl border border-border bg-white p-2 shadow-xl"
              >
                {unidades.map((unidade) => (
                  <Link
                    key={unidade.href}
                    href={unidade.href}
                    onClick={fecharMenus}
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-background"
                  >
                    <span className="block font-semibold text-primary">
                      {unidade.nome}
                    </span>
                    <span className="mt-1 block text-xs text-muted">
                      {unidade.descricao}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#depoimentos"
            className="font-medium text-primary transition-colors hover:text-accent"
          >
            Depoimentos
          </Link>
        </nav>

        {/* Ação desktop */}
        <Link
          href="/#unidades"
          className="hidden rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:shadow-lg lg:inline-flex"
        >
          Agendar aula
        </Link>

        {/* Botão mobile */}
        <button
          type="button"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          onClick={() => setMenuAberto(!menuAberto)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-primary lg:hidden"
        >
          <span aria-hidden="true" className="text-2xl">
            {menuAberto ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Navegação mobile */}
      {menuAberto && (
        <nav
          id="menu-mobile"
          aria-label="Navegação mobile"
          className="border-t border-border bg-white px-6 pb-6 pt-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={fecharMenus}
              className="rounded-xl px-3 py-3 font-medium text-primary hover:bg-background"
            >
              Início
            </Link>

            <Link
              href="/#sobre"
              onClick={fecharMenus}
              className="rounded-xl px-3 py-3 font-medium text-primary hover:bg-background"
            >
              Sobre nós
            </Link>

            <button
              type="button"
              aria-expanded={unidadesAbertas}
              aria-controls="menu-unidades-mobile"
              onClick={() => setUnidadesAbertas(!unidadesAbertas)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-medium text-primary hover:bg-background"
            >
              Unidades
              <span aria-hidden="true">
                {unidadesAbertas ? "−" : "+"}
              </span>
            </button>

            {unidadesAbertas && (
              <div
                id="menu-unidades-mobile"
                className="ml-3 flex flex-col border-l-2 border-border pl-3"
              >
                {unidades.map((unidade) => (
                  <Link
                    key={unidade.href}
                    href={unidade.href}
                    onClick={fecharMenus}
                    className="rounded-xl px-3 py-3 hover:bg-background"
                  >
                    <span className="block font-semibold text-primary">
                      {unidade.nome}
                    </span>
                    <span className="block text-xs text-muted">
                      {unidade.descricao}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/#depoimentos"
              onClick={fecharMenus}
              className="rounded-xl px-3 py-3 font-medium text-primary hover:bg-background"
            >
              Depoimentos
            </Link>

            <Link
              href="/#unidades"
              onClick={fecharMenus}
              className="mt-4 rounded-full bg-accent px-6 py-3 text-center font-semibold text-white"
            >
              Agendar aula
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
