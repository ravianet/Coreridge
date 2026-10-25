import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Computer System Validation & Compliance",
  "Support regulated systems with computer system validation, GxP compliance, qualification, data integrity, and audit-readiness services.",
  "/services/validate",
);

export default function ValidateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
