
import type { UnidadeId } from "@/data/units";

export type EventoConversao =
  | "whatsapp_click"
  | "instagram_click"
  | "maps_click"
  | "reviews_click"
  | "booking_interest";

export type DadosConversao = {
  unidade: UnidadeId;
  origem: string;
  servico?: string;
};

export function registrarConversao(
  evento: EventoConversao,
  dados: DadosConversao
): void {
  // Etapa 15.1: diagnóstico local.
  // Ainda não envia informações ao Google Analytics.

  if (process.env.NODE_ENV === "development") {
    console.info("[Instituto Pilates] Conversão:", {
      evento,
      ...dados,
    });
  }
}
