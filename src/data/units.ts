
export type UnidadeId = "aldeota" | "parquelandia";

export type Unidade = {
  id: UnidadeId;
  nome: string;
  bairro: string;
  cidade: string;
  servicos: string[];
  whatsapp: string | null;
  instagram: string | null;
  endereco: string | null;
  googleMaps: string | null;
  googleAvaliacoes: string | null;
  googleNovaAvaliacao: string | null;
};

export const unidades: Record<UnidadeId, Unidade> = {
  aldeota: {
    id: "aldeota",
    nome: "Instituto Pilates — Aldeota",
    bairro: "Aldeota",
    cidade: "Fortaleza, CE",
    servicos: ["Pilates"],

    whatsapp: "5585998300655",
    instagram: "https://www.instagram.com/institutopilates_aldeota/",
    endereco: "Av. Heráclito Graça, 1590 - Lj 5 - Aldeota, Fortaleza - CE, 60140-060",
    googleMaps: "https://www.google.com/maps/place/Instituto+Pilates+Aldeota/@-3.7645473,-38.5353069,13z/data=!4m10!1m2!2m1!1sinstituto+pilates+aldeota!3m6!1s0x7c7490853d081bd:0x32465bc5838f76f6!8m2!3d-3.738321!4d-38.5107364!15sChlpbnN0aXR1dG8gcGlsYXRlcyBhbGRlb3RhIgOIAQGSAQ5waWxhdGVzX3N0dWRpb-ABAA!16s%2Fg%2F11mt54k8kk?entry=ttu&g_ep=EgoyMDI2MTEwNC4wIKXMDSoASAFQAw%3D%3D",
    googleAvaliacoes: "https://www.google.com/maps/place/Instituto+Pilates+Aldeota/@-3.7383156,-38.5133113,17z/data=!4m16!1m7!3m6!1s0x7c7490853d081bd:0x32465bc5838f76f6!2sInstituto+Pilates+Aldeota!8m2!3d-3.738321!4d-38.5107364!16s%2Fg%2F11mt54k8kk!3m7!1s0x7c7490853d081bd:0x32465bc5838f76f6!8m2!3d-3.738321!4d-38.5107364!9m1!1b1!16s%2Fg%2F11mt54k8kk?entry=ttu&g_ep=EgoyMDI2MTEwOC4wIKXMDSoASAFQAw%3D%3D",
    googleNovaAvaliacao: "https://g.page/r/CfZ2j4PFW0YyECE/review",
  },

  parquelandia: {
    id: "parquelandia",
    nome: "Instituto Pilates — Parquelândia",
    bairro: "Parquelândia",
    cidade: "Fortaleza, CE",
    servicos: ["Pilates", "Laboratório de Força"],

    whatsapp: "5585998370099",
    instagram: "https://www.instagram.com/instpilatesparquelandia/",
    endereco: "Av. Jovita Feitosa, 2766 - Lj 5 - Parquelândia, Fortaleza - CE, 60455-410",
    googleMaps: "https://www.google.com/maps/place/Instituto+Pilates+Parquel%C3%A2ndia/@-3.7408988,-38.5649478,17z/data=!3m1!4b1!4m6!3m5!1s0x7c749653d27def9:0x215abbaf8c7448c5!8m2!3d-3.7408988!4d-38.5623729!16s%2Fg%2F1yhbl8jh6?entry=ttu&g_ep=EgoyMDI2MTEwNC4wIKXMDSoASAFQAw%3D%3D",
    googleAvaliacoes: "https://www.google.com/maps/place/Instituto+Pilates+Parquel%C3%A2ndia/@-3.7408772,-38.5808269,15z/data=!4m8!3m7!1s0x7c749653d27def9:0x215abbaf8c7448c5!8m2!3d-3.7408988!4d-38.5623729!9m1!1b1!16s%2Fg%2F1yhbl8jh6?entry=ttu&g_ep=EgoyMDI2MTEwOC4wIKXMDSoASAFQAw%3D%3D",
    googleNovaAvaliacao: "https://g.page/r/CcVIdIyvu1ohEAE/review",
  },
};

export function criarLinkWhatsApp(
  telefone: string,
  unidade: UnidadeId,
  servico?: string
): string {
  const numero = telefone.replace(/\D/g, "");

  const nomeUnidade =
    unidades[unidade].bairro;

  const mensagem = servico
    ? `Olá! Conheci o Instituto Pilates pelo site e gostaria de informações sobre ${servico} na unidade ${nomeUnidade}.`
    : `Olá! Conheci o Instituto Pilates pelo site e gostaria de informações sobre aulas na unidade ${nomeUnidade}.`;

  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}
