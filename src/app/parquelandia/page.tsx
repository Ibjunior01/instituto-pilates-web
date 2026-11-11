
import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/gallery/ImageGallery";
import ContactSection from "@/components/contact/ContactSection";
import LocalBusinessData from "@/components/seo/LocalBusinessData";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Pilates e Laboratório de Força na Parquelândia | Instituto Pilates",
  description:
    "Conheça o Instituto Pilates Parquelândia, em Fortaleza. Pilates e Laboratório de Força com treinamento individualizado e acompanhamento de fisioterapeutas.",
};

const beneficios = [
  {
    numero: "01",
    titulo: "Força e resistência",
    descricao:
      "Exercícios direcionados ao desenvolvimento e à manutenção da força e da resistência muscular.",
  },
  {
    numero: "02",
    titulo: "Massa muscular",
    descricao:
      "Treinamento progressivo que pode contribuir para o ganho e a preservação da massa muscular.",
  },
  {
    numero: "03",
    titulo: "Equilíbrio e estabilidade",
    descricao:
      "Atividades que trabalham capacidades importantes para os movimentos do cotidiano.",
  },
  {
    numero: "04",
    titulo: "Autonomia",
    descricao:
      "Fortalecimento voltado à funcionalidade e à realização das atividades diárias.",
  },
  {
    numero: "05",
    titulo: "Prevenção de quedas",
    descricao:
      "Trabalho de força e equilíbrio que pode integrar estratégias para reduzir o risco de quedas.",
  },
  {
    numero: "06",
    titulo: "Envelhecimento saudável",
    descricao:
      "Uma abordagem que valoriza o movimento e a manutenção das capacidades físicas ao longo da vida.",
  },
];

const galeria = [
  {
    numero: "01",
    imagem: "/images/parquelandia-01.jpg",
    descricao: "Ambiente do Instituto Pilates Parquelândia",
  },
  {
    numero: "02",
    imagem: "/images/parquelandia-02.jpg",
    descricao: "Espaço de Pilates da unidade Parquelândia",
  },
  {
    numero: "03",
    imagem: "/images/parquelandia-03.jpg",
    descricao: "Laboratório de Força da unidade Parquelândia",
  },
];

