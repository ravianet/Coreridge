import type { MetadataRoute } from "next";

const siteUrl = "https://coreridgetech.com";
const publicPaths = [
  "/",
  "/clients",
  "/company/about-us",
  "/company/alliances",
  "/company/careers",
  "/company/clients",
  "/company/why-coreridge",
  "/contact",
  "/industries",
  "/industries/aviation",
  "/industries/education",
  "/industries/enterprise",
  "/industries/manufacturing",
  "/industries/pharma",
  "/services",
  "/services/build",
  "/services/cctv-video-analytics",
  "/services/change-control",
  "/services/computer-system-validation",
  "/services/quality-management",
  "/services/sap-implementation",
  "/services/secure",
  "/services/supply-chain",
  "/services/transform",
  "/services/validate",
  "/start",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
