
import type { MetadataRoute } from "next";
import { obterUrlSite } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = obterUrlSite();
  const permitirIndexacao =
    process.env.SITE_INDEXABLE === "true";

  if (!permitirIndexacao || !siteUrl) {
    return [];
  }

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/aldeota`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/parquelandia`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
