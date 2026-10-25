import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "IT Infrastructure & Managed Services",
  "Design, deploy, and manage resilient enterprise IT infrastructure, networks, compute, storage, and hybrid cloud environments with Coreridge.",
  "/services/build",
);

export default function BuildLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
