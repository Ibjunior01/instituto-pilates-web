
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ImageGallery from "@/components/gallery/ImageGallery";
import ContactSection from "@/components/contact/ContactSection";
import LocalBusinessData from "@/components/seo/LocalBusinessData";

export const metadata: Metadata = {
  title: {
    absolute:
      "Pilates na Aldeota, Fortaleza | Instituto Pilates",
  },
  alternates: {
    canonical: "/aldeota",
  },

  description:
    "Conheça o Instituto Pilates Aldeota, em Fortaleza. Aulas de Pilates com acompanhamento profissional. Veja nossa estrutura e entre em contato.",
};

const diferenciais = [
  {
    numero: "01",
    titulo: "Atenção individualizada",
    descricao:
      "Uma experiência de movimento que respeita as necessidades e os objetivos de cada aluno.",
  },
  {
    numero: "02",
    titulo: "Acompanhamento profissional",
    descricao:
      "Orientação durante a prática, com atenção à execução e à evolução dos exercícios.",
  },
  {
    numero: "03",
    titulo: "Bem-estar e movimento",
    descricao:
      "Uma proposta de atividade física que valoriza a mobilidade, o equilíbrio e a qualidade de vida.",
  },
];

const galeria = [
  {
    numero: "01",
    imagem: "/images/aldeota-01.jpg",
    descricao: "Ambiente do Instituto Pilates Aldeota",
  },
  {
    numero: "02",
    imagem: "/images/aldeota-02.jpg",
    descricao: "Espaço de Pilates da unidade Aldeota",
  },
  {
    numero: "03",
    imagem: "/images/aldeota-03.jpg",
    descricao: "Estrutura do Instituto Pilates Aldeota",
  },
];

export default function AldeotaPage() {
  return (
    <main>
      <LocalBusinessData unidadeId="aldeota" />
      
      {/* 1. Apresentação da unidade */}
      <section className="overflow-hidden bg-background px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Instituto Pilates · Aldeota
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Seu espaço de
              <span className="block text-accent">
                movimento e bem-estar.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              Conheça nossa unidade na Aldeota, em Fortaleza.
              Um espaço dedicado ao Pilates, ao cuidado e à
              atenção individualizada.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contato"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-bold text-white hover:-translate-y-1"
              >
                Quero conhecer a unidade
                <span aria-hidden="true" className="ml-3">
                  →
                </span>
              </Link>

              <Link
                href="#estrutura"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/20 bg-white px-8 py-4 text-sm font-semibold text-primary hover:bg-primary/5"
              >
                Conheça nosso espaço
              </Link>
            </div>

            <div className="mt-12 border-t border-border pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-muted">
                Serviço disponível
              </p>

              <span className="mt-3 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary">
                Pilates
              </span>
            </div>
          </div>

          {/* Imagem principal */}
          <div className="relative">
            <div
              role="img"
              aria-label="Área reservada para fotografia do Studio Aldeota"
              className="relative flex aspect-[4/5] items-end overflow-hidden rounded-[2rem] bg-primary p-8 shadow-2xl shadow-primary/15 sm:aspect-[5/4] lg:aspect-[4/5]"
              style={{
                backgroundImage:
                  'linear-gradient(to top, rgba(3,11,54,0.85), rgba(3,11,54,0.08)), url("/images/aldeota-studio.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative z-10 border-l-2 border-accent pl-5">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  Instituto Pilates
                </p>

                <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Aldeota
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-3xl border-2 border-accent/40"
            />
          </div>
        </div>
      </section>


      {/* Apresentação em vídeo da unidade */}
      <section
        aria-labelledby="video-aldeota-titulo"
        className="bg-white px-6 py-20 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Vídeo */}
          <div className="overflow-hidden rounded-3xl bg-primary shadow-xl">
            <video
              controls
              playsInline
              preload="none"
              poster="/images/hero-pilates.jpg"
              className="aspect-video w-full object-contain"
              aria-label="Apresentação do Instituto Pilates Aldeota"
            >
              <source
                src="/videos/apresentacao-aldeota.mp4"
                type="video/mp4"
              />
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>

          {/* Conteúdo */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Conheça nosso espaço
            </span>

            <h2
              id="video-aldeota-titulo"
              className="mt-5 text-3xl font-extrabold leading-tight text-primary sm:text-4xl"
            >
              Um ambiente pensado para
              <span className="block text-accent">
                cuidar de você.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              Conheça um pouco mais do Instituto Pilates Aldeota
              e descubra o ambiente onde valorizamos o movimento,
              o acompanhamento profissional e a atenção a cada aluno.
            </p>

            <a
              href="#contato"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white hover:-translate-y-1"
            >
              Quero conhecer a unidade
              <span aria-hidden="true" className="ml-3">
                →
              </span>
            </a>
          </div>
        </div>
      </section>


      {/* 2. Diferenciais */}
      <section
        aria-labelledby="diferenciais-titulo"
        className="bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Movimento com propósito
          </span>

          <h2
            id="diferenciais-titulo"
            className="mt-5 max-w-3xl text-3xl font-extrabold text-primary sm:text-4xl"
          >
            Pilates com atenção a cada movimento.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-muted">
            Conheça alguns dos princípios que orientam
            a experiência do Instituto Pilates.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {diferenciais.map((item) => (
              <article
                key={item.numero}
                className="rounded-3xl border border-border bg-background p-8 transition-shadow hover:shadow-lg"
              >
                <span className="text-sm font-bold text-accent">
                  {item.numero}
                </span>

                <h3 className="mt-8 text-xl font-bold text-primary">
                  {item.titulo}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {item.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Galeria provisória */}
      <section
        id="estrutura"
        aria-labelledby="estrutura-titulo"
        className="scroll-mt-28 bg-background px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Nossa estrutura
          </span>

          <h2
            id="estrutura-titulo"
            className="mt-5 text-3xl font-bold text-primary sm:text-4xl"
          >
            Conheça o Studio Aldeota.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-muted">
            Em breve, apresentaremos mais fotografias
            dos ambientes e das atividades da unidade.
          </p>
          
          <div className="mt-12">
            <ImageGallery
              imagens={galeria}
              titulo="Galeria do Instituto Pilates Aldeota"
            />
          </div>

        </div>
      </section>

      {/* 4. Contato e localização */}
      <ContactSection unidadeId="aldeota" />
    </main>
  );
}
