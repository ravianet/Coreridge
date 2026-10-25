import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "AI & Software Development Services",
  "Transform business operations with custom software, web applications, AI and machine learning, ERP/CRM solutions, and modernization services.",
  "/services/transform",
);

export default function TransformLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
