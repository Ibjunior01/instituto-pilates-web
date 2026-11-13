
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.SITE_URL ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : null);



  // Não gerar URLs públicas sem domínio configurado.
  if (!siteUrl) {
    return [];
  }

  const baseUrl = siteUrl.replace(/\/+$/, "");

  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/aldeota`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/parquelandia`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
