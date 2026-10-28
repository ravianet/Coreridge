"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const servicePillars = [
  {
    name: "BUILD",
    description: "IT infrastructure & managed hardware",
    href: "/services/build",
  },
  {
    name: "TRANSFORM",
    description: "Digitalization, software & AI solutions",
    href: "/services/transform",
  },
  {
    name: "SECURE",
    description: "Cybersecurity & threat protection",
    href: "/services/secure",
  },
  {
    name: "VALIDATE",
    description: "Computer system validation & compliance",
    href: "/services/validate",
  },
];

const supportingServices = [
  { name: "SAP Implementation & Rollout", href: "/services/sap-implementation" },
  { name: "Supply Chain Solutions", href: "/services/supply-chain" },
  { name: "Quality Management Systems (QMS)", href: "/services/quality-management" },
  { name: "Change Control & CAPA", href: "/services/change-control" },
  { name: "Computer System Validation (CSV)", href: "/services/computer-system-validation" },
  { name: "CCTV & AI Video Analytics", href: "/services/cctv-video-analytics" },
];

const industries = [
  {
    name: "Aviation & Aerospace",
    href: "/industries/aviation",
    icon: "✈️",
    description: "Mission-critical IT solutions for commercial aviation & aerospace",
  },
  {
    name: "Pharma & Life Sciences",
    href: "/industries/pharma",
    icon: "💊",
    description: "GxP-compliant IT solutions for pharmaceutical industry",
  },
  {
    name: "Education & Research",
    href: "/industries/education",
    icon: "🎓",
    description: "EdTech infrastructure for academic institutions",
  },
  {
    name: "Manufacturing",
    href: "/industries/manufacturing",
    icon: "🏭",
    description: "Industry 4.0 smart manufacturing solutions",
  },
  {
    name: "Enterprise & BFSI",
    href: "/industries/enterprise",
    icon: "🏦",
    description: "Banking, financial services & enterprise solutions",
  },
];

const mainNavLinks = [
  { name: "About Us", href: "/company/about-us" },
  { name: "Why CoreRidge", href: "/company/why-coreridge" },
  { name: "Clients", href: "/clients" },
  { name: "Partners", href: "/company/alliances" },
  { name: "Contact", href: "/contact" },
];

