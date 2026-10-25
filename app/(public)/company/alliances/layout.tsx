import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Technology Alliances & Partners",
  "Learn about Coreridge Technologies' alliances and partner ecosystem supporting enterprise technology delivery.",
  "/company/alliances",
);

export default function AlliancesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
