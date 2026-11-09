
"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Testimonials() {
  const reduzirMovimento = useReducedMotion();

  return (
    <section
      id="depoimentos"
      className="scroll-mt-28 bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{
            opacity: 0,
            y: reduzirMovimento ? 0 : 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduzirMovimento ? 0 : 0.6 }}
        >
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            Histórias reais
          </span>

          <h2 className="mt-5 text-3xl font-bold text-primary sm:text-4xl">
            A experiência de quem se movimenta conosco.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-muted">
            Conheça experiências compartilhadas por
            alunos do Instituto Pilates.
          </p>
        </motion.div>

        <div className="mt-12 max-w-3xl overflow-hidden rounded-3xl bg-primary shadow-xl">
          <video
            controls
            preload="metadata"
            playsInline
            className="aspect-video w-full bg-black object-contain"
            aria-label="Vídeo de depoimento de aluno do Instituto Pilates"
          >
            <source
              src="/videos/depoimento-aluno-01.mp4"
              type="video/mp4"
            />
            Seu navegador não suporta reprodução de vídeo.
          </video>
        </div>
      </div>
    </section>
  );
}
