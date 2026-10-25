import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start an Enterprise Technology Project",
  description:
    "Tell Coreridge Technologies about your project and connect with a team for enterprise technology consulting.",
};

export default function StartLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
