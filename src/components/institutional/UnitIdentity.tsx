import {
  diferenciaisInstituto,
  institucional,
  type UnidadeInstitucionalId,
} from "@/data/institutional";

type Props = { unidadeId: UnidadeInstitucionalId };

export default function UnitIdentity({ unidadeId }: Props) {
  const unidade = institucional[unidadeId];

  return (
    <section
      id="historia"
      aria-labelledby={`historia-${unidadeId}-titulo`}
      className="scroll-mt-28 bg-white px-6 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {unidade.marco}
          </span>
          <h2
            id={`historia-${unidadeId}-titulo`}
            className="mt-5 text-3xl font-extrabold text-primary sm:text-4xl"
          >
            Nossa história na {unidade.nome}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            {unidade.introducao}
          </p>
          {unidade.historia.map((paragrafo) => (
            <p key={paragrafo} className="mt-4 leading-8 text-muted">
              {paragrafo}
            </p>
          ))}
          <p className="mt-6 border-l-2 border-accent pl-5 text-lg font-semibold leading-8 text-primary">
            {unidade.assinatura}
          </p>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-primary p-8 text-white sm:p-10">
            <h3 className="text-xl font-bold">Nossa visão para a {unidade.nome}</h3>
            <p className="mt-4 leading-8 text-white/85">{unidade.visao}</p>
          </article>
          <article className="rounded-3xl border border-border bg-background p-8 sm:p-10">
            <h3 className="text-xl font-bold text-primary">Nossos diferenciais</h3>
            <ul className="mt-5 space-y-3 text-muted">
              {diferenciaisInstituto.map((diferencial) => (
                <li key={diferencial} className="flex items-start gap-3 leading-7">
                  <span aria-hidden="true" className="text-accent">•</span>
                  <span>{diferencial}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
