
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

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
    <html lang="pt-BR">
      <body className={manrope.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
