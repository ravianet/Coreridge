import { createPageMetadata } from "../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "Read how Coreridge Technologies handles information submitted through its website and how to contact us with privacy questions.",
  "/privacy",
);

export default function PrivacyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
