import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Careers at Coreridge Technologies",
  "Explore career opportunities and learn about working with the Coreridge Technologies team.",
  "/company/careers",
);

export default function CareersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
