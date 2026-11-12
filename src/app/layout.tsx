
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/contact/FloatingWhatsApp";

import { obterUrlSite } from "@/lib/seo";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = obterUrlSite();

export const metadata: Metadata = {
  ...(siteUrl
    ? { metadataBase: new URL(siteUrl) }
    : {}),

  title: {
    default: "Instituto Pilates | Fortaleza",
    template: "%s | Instituto Pilates",
  },

  description:
    "Conheça o Instituto Pilates em Fortaleza. Pilates na Aldeota e Pilates com Laboratório de Força na Parquelândia.",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Instituto Pilates",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
    >
      <body className={manrope.variable}>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
