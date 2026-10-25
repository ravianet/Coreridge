import { auth } from "../../lib/auth";
import { redirect } from "next/navigation";
import DashboardNavigation from "../../components/DashboardNavigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/dashboard/login");
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