import { auth } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardNavigation from "../../components/DashboardNavigation";
import { headers } from "next/headers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const isLoginPage = pathname === "/dashboard/login";

  if (!session && !isLoginPage) {
    redirect("/dashboard/login");
  }

  // If user is logged in and tries to access login page, redirect to dashboard
  if (session && isLoginPage) {
    redirect("/dashboard");
  }

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <DashboardNavigation user={session?.user} />
      <div className="md:ml-64">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}