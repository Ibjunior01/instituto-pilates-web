
import type { MetadataRoute } from "next";
import { obterUrlSite } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = obterUrlSite();
  const permitirIndexacao =
    process.env.SITE_INDEXABLE === "true";

  if (!permitirIndexacao || !siteUrl) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
