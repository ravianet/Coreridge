"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

interface User {
  name?: string | null;
  email?: string | null;
  role?: string;
}

export default function DashboardNavigation({ user }: { user?: User | null }) {
  if (!user) return null;
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: "📊" },
    { name: "Clients", href: "/dashboard/clients", icon: "👥" },
    { name: "Vendors", href: "/dashboard/vendors", icon: "🏪" },
    { name: "Quotations", href: "/dashboard/quotations", icon: "📋" },
    { name: "Invoices", href: "/dashboard/invoices", icon: "🧾" },
    { name: "Payments", href: "/dashboard/payments", icon: "💳" },
    { name: "Products", href: "/dashboard/products", icon: "📦" },
    { name: "Reports", href: "/dashboard/reports", icon: "📈" },
  ];

  // Only show accounting to accountants and admins
  const accountingItems = [
    { name: "Ledger", href: "/dashboard/ledger", icon: "📒" },
    { name: "Profit & Loss", href: "/dashboard/profit-loss", icon: "💰" },
    { name: "GST Reports", href: "/dashboard/gst-reports", icon: "📑" },
  ];

  const canViewAccounting = user?.role === "ADMIN" || user?.role === "ACCOUNTANT";

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-gray-800 border-b border-gray-700 z-50 flex items-center justify-between px-4">
        <span className="font-bold text-cyan-400">ERP Dashboard</span>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-sm text-red-400"
        >
          Logout
        </button>
      </div>

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-gray-800 border-r border-gray-700 z-40 hidden md:block">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            ERP System
          </h2>
          <p className="text-gray-400 text-sm mt-1">{user.name || user.email}</p>
          <span className="inline-block mt-2 px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
            {user.role}
          </span>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.href)
                  ? "bg-cyan-500/20 text-cyan-400"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}

          {canViewAccounting && (
            <>
              <div className="border-t border-gray-700 my-4 pt-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 px-4">
                  Accounting
                </p>
              </div>
              {accountingItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </>
          )}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-left"
          >
            🚪 Logout
          </button>
        </div>
      </aside>
    </>
  );
}