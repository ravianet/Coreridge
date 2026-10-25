import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Pharma & Life Sciences IT and CSV Services",
  "Support pharmaceutical and life sciences systems with IT infrastructure, computer system validation, cybersecurity, and GxP compliance services.",
  "/industries/pharma",
);

export default function PharmaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
