
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/contact/FloatingWhatsApp";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Instituto Pilates | Fortaleza",
  description:
    "Conheça o Instituto Pilates em Fortaleza. Pilates na Aldeota e Pilates com Laboratório de Força na Parquelândia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={manrope.variable}>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
