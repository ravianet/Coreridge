import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Technology Services",
  description:
    "Explore Coreridge services in IT infrastructure, AI, cybersecurity, enterprise applications, supply chain, and computer system validation.",
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
