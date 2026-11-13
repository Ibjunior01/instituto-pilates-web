
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.SITE_URL ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : null);

  // Sem domínio configurado, não liberar
  // o rastreamento em produção.
  if (!siteUrl) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  const baseUrl = siteUrl.replace(/\/+$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
