import { createPageMetadata } from "../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Start an Enterprise Technology Project",
  "Tell Coreridge Technologies about your project and connect with a team for enterprise technology consulting.",
  "/start",
);

export default function StartLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
