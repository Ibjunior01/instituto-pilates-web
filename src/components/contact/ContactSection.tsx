
import {
  criarLinkWhatsApp,
  unidades,
  type UnidadeId,
} from "@/data/units";

import TrackedExternalLink from "@/components/analytics/TrackedExternalLink";

type ContactSectionProps = {
  unidadeId: UnidadeId;
};

export default function ContactSection({
  unidadeId,
}: ContactSectionProps) {
  const unidade = unidades[unidadeId];

  const whatsappConfigurado =
    unidade.whatsapp !== null &&
    /^55\d{10,11}$/.test(
      unidade.whatsapp.replace(/\D/g, "")
    );

  const whatsappLink = whatsappConfigurado
    ? criarLinkWhatsApp(unidade.whatsapp!, unidadeId)
    : null;

  const redes = [
    {
      titulo: "Instagram",
      href: unidade.instagram,
      evento: "instagram_click" as const,
    },
    {
      titulo: "Como chegar",
      href: unidade.googleMaps,
      evento: "maps_click" as const,
    },
    {
      titulo: "Avaliações do Google",
      href: unidade.googleAvaliacoes,
      evento: "reviews_click" as const,
    },
  ].filter(
    (item): item is typeof item & { href: string } =>
      typeof item.href === "string" &&
      /^https:\/\//.test(item.href)
  );

  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="scroll-mt-28 bg-background px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Estamos esperando por você
          </span>

          <h2
            id="contato-titulo"
            className="mt-5 text-3xl font-extrabold leading-tight text-primary sm:text-4xl"
          >
            Seu próximo movimento
            <span className="block text-accent">
              começa aqui.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Entre em contato com o Instituto Pilates{" "}
            {unidade.bairro} e conheça nossos serviços.
            Nossa equipe poderá orientar você sobre
            as opções disponíveis.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {unidade.servicos.map((servico) => (
              <span
                key={servico}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-primary"
              >
                {servico}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-white p-8 shadow-sm sm:p-10">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Nossa unidade
          </span>

          <h3 className="mt-4 text-2xl font-bold text-primary">
            {unidade.nome}
          </h3>

          <p className="mt-4 leading-7 text-muted">
            {unidade.endereco ?? unidade.bairro}
            <span className="block">{unidade.cidade}</span>
          </p>

          <div className="mt-8 space-y-3">
            {whatsappLink ? (
              <TrackedExternalLink
                href={whatsappLink}
                unidade={unidade.id}
                evento="whatsapp_click"
                origem="secao_contato"
                className="flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-primary"
              >
                Conversar pelo WhatsApp
              </TrackedExternalLink>
            ) : (
              <p className="rounded-xl bg-background p-4 text-sm text-muted">
                Canal de WhatsApp em configuração.
              </p>
            )}

            {unidadeId === "parquelandia" &&
              whatsappConfigurado && (
                <TrackedExternalLink
                  href={criarLinkWhatsApp(
                    unidade.whatsapp!,
                    unidadeId,
                    "Laboratório de Força"
                  )}
                  unidade={unidadeId}
                  evento="whatsapp_click"
                  origem="secao_contato_laboratorio"
                  servico="Laboratório de Força"
                  className="flex min-h-12 items-center justify-center rounded-full border border-primary px-6 py-4 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Tenho interesse no Laboratório de Força
                </TrackedExternalLink>
              )}
          </div>

          {redes.length > 0 && (
            <div className="mt-8 border-t border-border pt-6">
              <p className="mb-4 text-sm font-semibold text-primary">
                Outros canais
              </p>

              <div className="flex flex-wrap gap-4">
                {redes.map((rede) => (
                  <TrackedExternalLink
                    key={rede.titulo}
                    href={rede.href}
                    unidade={unidadeId}
                    evento={rede.evento}
                    origem="secao_contato"
                    className="text-sm font-semibold text-accent hover:underline"
                  >
                    {rede.titulo} ↗
                  </TrackedExternalLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
