
import Link from "next/link";
import { unidades } from "@/data/units";

export default function Footer() {
  return (
    <footer className="bg-primary px-6 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Marca */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-lg font-extrabold text-primary">
                IP
              </span>

              <span className="text-xl font-bold">
                Instituto Pilates
              </span>
            </Link>

            <p className="mt-6 max-w-sm leading-7 text-white/70">
              Movimento, cuidado e qualidade de vida,
              com unidades na Aldeota e na Parquelândia,
              em Fortaleza.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h2 className="font-bold">Navegação</h2>

            <div className="mt-6 flex flex-col gap-4 text-sm text-white/70">
              <Link href="/" className="hover:text-white">
                Início
              </Link>
              <Link href="/#sobre" className="hover:text-white">
                Sobre nós
              </Link>
              <Link href="/#unidades" className="hover:text-white">
                Nossas unidades
              </Link>
              <Link href="/#depoimentos" className="hover:text-white">
                Depoimentos
              </Link>
            </div>
          </nav>

          {/* Unidades */}
          <div>
            <h2 className="font-bold">Nossas unidades</h2>

            <div className="mt-6 space-y-6">
              {Object.values(unidades).map((unidade) => (
                <div key={unidade.id}>
                  <Link
                    href={`/${unidade.id}`}
                    className="font-semibold hover:text-white/80"
                  >
                    {unidade.bairro}
                  </Link>

                  <p className="mt-2 text-sm text-white/65">
                    {unidade.servicos.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-8 text-sm text-white/55 md:flex-row md:justify-between">
          <p>
            © 2026 Instituto Pilates.
            Todos os direitos reservados.
          </p>

          <p>Fortaleza · Ceará · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
