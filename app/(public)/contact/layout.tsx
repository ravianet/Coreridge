import { createPageMetadata } from "../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Contact Coreridge Technologies",
  "Contact Coreridge Technologies to discuss enterprise IT, AI, infrastructure, cybersecurity, and validation needs.",
  "/contact",
);

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
