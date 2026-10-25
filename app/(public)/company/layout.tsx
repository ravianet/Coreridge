import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Coreridge Technologies",
  description:
    "Learn about Coreridge Technologies, our delivery approach, client partnerships, and enterprise technology expertise.",
};

export default function CompanyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
