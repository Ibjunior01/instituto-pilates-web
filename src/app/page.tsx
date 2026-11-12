
import Link from "next/link";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Units from "@/components/home/Units";
import BookingCTA from "@/components/home/BookingCTA";
import GoogleReviews from "@/components/home/GoogleReviews";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Instituto Pilates em Fortaleza | Aldeota e Parquelândia",
  },
  alternates: {
    canonical: "/",
  },

  description:
    "Conheça o Instituto Pilates em Fortaleza. Unidades na Aldeota e Parquelândia, com aulas de Pilates e Laboratório de Força. Entre em contato.",
};


const unidades = [
  {
    nome: "Aldeota",
    servico: "Pilates",
    descricao:
      "Um espaço dedicado ao Pilates, com foco no movimento, no bem-estar e no acompanhamento profissional.",
    href: "/aldeota",
  },
  {
    nome: "Parquelândia",
    servico: "Pilates e Laboratório de Força",
    descricao:
      "Pilates e treinamento de força individualizado, com orientação e acompanhamento de fisioterapeutas.",
    href: "/parquelandia",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Units />
      <BookingCTA />
      <Testimonials />
      <GoogleReviews />
    </main>
  );
}
