import { createPageMetadata } from "../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Industry Technology Solutions",
  "Technology and compliance solutions for aviation, education, financial services, manufacturing, and life sciences.",
  "/industries",
);

export default function IndustriesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
