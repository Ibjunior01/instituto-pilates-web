
"use client";

import type { ReactNode } from "react";
import {
  registrarConversao,
  type EventoConversao,
} from "@/lib/analytics";
import type { UnidadeId } from "@/data/units";

type TrackedExternalLinkProps = {
  href: string;
  unidade: UnidadeId;
  evento: EventoConversao;
  origem: string;
  servico?: string;
  className?: string;
  children: ReactNode;
};

export default function TrackedExternalLink({
  href,
  unidade,
  evento,
  origem,
  servico,
  className,
  children,
}: TrackedExternalLinkProps) {
  function registrarClique() {
    registrarConversao(evento, {
      unidade,
      origem,
      ...(servico ? { servico } : {}),
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={registrarClique}
    >
      {children}
    </a>
  );
}
