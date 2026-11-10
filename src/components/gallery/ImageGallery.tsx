
"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
} from "react";

type GalleryImage = {
  numero: string;
  imagem: string;
  descricao: string;
};

type ImageGalleryProps = {
  imagens: GalleryImage[];
  titulo?: string;
};

export default function ImageGallery({
  imagens,
  titulo = "Galeria de fotografias",
}: ImageGalleryProps) {
  const [indiceAtivo, setIndiceAtivo] = useState<number | null>(
    null
  );

  const botaoFecharRef = useRef<HTMLButtonElement>(null);
  const botoesFotosRef = useRef<(HTMLButtonElement | null)[]>(
    []
  );
  const dialogRef = useRef<HTMLDivElement>(null);

  const aberto = indiceAtivo !== null;
  const total = imagens.length;

  const fotoAtual =
    indiceAtivo !== null ? imagens[indiceAtivo] : null;

  function abrirFoto(indice: number) {
    setIndiceAtivo(indice);
  }

  function fecharGaleria() {
    setIndiceAtivo(null);
  }

  function proximaFoto() {
    setIndiceAtivo((indice) => {
      if (indice === null || total === 0) return null;

      return (indice + 1) % total;
    });
  }

  function fotoAnterior() {
    setIndiceAtivo((indice) => {
      if (indice === null || total === 0) return null;

      return (indice - 1 + total) % total;
    });
  }

  // Controles do teclado
  useEffect(() => {
    if (!aberto) return;

    function controlarTeclado(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        fecharGaleria();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        proximaFoto();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        fotoAnterior();
      }

      if (event.key === "Tab") {
        const dialogo = dialogRef.current;
        if (!dialogo) return;

        const elementos = Array.from(
          dialogo.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
          )
        );

        const primeiro = elementos[0];
        const ultimo = elementos[elementos.length - 1];

        if (!primeiro || !ultimo) return;

        if (
          event.shiftKey &&
          document.activeElement === primeiro
        ) {
          event.preventDefault();
          ultimo.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === ultimo
        ) {
          event.preventDefault();
          primeiro.focus();
        }
      }
    }

    document.addEventListener("keydown", controlarTeclado);

    return () => {
      document.removeEventListener(
        "keydown",
        controlarTeclado
      );
    };
  }, [aberto, total]);

  // Bloquear a rolagem ao abrir a imagem
  useEffect(() => {
    if (!aberto) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    botaoFecharRef.current?.focus();

    return () => {
      document.body.style.overflow = overflowAnterior;
    };
  }, [aberto]);

  // Restaurar o foco para a foto que abriu a galeria
  const indiceAnteriorRef = useRef<number | null>(null);

  useEffect(() => {
    if (indiceAtivo !== null) {
      indiceAnteriorRef.current = indiceAtivo;
    } else if (indiceAnteriorRef.current !== null) {
      botoesFotosRef.current[
        indiceAnteriorRef.current
      ]?.focus();

      indiceAnteriorRef.current = null;
    }
  }, [indiceAtivo]);

  return (
    <>
      {/* Miniaturas */}
      <div className="grid gap-5 md:grid-cols-3">
        {imagens.map((foto, index) => (
          <button
            key={foto.imagem}
            ref={(elemento) => {
              botoesFotosRef.current[index] = elemento;
            }}
            type="button"
            onClick={() => abrirFoto(index)}
            aria-label={`Ampliar fotografia: ${foto.descricao}`}
            className="group relative aspect-[4/5] cursor-zoom-in overflow-hidden rounded-3xl bg-primary text-left focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Image
              src={foto.imagem}
              alt={foto.descricao}
              fill
              sizes="(max-width: 767px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent" />

            {/* Texto da miniatura */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs font-semibold tracking-widest text-white/70">
                {foto.numero} / {String(total).padStart(2, "0")}
              </span>

              <h3 className="mt-2 text-xl font-bold text-white">
                {foto.descricao}
              </h3>

              <span className="mt-3 inline-block text-xs font-medium text-white/80">
                Clique para ampliar +
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {aberto && fotoAtual && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={titulo}
          className="fixed inset-0 z-[100] flex flex-col bg-[#030817]/95 p-4 text-white backdrop-blur-md sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              fecharGaleria();
            }
          }}
        >
          {/* Barra superior */}
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium tracking-widest text-white/70">
              {String(indiceAtivo! + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>

            <button
              ref={botaoFecharRef}
              type="button"
              onClick={fecharGaleria}
              aria-label="Fechar galeria"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              ×
            </button>
          </div>

          {/* Imagem ampliada */}
          <div className="relative my-5 min-h-0 flex-1">
            <Image
              key={fotoAtual.imagem}
              src={fotoAtual.imagem}
              alt={fotoAtual.descricao}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Barra inferior */}
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={fotoAnterior}
              aria-label="Fotografia anterior"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
            >
              ←
            </button>

            <p
              aria-live="polite"
              className="line-clamp-2 text-center text-sm font-medium sm:text-base"
            >
              {fotoAtual.descricao}
            </p>

            <button
              type="button"
              onClick={proximaFoto}
              aria-label="Próxima fotografia"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
