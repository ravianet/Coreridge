"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/company/clients" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 w-full z-[9999] glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between h-auto md:h-24 py-4 md:py-0">
          <Link href="/" className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <img 
              src="/logos/cr1.png" 
              alt="Coreridge Technologies Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Universal Navigation - Works on all devices, no hamburger, no JavaScript */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-2 py-1 text-sm md:text-base transition-colors ${
                  isActive(link.href)
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 md:mt-0 px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}