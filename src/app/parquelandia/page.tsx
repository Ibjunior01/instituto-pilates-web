
export default function ParquelandiaPage() {
  return (
    <main className="mx-auto min-h-[75vh] max-w-6xl px-6 py-24">
      <span className="font-semibold uppercase tracking-widest text-accent">
        Instituto Pilates
      </span>

      <h1 className="mt-5 text-5xl font-bold text-primary">
        Unidade Parquelândia
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        Pilates e Laboratório de Força, com acompanhamento
        de fisioterapeutas e atenção individualizada.
      </p>

      <section
        id="laboratorio-de-forca"
        className="mt-16 scroll-mt-28 rounded-3xl bg-background p-8"
      >
        <span className="text-sm font-bold uppercase tracking-widest text-accent">
          Exclusivo da Parquelândia
        </span>

        <h2 className="mt-4 text-3xl font-bold text-primary">
          Laboratório de Força
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-muted">
          Um serviço complementar ao Pilates, voltado ao
          desenvolvimento e à manutenção da força muscular,
          com treinamento individualizado e acompanhamento
          de fisioterapeutas.
        </p>
      </section>
    </main>
  );
}
