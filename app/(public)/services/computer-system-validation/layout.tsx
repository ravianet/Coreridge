import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Computer System Validation (CSV) Services",
  "Plan and perform computer system validation for regulated applications, including requirements, qualification, documentation, and audit support.",
  "/services/computer-system-validation",
);

export default function ComputerSystemValidationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
