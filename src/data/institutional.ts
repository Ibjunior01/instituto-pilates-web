/** Conteúdo institucional baseado no documento oficial Site IPP e IPA (novembro/2026). */
export type UnidadeInstitucionalId = "aldeota" | "parquelandia";

export const missaoInstituto =
  "Promover saúde, qualidade de vida e funcionalidade por meio do Pilates, oferecendo um atendimento humanizado, individualizado e de excelência.";

export const valoresInstituto = [
  "Ética e responsabilidade profissional.",
  "Acolhimento e respeito às individualidades.",
  "Valorização das pessoas e do trabalho em equipe.",
  "Atualização e aperfeiçoamento constante.",
  "Excelência e compromisso com a saúde.",
] as const;

export const diferenciaisInstituto = [
  "Metodologia voltada à funcionalidade, prevenção e reabilitação.",
  "Fisioterapeutas qualificados e especialistas em coluna vertebral, comprometidos com a saúde e bem-estar de cada aluno.",
  "Ambiente acolhedor com acompanhamento profissional, atenção, conhecimento, dedicação e uma relação de confiança construída diariamente.",
] as const;

export const institucional = {
  parquelandia: {
    nome: "Parquelândia",
    marco: "13 anos de história",
    introducao:
      "Há 13 anos, o Instituto Pilates Parquelândia nasceu do desejo de oferecer à comunidade um Pilates de qualidade, especializado na saúde da coluna vertebral.",
    historia: [
      "Ao longo dessa trajetória, construímos mais do que um estúdio: formamos uma família que reúne alunos e equipe em torno de um propósito comum — cuidar da saúde e transformar vidas.",
    ],
    visao:
      "Ser referência em Pilates e reabilitação da coluna vertebral, reconhecidos pela excelência profissional, qualidade do serviço e pelo impacto positivo na vida das pessoas.",
    assinatura: "Há 13 anos fortalecendo sua coluna e transformando vidas.",
  },
  aldeota: {
    nome: "Aldeota",
    marco: "Desde o início de 2026",
    introducao:
      "O Instituto Pilates Aldeota nasceu no início de 2026, trazendo a experiência, os valores e o propósito construídos na trajetória da unidade Parquelândia.",
    historia: [
      "Uma nova unidade, com a mesma essência e o desejo de construir uma história sólida e transformadora.",
      "Chegamos à Aldeota com o compromisso de oferecer Pilates de excelência, especializado na saúde da coluna vertebral, promovendo qualidade de vida, movimento e bem-estar.",
    ],
    visao:
      "Consolidar-se como referência em Pilates e reabilitação da coluna vertebral na região, crescendo com qualidade, credibilidade e compromisso com a saúde dos nossos alunos.",
    assinatura:
      "Uma nova história, o mesmo propósito: fortalecer sua coluna e transformar vidas.",
  },
} as const;
