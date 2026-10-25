import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Cybersecurity & Threat Protection Services",
  "Strengthen enterprise security with network and endpoint protection, data security, security assessments, and practical threat-defense services.",
  "/services/secure",
);

export default function SecureLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
