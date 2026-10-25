import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Partnerships",
  description:
    "Discover how Coreridge Technologies partners with organizations to deliver enterprise technology solutions.",
};

export default function ClientsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
