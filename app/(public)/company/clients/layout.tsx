import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Coreridge Client Work & Partnerships",
  "Explore client partnerships and work delivered by Coreridge Technologies across enterprise technology and digital transformation.",
  "/company/clients",
);

export default function CompanyClientsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
