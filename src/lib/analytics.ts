export type EventoConversao =
  | "whatsapp_click"
  | "instagram_click"
  | "maps_click"
  | "reviews_click"
  | "booking_interest";

export type DadosConversao = {
  unidade: "aldeota" | "parquelandia";
  servico?: string;
  origem: string;
};

export function registrarConversao(
  evento: EventoConversao,
  dados: DadosConversao
) {
  // Preparado para integração futura com GA4.
  // Nenhum dado é enviado nesta versão.

  if (process.env.NODE_ENV === "development") {
    console.info("[Conversão]", evento, dados);
  }
}