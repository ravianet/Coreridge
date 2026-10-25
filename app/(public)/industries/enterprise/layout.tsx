import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Enterprise Technology & IT Solutions",
  "Modernize enterprise systems with technology services across infrastructure, software, cybersecurity, and compliance.",
  "/industries/enterprise",
);

export default function EnterpriseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
