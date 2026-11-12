
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.SITE_URL ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : null);

  // Não publicar URLs locais no sitemap de produção.
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
