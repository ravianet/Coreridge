import { createPageMetadata } from "../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "About Coreridge Technologies",
  "Learn about Coreridge Technologies, our delivery approach, client partnerships, and enterprise technology expertise.",
  "/company/about-us",
);

export default function CompanyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
