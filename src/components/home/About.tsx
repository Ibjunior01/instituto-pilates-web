
"use client";

import { motion, useReducedMotion } from "motion/react";

const principios = [
  {
    numero: "01",
    titulo: "Missão",
    descricao:
      "Promover movimento, bem-estar e qualidade de vida por meio de um atendimento individualizado, acolhedor e profissional.",
  },
  {
    numero: "02",
    titulo: "Visão",
    descricao:
      "Ser reconhecido pela qualidade do acompanhamento, pela confiança dos alunos e pelo compromisso com a evolução de cada pessoa.",
  },
  {
    numero: "03",
    titulo: "Valores",
    descricao:
      "Respeito à individualidade, ética profissional, acolhimento, dedicação, responsabilidade e cuidado humanizado.",
  },
];

export default function About() {
  const reduzirMovimento = useReducedMotion();

  const animacao = {
    initial: {
      opacity: 0,
      y: reduzirMovimento ? 0 : 35,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
  };

  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="scroll-mt-28 bg-white px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho da seção */}
        <motion.div
          {...animacao}
          transition={{ duration: 0.65 }}
          className="mb-14 max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Conheça nossa essência
          </span>

          <h2
            id="sobre-titulo"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl"
          >
            Mais do que movimento.
            <span className="mt-2 block text-accent">
              Uma história de cuidado.
            </span>
          </h2>
        </motion.div>

        {/* História */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            {...animacao}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="flex aspect-[4/3] items-end overflow-hidden rounded-[2rem] bg-primary p-8 sm:p-10">
              <div className="max-w-sm border-l-2 border-accent pl-5">
                <p className="text-sm uppercase tracking-widest text-white/65">
                  Instituto Pilates
                </p>

                <p className="mt-3 text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  Cada movimento faz parte de uma história.
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-3xl border-2 border-accent/30"
            />
          </motion.div>

          <motion.div
            {...animacao}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <span className="text-sm font-bold text-accent">
              Nossa trajetória
            </span>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-primary">
              Cuidar de pessoas é o que nos move.
            </h3>

            <p className="mt-6 leading-8 text-muted">
              No Instituto Pilates, acreditamos que o
              movimento pode contribuir para uma vida com
              mais autonomia, equilíbrio e bem-estar.
            </p>

            <p className="mt-5 leading-8 text-muted">
              Nossa atuação valoriza a individualidade de
              cada aluno, o acompanhamento profissional
              e um ambiente acolhedor.
            </p>

            <p className="mt-5 leading-8 text-muted">
              Com unidades na Aldeota e na Parquelândia,
              buscamos oferecer experiências de cuidado
              que respeitem diferentes necessidades
              e objetivos.
            </p>

            <p className="mt-5 text-sm italic text-muted">
              Apresentação provisória. A trajetória oficial
              do Instituto será incluída posteriormente.
            </p>
          </motion.div>
        </div>

        {/* Missão, visão e valores */}
        <div className="mt-24">
          <motion.div
            {...animacao}
            transition={{ duration: 0.65 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Nossos princípios
            </span>

            <h3 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
              O que orienta nosso cuidado.
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {principios.map((principio, index) => (
              <motion.article
                key={principio.numero}
                initial={{
                  opacity: 0,
                  y: reduzirMovimento ? 0 : 30,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduzirMovimento ? 0 : 0.55,
                  delay: reduzirMovimento ? 0 : index * 0.12,
                }}
                className="rounded-3xl border border-border bg-background p-8 transition-shadow hover:shadow-lg"
              >
                <span className="text-sm font-bold text-accent">
                  {principio.numero}
                </span>

                <h4 className="mt-8 text-2xl font-bold text-primary">
                  {principio.titulo}
                </h4>

                <p className="mt-4 leading-7 text-muted">
                  {principio.descricao}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