export default function ParquelandiaPage() {
  return (
    <main>
      <LocalBusinessData unidadeId="parquelandia" />
      
      {/* 1. Hero */}
      <section className="bg-background px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Instituto Pilates · Parquelândia
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Movimento e força
              <span className="block text-accent">
                para viver melhor.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              Conheça nossa unidade na Parquelândia,
              em Fortaleza. Pilates e Laboratório de Força
              em um ambiente de cuidado, com atenção
              individualizada e acompanhamento profissional.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#servicos"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-bold text-white hover:-translate-y-1"
              >
                Conheça os serviços →
              </Link>

              <Link
                href="#contato"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/20 bg-white px-8 py-4 text-sm font-semibold text-primary hover:bg-primary/5"
              >
                Entre em contato
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-3 border-t border-border pt-6">
              {["Pilates", "Laboratório de Força"].map(
                (servico) => (
                  <span
                    key={servico}
                    className="rounded-full border border-border bg-white px-5 py-2 text-sm font-semibold text-primary"
                  >
                    {servico}
                  </span>
                )
              )}
            </div>
          </div>

          <div
            role="img"
            aria-label="Área reservada para fotografia da unidade Parquelândia"
            className="relative flex aspect-[4/5] items-end overflow-hidden rounded-[2rem] bg-primary p-8 shadow-2xl shadow-primary/15 sm:aspect-[5/4] lg:aspect-[4/5]"
            style={{
              backgroundImage:
                'linear-gradient(to top, rgba(3,11,54,0.9), rgba(3,11,54,0.05)), url("/images/parquelandia-studio.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="border-l-2 border-accent pl-5">
              <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                Instituto Pilates
              </p>
              <p className="mt-3 text-3xl font-bold text-white">
                Parquelândia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Serviços */}
      <section
        id="servicos"
        className="scroll-mt-28 bg-white px-6 py-24"
        aria-labelledby="servicos-titulo"
      >
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Nossos serviços
          </span>

          <h2
            id="servicos-titulo"
            className="mt-5 text-3xl font-extrabold text-primary sm:text-4xl"
          >
            Diferentes formas de cuidar do movimento.
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-border bg-background p-8 sm:p-10">
              <span className="text-sm font-bold text-accent">
                01 / PILATES
              </span>

              <h3 className="mt-6 text-3xl font-bold text-primary">
                Pilates
              </h3>

              <p className="mt-5 leading-8 text-muted">
                Uma prática que trabalha movimento,
                controle corporal, mobilidade e equilíbrio,
                respeitando a individualidade de cada aluno.
              </p>

              <Link
                href="#contato"
                className="mt-8 inline-flex font-bold text-accent hover:underline"
              >
                Quero conhecer →
              </Link>
            </article>

            <article className="rounded-3xl bg-primary p-8 text-white sm:p-10">
              <span className="text-sm font-bold text-white/70">
                02 / LABORATÓRIO DE FORÇA
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                Laboratório de Força
              </h3>

              <p className="mt-5 leading-8 text-white/75">
                Treinamento individualizado para desenvolver
                e manter a força muscular, com orientação
                de fisioterapeutas e evolução progressiva
                dos exercícios e das cargas.
              </p>

              <Link
                href="#laboratorio-de-forca"
                className="mt-8 inline-flex font-bold text-white hover:underline"
              >
                Saiba mais →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Laboratório de Força */}
      <section
        id="laboratorio-de-forca"
        aria-labelledby="forca-titulo"
        className="scroll-mt-28 bg-background px-6 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Exclusivo da Parquelândia
          </span>

          <h2
            id="forca-titulo"
            className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl"
          >
            Laboratório de Força.
            <span className="mt-2 block text-accent">
              Mais força para o dia a dia.
            </span>
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-lg leading-8 text-muted">
                O Laboratório de Força é um serviço
                complementar ao Pilates, voltado ao
                desenvolvimento e à manutenção da força
                muscular, contribuindo para a funcionalidade
                e a qualidade de vida.
              </p>

              <p className="mt-5 leading-8 text-muted">
                Os exercícios utilizam equipamentos e
                acessórios de musculação, sob orientação
                e acompanhamento de fisioterapeutas.
              </p>

              <p className="mt-5 leading-8 text-muted">
                O treinamento é individualizado, respeitando
                necessidades, objetivos e capacidade física
                de cada aluno, com progressão dos exercícios
                e das cargas.
              </p>

              <Link
                href="#contato"
                className="mt-8 inline-flex rounded-full bg-accent px-8 py-4 text-sm font-bold text-white hover:-translate-y-1"
              >
                Tenho interesse no Laboratório de Força →
              </Link>
            </div>
            
            <div className="relative min-h-[400px] overflow-hidden rounded-3xl sm:min-h-[440px]">
              <Image
                src="/images/parquelandia-laboratorio-forca.jpg"
                alt="Equipamentos do Laboratório de Força da unidade Parquelândia"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              {/* Degradê mais forte na parte inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/25 to-transparent" />

              {/* Texto posicionado no rodapé */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                <div className="max-w-sm border-l-2 border-accent pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
                    Acompanhamento individualizado
                  </p>

                  <p className="mt-2 text-xl font-bold leading-snug text-white sm:text-2xl">
                    Evolução progressiva,
                    <span className="block">
                      respeitando você.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefícios */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">
              Benefícios do treinamento de força
            </h3>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {beneficios.map((beneficio) => (
                <article
                  key={beneficio.numero}
                  className="rounded-3xl border border-border bg-white p-7 transition-shadow hover:shadow-lg"
                >
                  <span className="text-sm font-bold text-accent">
                    {beneficio.numero}
                  </span>

                  <h4 className="mt-6 text-xl font-bold text-primary">
                    {beneficio.titulo}
                  </h4>

                  <p className="mt-4 leading-7 text-muted">
                    {beneficio.descricao}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Galeria provisória */}
      <section
        id="estrutura"
        className="scroll-mt-28 bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Nosso espaço
          </span>

          <h2 className="mt-5 text-3xl font-bold text-primary sm:text-4xl">
            Conheça a unidade Parquelândia.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-muted">
            Em breve, apresentaremos fotografias reais dos
            ambientes de Pilates e do Laboratório de Força.
          </p>

          <div className="mt-12">
            <ImageGallery
              imagens={galeria}
              titulo="Galeria do Instituto Pilates Parquelândia"
            />
          </div>
        </div>
      </section>

      {/* 5. Contato */}
      <ContactSection unidadeId="parquelandia" />

    </main>
  );
}
