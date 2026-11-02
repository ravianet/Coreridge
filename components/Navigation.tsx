﻿﻿"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plane, Syringe, GraduationCap, Factory, Landmark, Cpu, Layers3, LockKeyhole, ShieldCheck, ArrowRight, Settings, Package, Computer, GitPullRequest, CheckCheck, Video, Truck } from "lucide-react";

const servicePillars = [
  {
    name: "BUILD",
    description: "IT infrastructure & managed hardware",
    href: "/services/build",
    icon: Cpu,
  },
  {
    name: "TRANSFORM",
    description: "Digitalization, software & AI solutions",
    href: "/services/transform",
    icon: Layers3,
  },
  {
    name: "SECURE",
    description: "Cybersecurity & threat protection",
    href: "/services/secure",
    icon: LockKeyhole,
  },
  {
    name: "VALIDATE",
    description: "Computer system validation & compliance",
    href: "/services/validate",
    icon: ShieldCheck,
  },
];

const supportingServices = [
  { name: "SAP Implementation & Rollout", href: "/services/sap-implementation", icon: Settings },
  { name: "Supply Chain Solutions", href: "/services/supply-chain", icon: Truck },
  { name: "Quality Management Systems (QMS)", href: "/services/quality-management", icon: CheckCheck },
  { name: "Change Control & CAPA", href: "/services/change-control", icon: GitPullRequest },
  { name: "Computer System Validation (CSV)", href: "/services/computer-system-validation", icon: ShieldCheck },
  { name: "CCTV & AI Video Analytics", href: "/services/cctv-video-analytics", icon: Video },
];

const industries = [
  {
    name: "Aviation & Aerospace",
    href: "/industries/aviation",
    icon: Plane,
    description: "Mission-critical IT solutions for commercial aviation & aerospace",
  },
  {
    name: "Pharma & Life Sciences",
    href: "/industries/pharma",
    icon: Syringe,
    description: "GxP-compliant IT solutions for pharmaceutical industry",
  },
  {
    name: "Education & Research",
    href: "/industries/education",
    icon: GraduationCap,
    description: "EdTech infrastructure for academic institutions",
  },
  {
    name: "Manufacturing",
    href: "/industries/manufacturing",
    icon: Factory,
    description: "Industry 4.0 smart manufacturing solutions",
  },
  {
    name: "Enterprise & BFSI",
    href: "/industries/enterprise",
    icon: Landmark,
    description: "Banking, financial services & enterprise solutions",
  },
];

