import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Manufacturing & Industry 4.0 Technology",
  "Explore infrastructure, automation, data, cybersecurity, and enterprise technology services for manufacturing organizations.",
  "/industries/manufacturing",
);

export default function ManufacturingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
