import { auth } from "../../../../lib/auth";
import DashboardLoginForm from "../../../../components/DashboardLoginForm";
import { redirect } from "next/navigation";

export default async function DashboardLoginPage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return <DashboardLoginForm />;
}