// Separate "Why Coreridge" to render first, then the rest
const firstNavLink = [{ name: "Why Coreridge", href: "/company/why-coreridge" }];
const remainingNavLinks = [
  { name: "About Us", href: "/company/about-us" },
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
        ? "bg-slate-100 text-brand-navy"
        : "text-slate-700 hover:bg-slate-50 hover:text-brand-navy"
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
        <div className="flex min-h-10 items-center justify-between gap-5">
          <Link
            href="/"
            aria-label="Coreridge Technologies home"
            className="flex shrink-0 items-center rounded-md transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
            onClick={closeMenus}
          >
            <img
              src="/logos/cr1.png"
              alt="Coreridge Technologies"
              className="h-7 w-auto max-w-[140px] object-contain"
            />
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {/* 1. Why Coreridge - FIRST in menu */}
            {firstNavLink.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={closeMenus}
                className={`whitespace-nowrap rounded-lg px-2.5 py-2 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 ${
                  isActive(link.href)
                    ? "bg-slate-100 text-brand-navy"
                    : "text-slate-700 hover:bg-slate-50 hover:text-brand-navy"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* 2. Services - SECOND with dropdown */}
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
                      {servicePillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                          <Link
                            key={pillar.name}
                            href={pillar.href}
                            onClick={closeMenus}
                            aria-current={isActive(pillar.href) ? "page" : undefined}
                            className={`group flex flex-col rounded-lg border p-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy ${
                              isActive(pillar.href)
                                ? "border-blue-200 bg-blue-50"
                                : "border-slate-200 hover:border-blue-200 hover:bg-blue-50/60"
                            }`}
                          >
                            <Icon aria-hidden="true" className="h-5 w-5 text-slate-500" />
                            <span className="mt-2 block text-sm font-bold tracking-wide text-brand-navy">{pillar.name}</span>
                            <span className="mt-1 block text-xs leading-relaxed text-slate-600">{pillar.description}</span>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-4 border-t border-slate-100 pt-3">
                      <p className="px-2 pb-2 text-xs font-semibold text-slate-500">Specialist solutions</p>
                      <div className="grid grid-cols-2 gap-x-2">
                        {supportingServices.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={closeMenus}
                              className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
                            >
                              <Icon aria-hidden="true" className="h-4 w-4 text-slate-500" />
                              {service.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    <Link
                      href="/services"
                      onClick={closeMenus}
                      className="mt-2 flex items-center gap-1 border-t border-slate-100 px-2 pt-3 text-sm font-semibold text-brand-navy hover:text-brand-navy-dark"
                    >
                      Explore all services <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Industries - THIRD with dropdown */}
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
                    {industries.map((industry) => {
                      const Icon = industry.icon;
                      return (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          onClick={closeMenus}
                          className="flex gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none"
                        >
                          <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 text-slate-500" />
                          <span>
                            <span className="block text-sm font-medium text-slate-800">{industry.name}</span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">{industry.description}</span>
                          </span>
                        </Link>
                      );
                    })}
                    <Link
                      href="/industries"
                      onClick={closeMenus}
                      className="mt-2 flex items-center gap-1 border-t border-slate-100 px-3 pt-3 text-sm font-semibold text-brand-navy hover:text-brand-navy-dark"
                    >
                      Explore all industries <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Remaining links - About Us, Clients, Partners, Contact */}
            {remainingNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={closeMenus}
                className={`whitespace-nowrap rounded-lg px-2.5 py-2 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 ${
                  isActive(link.href)
                    ? "bg-slate-100 text-brand-navy"
                    : "text-slate-700 hover:bg-slate-50 hover:text-brand-navy"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/start"
              onClick={closeMenus}
              className="ml-2 inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 backdrop-blur-xl border border-blue-500/25 px-4 text-[15px] font-semibold text-slate-800 shadow-lg shadow-blue-500/15 transition-all duration-300 hover:from-blue-500/25 hover:to-cyan-500/25 hover:border-blue-500/35 hover:shadow-blue-500/25 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy lg:hidden"
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
              {servicePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <Link
                    key={pillar.name}
                    href={pillar.href}
                    onClick={closeMenus}
                    className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-slate-50"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 text-slate-500" />
                    <span>
                      <span className="block text-sm font-semibold text-brand-navy">{pillar.name}</span>
                      <span className="mt-0.5 block text-xs text-slate-500">{pillar.description}</span>
                    </span>
                  </Link>
                );
              })}
              <p className="px-3 pb-1 pt-3 text-xs font-semibold text-slate-500">Specialist solutions</p>
              {supportingServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={closeMenus}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-navy"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 text-slate-500" />
                    {service.name}
                  </Link>
                );
              })}
              <Link
                href="/services"
                onClick={closeMenus}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-brand-navy"
              >
                Explore all services <ArrowRight aria-hidden="true" className="h-4 w-4" />
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
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Link
                    key={industry.name}
                    href={industry.href}
                    onClick={closeMenus}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-navy"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 text-slate-500" />
                    {industry.name}
                  </Link>
                );
              })}
              <Link
                href="/industries"
                onClick={closeMenus}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-brand-navy"
              >
                Explore all industries <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          )}

          {/* 1. Why Coreridge - FIRST in mobile menu */}
          {firstNavLink.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={closeMenus}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive(link.href) ? "bg-slate-100 text-brand-navy" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* 2. Remaining links - About Us, Clients, Partners, Contact */}
          {remainingNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={closeMenus}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive(link.href) ? "bg-slate-100 text-brand-navy" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/start"
            onClick={closeMenus}
            className="mt-3 flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 backdrop-blur-xl border border-blue-500/25 px-4 text-sm font-semibold text-slate-800 shadow-lg shadow-blue-500/15 transition-all duration-300 hover:from-blue-500/25 hover:to-cyan-500/25 hover:border-blue-500/35 hover:shadow-blue-500/25"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}