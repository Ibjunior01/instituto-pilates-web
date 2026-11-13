
import {
  criarLinkWhatsApp,
  unidades,
  type UnidadeId,
} from "@/data/units";

function obterDestino(
  unidadeId: UnidadeId,
  servico: string
) {
  const unidade = unidades[unidadeId];

  const numero = unidade.whatsapp?.replace(/\D/g, "");

  if (numero && /^55\d{10,11}$/.test(numero)) {
    return {
      href: criarLinkWhatsApp(numero, unidadeId, servico),
      externo: true,
    };
  }

  return {
    href: `/${unidadeId}#contato`,
    externo: false,
  };
}

export default function BookingCTA() {
  return (
    <section
      id="agendamento"
      aria-labelledby="agendamento-titulo"
      className="scroll-mt-28 bg-primary px-6 py-24 text-white lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">
            Seu próximo movimento começa aqui
          </span>

          <h2
            id="agendamento-titulo"
            className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
          >
            Dê o primeiro passo para
            <span className="block text-[#FF6856]">
              cuidar de você.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            Escolha a unidade e o serviço de seu interesse.
            Nossa equipe poderá orientar você sobre
            as opções disponíveis.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {Object.values(unidades).map((unidade) => (
            <article
              key={unidade.id}
              className="flex flex-col rounded-[2rem] bg-white p-8 text-primary sm:p-10"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Instituto Pilates
              </span>

              <h3 className="mt-4 text-3xl font-extrabold">
                {unidade.bairro}
              </h3>

              <p className="mt-4 leading-7 text-muted">
                {unidade.id === "aldeota"
                  ? "Conheça nossa experiência de Pilates com atenção individualizada."
                  : "Conheça nossos serviços de Pilates e Laboratório de Força."}
              </p>

              <div className="mt-8 flex flex-1 flex-col gap-3">
                {unidade.servicos.map((servico) => {
                  const destino = obterDestino(
                    unidade.id,
                    servico
                  );

                  return (
                    <a
                      key={servico}
                      href={destino.href}
                      target={
                        destino.externo
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        destino.externo
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-4 text-center text-sm font-bold text-white hover:-translate-y-1"
                    >
                      {destino.externo
                        ? `Conversar sobre ${servico}`
                        : `Conhecer ${servico}`}
                      <span aria-hidden="true" className="ml-2">
                        →
                      </span>
                    </a>
                  );
                })}
              </div>

              <a
                href={`/${unidade.id}`}
                className="mt-6 text-center text-sm font-semibold text-primary hover:text-accent"
              >
                Ver informações da unidade
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/60">
          Aldeota e Parquelândia · Fortaleza, Ceará
        </p>
      </div>
    </section>
  );
}
