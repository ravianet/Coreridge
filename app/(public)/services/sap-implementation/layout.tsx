import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "SAP Implementation & Managed Services",
  "Plan SAP implementation, rollout, migration, and managed services to support enterprise processes and digital transformation.",
  "/services/sap-implementation",
);

export default function SapImplementationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
