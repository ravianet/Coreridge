import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Technology Solutions",
  description:
    "Technology and compliance solutions for aviation, education, financial services, manufacturing, and life sciences.",
};

export default function IndustriesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
