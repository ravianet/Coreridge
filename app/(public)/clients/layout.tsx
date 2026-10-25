import { createPageMetadata } from "../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Client Partnerships",
  "Discover organizations that work with Coreridge Technologies across enterprise technology, infrastructure, software, and compliance.",
  "/clients",
);

export default function ClientsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
