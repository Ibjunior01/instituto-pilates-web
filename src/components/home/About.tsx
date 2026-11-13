import {
  institucional,
  missaoInstituto,
  valoresInstituto,
} from "@/data/institutional";

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="scroll-mt-28 bg-white px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Nossa história
          </span>
          <h2
            id="sobre-titulo"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl"
          >
            Uma trajetória de cuidado.
            <span className="mt-2 block text-accent">
              O mesmo propósito em duas unidades.
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Nosso trabalho começou na Parquelândia, com foco na saúde da coluna
            vertebral, e chegou à Aldeota em 2026, levando a mesma essência de
            atendimento humanizado e individualizado.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {(["parquelandia", "aldeota"] as const).map((id) => {
            const unidade = institucional[id];
            return (
              <article
                key={id}
                className="flex flex-col rounded-[2rem] border border-border bg-background p-8 sm:p-10"
              >
                <span className="text-sm font-bold text-accent">
                  {unidade.marco}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold text-primary sm:text-3xl">
                  Instituto Pilates {unidade.nome}
                </h3>
                <p className="mt-5 leading-8 text-muted">{unidade.introducao}</p>
                {unidade.historia.map((paragrafo) => (
                  <p key={paragrafo} className="mt-4 leading-8 text-muted">
                    {paragrafo}
                  </p>
                ))}
                <a
                  href={`/${id}`}
                  className="mt-8 inline-flex min-h-12 items-center self-start font-bold text-accent hover:underline"
                >
                  Conheça a unidade <span aria-hidden="true" className="ml-2">→</span>
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Nossa essência
          </span>
          <h3 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl">
            O que orienta nosso cuidado.
          </h3>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl bg-primary p-8 text-white sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                Missão
              </span>
              <p className="mt-5 text-xl font-semibold leading-9">
                {missaoInstituto}
              </p>
            </article>
            <article className="rounded-3xl border border-border bg-background p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Nossos valores
              </span>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-muted sm:text-base">
                {valoresInstituto.map((valor) => (
                  <li key={valor} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-1 font-bold text-accent">•</span>
                    <span>{valor}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-6 text-sm leading-7 text-muted">
            Cada unidade possui uma visão institucional própria, apresentada em sua página.
          </p>
        </div>
      </div>
    </section>
  );
}
