import { auth } from "../../../lib/auth";
import { redirect } from "next/navigation";
import prisma from "../../../lib/prisma";

async function getDashboardStats() {
  const [totalClients, totalVendors, totalInvoices, totalPendingPayments] = await Promise.all([
    prisma.client.count(),
    prisma.vendor.count(),
    prisma.invoice.count(),
    prisma.invoice.aggregate({
      _sum: {
        pendingAmount: true,
      },
    }),
  ]);

  return {
    totalClients,
    totalVendors,
    totalInvoices,
    pendingPayments: totalPendingPayments._sum.pendingAmount || 0,
  };
}

export default async function DashboardPage() {
  const session = await auth();
  if (!session) {
    redirect("/dashboard/login");
  }

  const stats = await getDashboardStats();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Welcome back, {session?.user?.name || "User"}!
        </h1>
        <p className="text-gray-400 mt-2">Here's what's happening with your business today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Clients</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.totalClients}</p>
            </div>
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Vendors</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.totalVendors}</p>
            </div>
            <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Invoices</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.totalInvoices}</p>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Pending Payments</p>
              <p className="text-3xl font-bold text-white mt-1">₹{stats.pendingPayments.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-navy-800 rounded-lg hover:bg-navy-700 transition-colors text-left">
            <span className="text-white font-medium">Create Invoice</span>
          </button>
          <button className="p-4 bg-navy-800 rounded-lg hover:bg-navy-700 transition-colors text-left">
            <span className="text-white font-medium">Add Client</span>
          </button>
          <button className="p-4 bg-navy-800 rounded-lg hover:bg-navy-700 transition-colors text-left">
            <span className="text-white font-medium">Add Vendor</span>
          </button>
          <button className="p-4 bg-navy-800 rounded-lg hover:bg-navy-700 transition-colors text-left">
            <span className="text-white font-medium">Create Quotation</span>
          </button>
        </div>
      </div>
    </div>
  );
}