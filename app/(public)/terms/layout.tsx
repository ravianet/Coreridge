import { createPageMetadata } from "../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Terms of Service",
  "Review the terms that apply when accessing the Coreridge Technologies website.",
  "/terms",
);

export default function TermsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
