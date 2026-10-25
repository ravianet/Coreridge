import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Education & Research Technology Solutions",
  "Support education and research organizations with reliable infrastructure, digital platforms, cybersecurity, and validation services.",
  "/industries/education",
);

export default function EducationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
