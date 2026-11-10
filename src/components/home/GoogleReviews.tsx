
import { unidades } from "@/data/units";

export default function GoogleReviews() {
  return (
    <section
      id="avaliacoes"
      aria-labelledby="avaliacoes-titulo"
      className="scroll-mt-28 bg-background px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Confiança e experiências reais
          </span>

          <h2
            id="avaliacoes-titulo"
            className="mt-5 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl"
          >
            Conheça as avaliações
            <span className="block text-accent">
              de nossos alunos.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-muted">
            Consulte as avaliações publicadas no Google
            e conheça as experiências compartilhadas
            sobre cada unidade do Instituto Pilates.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {Object.values(unidades).map((unidade) => {
            const linkAvaliacoes =
              unidade.googleAvaliacoes ??
              unidade.googleMaps;

            return (
              <article
                key={unidade.id}
                className="flex flex-col rounded-3xl border border-border bg-white p-8 shadow-sm transition-shadow hover:shadow-lg sm:p-10"
              >
                <span className="text-sm font-bold text-accent">
                  Instituto Pilates
                </span>

                <h3 className="mt-4 text-2xl font-bold text-primary">
                  {unidade.bairro}
                </h3>

                <p className="mt-3 text-sm text-muted">
                  {unidade.servicos.join(" · ")}
                </p>

                <div className="my-8 border-t border-border pt-6">
                  <p className="font-semibold text-primary">
                    Avaliações no Google
                  </p>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    Consulte comentários e experiências
                    compartilhadas no perfil oficial
                    desta unidade.
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  {linkAvaliacoes && (
                    <a
                      href={linkAvaliacoes}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white hover:bg-accent"
                    >
                      Ver perfil e avaliações no Google ↗
                    </a>
                  )}

                  {unidade.googleNovaAvaliacao && (
                    <a
                      href={unidade.googleNovaAvaliacao}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary px-6 py-3 text-center text-sm font-semibold text-primary hover:bg-background"
                    >
                      Escrever uma avaliação ↗
                    </a>
                  )}

                  {!linkAvaliacoes && (
                    <p className="text-sm text-muted">
                      Perfil do Google em configuração.
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
