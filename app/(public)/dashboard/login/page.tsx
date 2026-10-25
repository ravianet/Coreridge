import type { Metadata } from "next";
import { auth } from "../../../../lib/auth";
import DashboardLoginForm from "../../../../components/DashboardLoginForm";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Employee Login",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardLoginPage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return <DashboardLoginForm />;
}
