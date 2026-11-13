
export default function Hero() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="relative overflow-hidden bg-background"
    >
      {/* Detalhe decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:min-h-[680px] lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">

        {/* Conteúdo principal: visível imediatamente */}
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-8 bg-accent"
            />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Instituto Pilates · Fortaleza
            </span>
          </div>

          <h1
            id="hero-titulo"
            className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-primary sm:text-5xl lg:text-[3.7rem]"
          >
            Movimento que transforma.{" "}
            <span className="mt-2 block text-accent">
              Cuidado que acompanha.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Descubra uma experiência de cuidado e movimento
            com acompanhamento profissional e atenção
            individualizada. Conheça nossos espaços na
            Aldeota e na Parquelândia, em Fortaleza.
          </p>

          {/* Ações principais */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/#agendamento"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-500/10 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Agende sua aula
              <span aria-hidden="true" className="ml-3">
                →
              </span>
            </a>

            <a
              href="/#sobre"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/15 bg-white px-8 py-4 text-sm font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              Conheça o Instituto
            </a>
          </div>

          {/* Identificação das unidades */}
          <div className="mt-12 border-t border-border pt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
              Estamos em Fortaleza
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="/aldeota"
                className="text-sm font-semibold text-primary hover:text-accent"
              >
                <span aria-hidden="true" className="mr-2 text-accent">
                  ●
                </span>
                Aldeota
              </a>

              <a
                href="/parquelandia"
                className="text-sm font-semibold text-primary hover:text-accent"
              >
                <span aria-hidden="true" className="mr-2 text-accent">
                  ●
                </span>
                Parquelândia
              </a>
            </div>
          </div>
        </div>

        {/* Área fotográfica */}
        <div className="relative">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-primary shadow-2xl shadow-primary/15 sm:aspect-[5/4] lg:aspect-[4/5]"
            role="img"
            aria-label="Ambiente de Pilates do Instituto Pilates"
            style={{
              backgroundImage:
                'linear-gradient(145deg, rgba(3,11,54,0.12), rgba(3,11,54,0.72)), url("/images/hero-pilates.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-transparent to-transparent" />

            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/15"
            />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="max-w-xs border-l-2 border-accent pl-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Instituto Pilates
                </p>

                <p className="mt-2 text-xl font-semibold leading-snug text-white sm:text-2xl">
                  Cuidado em cada movimento.
                </p>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-[2rem] border-2 border-accent/40"
          />
        </div>
      </div>
    </section>
  );
}
