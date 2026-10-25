import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Why Choose Coreridge Technologies",
  "Discover Coreridge Technologies' approach to enterprise IT, software and AI transformation, cybersecurity, and system validation.",
  "/company/why-coreridge",
);

export default function WhyCoreridgeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
