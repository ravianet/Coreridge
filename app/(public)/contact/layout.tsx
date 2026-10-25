import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Coreridge Technologies",
  description:
    "Contact Coreridge Technologies to discuss enterprise IT, AI, infrastructure, cybersecurity, and validation needs.",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
