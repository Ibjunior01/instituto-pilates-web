
"use client";

import { motion, useReducedMotion } from "motion/react";

const unidades = [
  {
    nome: "Aldeota",
    numero: "01",
    categoria: "PILATES",
    titulo: "Movimente-se com cuidado.",
    descricao:
      "Um espaço dedicado à prática de Pilates, ao bem-estar e à atenção individualizada.",
    servicos: ["Pilates"],
    href: "/aldeota",
    destaque: false,
  },
  {
    nome: "Parquelândia",
    numero: "02",
    categoria: "PILATES + FORÇA",
    titulo: "Movimento e força para sua vida.",
    descricao:
      "Pilates e Laboratório de Força, com exercícios individualizados e acompanhamento de fisioterapeutas.",
    servicos: ["Pilates", "Laboratório de Força"],
    href: "/parquelandia",
    destaque: true,
  },
];

export default function Units() {
  const reduzirMovimento = useReducedMotion();

  return (
    <section
      id="unidades"
      aria-labelledby="unidades-titulo"
      className="scroll-mt-28 bg-background px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Introdução */}
        <motion.div
          initial={{
            opacity: reduzirMovimento ? 1 : 0,
            y: reduzirMovimento ? 0 : 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduzirMovimento ? 0 : 0.65,
          }}
          className="mb-12 max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Nossas unidades
          </span>

          <h2
            id="unidades-titulo"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl"
          >
            Dois espaços.
            <span className="mt-2 block text-accent">
              Um compromisso com você.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Conheça nossos espaços em Fortaleza e escolha
            a unidade que melhor atende às suas necessidades.
          </p>
        </motion.div>

        {/* Cards das unidades */}
        <div className="grid gap-8 lg:grid-cols-2">
          {unidades.map((unidade, index) => (
            <motion.article
              key={unidade.href}
              initial={{
                opacity: reduzirMovimento ? 1 : 0,
                y: reduzirMovimento ? 0 : 45,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduzirMovimento ? 0 : 0.65,
                delay: reduzirMovimento ? 0 : index * 0.15,
              }}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Área visual provisória */}
              <div
                className={`relative flex min-h-72 flex-col justify-between overflow-hidden p-8 sm:min-h-80 sm:p-10 ${
                  unidade.destaque
                    ? "bg-gradient-to-br from-[#303F69] via-[#14234D] to-[#030B36]"
                    : "bg-gradient-to-br from-[#25365B] via-[#111D43] to-[#030B36]"
                }`}
              >
                {/* Elementos decorativos */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/15 transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-12 top-12 h-40 w-40 rounded-full border border-white/10"
                />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span className="rounded-full bg-white px-4 py-2 text-[11px] font-bold tracking-widest text-primary">
                    {unidade.categoria}
                  </span>

                  <span className="text-sm font-semibold text-white/60">
                    {unidade.numero} / 02
                  </span>
                </div>

                <div className="relative z-10 mt-16">
                  <p className="text-sm font-medium text-white/70">
                    Instituto Pilates
                  </p>

                  <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    {unidade.nome}
                  </h3>

                  <div className="mt-5 h-1 w-12 rounded-full bg-accent transition-all duration-300 group-hover:w-20" />
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <h4 className="text-2xl font-bold tracking-tight text-primary">
                  {unidade.titulo}
                </h4>

                <p className="mt-4 leading-8 text-muted">
                  {unidade.descricao}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {unidade.servicos.map((servico) => (
                    <span
                      key={servico}
                      className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-primary"
                    >
                      {servico}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-9">
                  <a
                    href={unidade.href}
                    aria-label={`Conhecer a unidade ${unidade.nome}`}
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-accent"
                  >
                    Conhecer unidade
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Informativo complementar */}
        <motion.div
          initial={{
            opacity: reduzirMovimento ? 1 : 0,
            y: reduzirMovimento ? 0 : 25,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduzirMovimento ? 0 : 0.55,
          }}
          className="mt-12 rounded-3xl border border-border bg-white p-7 sm:p-9"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Exclusivo da Parquelândia
              </span>

              <h3 className="mt-3 text-xl font-bold text-primary sm:text-2xl">
                Conheça o Laboratório de Força
              </h3>

              <p className="mt-3 leading-7 text-muted">
                Um serviço complementar ao Pilates, voltado
                ao desenvolvimento e à manutenção da força
                muscular, com exercícios individualizados
                e acompanhamento de fisioterapeutas.
              </p>
            </div>

            <a
              href="/parquelandia#laboratorio-de-forca"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
            >
              Saiba mais
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
