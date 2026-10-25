import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Quality Management System (QMS) Solutions",
  "Support quality operations with QMS implementation and process services for document control, CAPA, change management, and continuous improvement.",
  "/services/quality-management",
);

export default function QualityManagementLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
