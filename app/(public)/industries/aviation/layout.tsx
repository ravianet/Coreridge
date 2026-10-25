import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Aviation & Aerospace Technology Solutions",
  "Explore enterprise IT infrastructure, security, and technology services for aviation and aerospace organizations.",
  "/industries/aviation",
);

export default function AviationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
