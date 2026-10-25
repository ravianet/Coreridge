import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "About Coreridge Technologies",
  "Learn about Coreridge Technologies, our enterprise technology services, and how we partner with organizations to build, transform, secure, and validate systems.",
  "/company/about-us",
);

export default function AboutUsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
