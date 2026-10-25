import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "CCTV & AI Video Analytics Solutions",
  "Explore CCTV, video surveillance, and AI video analytics solutions for monitoring, safety, and operational visibility.",
  "/services/cctv-video-analytics",
);

export default function CctvVideoAnalyticsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