type MenuName = "services" | "industries";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuName | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const toggleMenu = (menu: MenuName) => setOpenMenu((current) => (current === menu ? null : menu));
  const closeMenus = () => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  const menuButtonClass = (menu: MenuName) =>
    `flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-[15px] font-medium transition-colors lg:w-auto lg:justify-center lg:px-3 lg:py-2 ${
      openMenu === menu || (menu === "services" ? pathname.startsWith("/services") : pathname.startsWith("/industries"))
        ? "bg-slate-100 text-[#184491]"
        : "text-slate-700 hover:bg-slate-50 hover:text-[#184491]"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9999] border-b transition-[background-color,box-shadow] duration-200 ${
        scrolled
          ? "border-slate-200/90 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
          : "border-slate-200/70 bg-white"
      }`}
    >
      <nav aria-label="Main navigation" className="container-pro">
        <div className="flex min-h-12 items-center justify-between gap-5">
          <Link
            href="/"
            aria-label="Coreridge Technologies home"
            className="flex shrink-0 items-center rounded-md transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#184491] focus-visible:ring-offset-2"
            onClick={closeMenus}
          >
            <img
              src="/logos/cr1.png"
              alt="Coreridge Technologies"
              className="h-9 w-auto max-w-[180px] object-contain"
            />
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            <div className="relative">
              <button
                type="button"
                aria-expanded={openMenu === "services"}
                aria-haspopup="true"
                onClick={() => toggleMenu("services")}
                className={menuButtonClass("services")}
              >
                Services <Chevron open={openMenu === "services"} />
              </button>
              {openMenu === "services" && (
                <div className="absolute left-0 top-full w-[600px] pt-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10">
                    <p className="px-2 pb-3 pt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      What we do
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {servicePillars.map((pillar) => (
                        <Link
                          key={pillar.name}
                          href={pillar.href}
                          onClick={closeMenus}
                          aria-current={isActive(pillar.href) ? "page" : undefined}
                          className={`group rounded-lg border p-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#184491] ${
                            isActive(pillar.href)
                              ? "border-blue-200 bg-blue-50"
                              : "border-slate-200 hover:border-blue-200 hover:bg-blue-50/60"
                          }`}
                        >
                          <span className="block text-sm font-bold tracking-wide text-[#184491]">{pillar.name}</span>
                          <span className="mt-1 block text-xs leading-relaxed text-slate-600">{pillar.description}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-slate-100 pt-3">
                      <p className="px-2 pb-2 text-xs font-semibold text-slate-500">Specialist solutions</p>
                      <div className="grid grid-cols-2 gap-x-2">
                        {supportingServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={closeMenus}
                            className="rounded-md px-2 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#184491] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#184491]"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link
                      href="/services"
                      onClick={closeMenus}
                      className="mt-2 block border-t border-slate-100 px-2 pt-3 text-sm font-semibold text-[#184491] hover:text-[#12366f]"
                    >
                      Explore all services <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                aria-expanded={openMenu === "industries"}
                aria-haspopup="true"
                onClick={() => toggleMenu("industries")}
                className={menuButtonClass("industries")}
              >
                Industries <Chevron open={openMenu === "industries"} />
              </button>
              {openMenu === "industries" && (
                <div className="absolute left-0 top-full w-[360px] pt-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/10">
                    <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Industry expertise
                    </p>
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        onClick={closeMenus}
                        className="flex gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none"
                      >
                        <span aria-hidden="true" className="mt-0.5 text-lg">{industry.icon}</span>
                        <span>
                          <span className="block text-sm font-medium text-slate-800">{industry.name}</span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">{industry.description}</span>
                        </span>
                      </Link>
                    ))}
                    <Link
                      href="/industries"
                      onClick={closeMenus}
                      className="mt-2 block border-t border-slate-100 px-3 pt-3 text-sm font-semibold text-[#184491] hover:text-[#12366f]"
                    >
                      Explore all industries <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={closeMenus}
                className={`whitespace-nowrap rounded-lg px-2.5 py-2 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#184491] focus-visible:ring-offset-2 ${
                  isActive(link.href)
                    ? "bg-slate-100 text-[#184491]"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#184491]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/start"
              onClick={closeMenus}
              className="ml-2 inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#184491] px-4 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-[#12366f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#184491] focus-visible:ring-offset-2"
            >
              Get Started
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setMobileMenuOpen((open) => !open);
              setOpenMenu(null);
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#184491] lg:hidden"
          >
            {mobileMenuOpen ? (
              <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`${mobileMenuOpen ? "block" : "hidden"} max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-slate-100 pb-5 pt-3 lg:hidden`}
        >
          <button
            type="button"
            aria-expanded={openMenu === "services"}
            onClick={() => toggleMenu("services")}
            className={menuButtonClass("services")}
          >
            Services <Chevron open={openMenu === "services"} />
          </button>
          {openMenu === "services" && (
            <div className="mb-3 ml-3 border-l border-slate-200 py-1 pl-3">
              <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Our four pillars</p>
              {servicePillars.map((pillar) => (
                <Link
                  key={pillar.name}
                  href={pillar.href}
                  onClick={closeMenus}
                  className="block rounded-md px-3 py-2 transition-colors hover:bg-slate-50"
                >
                  <span className="block text-sm font-semibold text-[#184491]">{pillar.name}</span>
                  <span className="mt-0.5 block text-xs text-slate-500">{pillar.description}</span>
                </Link>
              ))}
              <p className="px-3 pb-1 pt-3 text-xs font-semibold text-slate-500">Specialist solutions</p>
              {supportingServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  onClick={closeMenus}
                  className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#184491]"
                >
                  {service.name}
                </Link>
              ))}
              <Link href="/services" onClick={closeMenus} className="block px-3 py-2 text-sm font-semibold text-[#184491]">
                Explore all services →
              </Link>
            </div>
          )}

          <button
            type="button"
            aria-expanded={openMenu === "industries"}
            onClick={() => toggleMenu("industries")}
            className={menuButtonClass("industries")}
          >
            Industries <Chevron open={openMenu === "industries"} />
          </button>
          {openMenu === "industries" && (
            <div className="mb-2 ml-3 border-l border-slate-200 py-1 pl-3">
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  href={industry.href}
                  onClick={closeMenus}
                  className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#184491]"
                >
                  {industry.name}
                </Link>
              ))}
              <Link href="/industries" onClick={closeMenus} className="block px-3 py-2 text-sm font-semibold text-[#184491]">
                Explore all industries →
              </Link>
            </div>
          )}

          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={closeMenus}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive(link.href) ? "bg-slate-100 text-[#184491]" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/start"
            onClick={closeMenus}
            className="mt-3 flex min-h-11 items-center justify-center rounded-lg bg-[#184491] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#12366f]"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
