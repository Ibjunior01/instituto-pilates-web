
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera HTML, CSS e JavaScript para hospedagem estática.
  output: "export",

  // Evita depender do servidor de otimização de imagens.
  images: {
    unoptimized: true,
  },

  // Mantém a configuração atual do Turbopack.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
