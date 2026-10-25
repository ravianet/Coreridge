import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Change Control & CAPA Services",
  "Improve quality processes with structured change control, CAPA, issue management, and compliance support for regulated organizations.",
  "/services/change-control",
);

export default function ChangeControlLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
