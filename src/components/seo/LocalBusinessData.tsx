
import {
  unidades,
  type UnidadeId,
} from "@/data/units";

const enderecos = {
  aldeota: {
    streetAddress: "Av. Heráclito Graça, 1590 - Lj 5",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    postalCode: "60140-060",
    addressCountry: "BR",
  },
  parquelandia: {
    streetAddress: "Av. Jovita Feitosa, 2766 - Lj 5",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    postalCode: "60455-410",
    addressCountry: "BR",
  },
};

export default function LocalBusinessData({
  unidadeId,
}: {
  unidadeId: UnidadeId;
}) {
  const unidade = unidades[unidadeId];

  const dados = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: unidade.nome,
    description:
      unidadeId === "aldeota"
        ? "Estúdio de Pilates na Aldeota, Fortaleza."
        : "Estúdio de Pilates e Laboratório de Força na Parquelândia, Fortaleza.",
    address: {
      "@type": "PostalAddress",
      ...enderecos[unidadeId],
    },
    ...(unidade.whatsapp && {
      telephone: `+${unidade.whatsapp}`,
    }),
    ...(unidade.googleMaps && {
      hasMap: unidade.googleMaps,
    }),
    ...(unidade.instagram && {
      sameAs: [unidade.instagram],
    }),
  };

  const json = JSON.stringify(dados).replace(/</g, "\\u003c");

  return (
  <script
    type="application/ld+json"
    data-instituto-unidade={unidadeId}
    dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
