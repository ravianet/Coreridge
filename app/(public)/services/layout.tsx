import { createPageMetadata } from "../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Enterprise Technology Services",
  "Explore Coreridge services in IT infrastructure, AI, cybersecurity, enterprise applications, supply chain, and computer system validation.",
  "/services",
);

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
