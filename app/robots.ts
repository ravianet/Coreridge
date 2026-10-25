import type { MetadataRoute } from "next";

const siteUrl = "https://coreridgetech.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/api/"],
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
