import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const serviceLinks = [
  { label: "IT infrastructure", href: "/services/build" },
  { label: "Software & AI", href: "/services/transform" },
  { label: "Cybersecurity", href: "/services/secure" },
  { label: "Validation & compliance", href: "/services/validate" },
];

const companyLinks = [
  { label: "Why Coreridge", href: "/company/why-coreridge" },
  { label: "About us", href: "/company/about-us" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/company/careers" },
];

const footerLinkClass =
  "group inline-flex min-h-8 items-center gap-1 text-sm text-slate-600 transition-colors hover:text-brand-navy focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-navy/10 bg-[#E8EDF2] text-brand-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_88%_0%,rgba(213,133,91,0.12),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.42),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-3 pt-8 sm:px-8 sm:pt-10 lg:px-10 lg:pt-12">
        <div className="grid grid-cols-2 gap-7 border-b border-brand-navy/10 pb-7 sm:gap-x-8 sm:gap-y-7 lg:grid-cols-[1.25fr_0.9fr_0.9fr_0.9fr] lg:gap-8 lg:pb-8">
          <div className="col-span-2 max-w-sm sm:col-span-1">
            <Link
              href="/"
              aria-label="Coreridge Technologies home"
              className="inline-flex rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
            >
              <Image
                src="/logos/cr1.png"
                alt="Coreridge Technologies"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Build, transform, secure, and validate the technology your
              business depends on.
            </p>
            <a
              href="mailto:info@coreridgetech.com"
              className="mt-3 inline-flex min-h-8 items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-brand-navy focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              <Mail aria-hidden="true" className="h-4 w-4 text-[#A95122]" />
              info@coreridgetech.com
            </a>
            <Link
              href="https://www.linkedin.com/company/coreridge-technologies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Coreridge Technologies on LinkedIn (opens in a new tab)"
              className="mt-3 flex h-8 w-8 items-center justify-center rounded-lg transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              <Image
                src="/logos/LinkedIn_logo_initials.avif"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </Link>
          </div>

          <nav aria-label="Services">
            <h2 className="text-sm font-semibold tracking-wide text-brand-navy">
              Services
            </h2>
            <ul className="mt-3 space-y-1">
              {serviceLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={footerLinkClass}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="mt-1 inline-flex min-h-8 items-center gap-1 text-sm font-semibold text-[#A95122] transition-colors hover:text-brand-navy focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
                >
                  All services
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-sm font-semibold tracking-wide text-brand-navy">
              Company
            </h2>
            <ul className="mt-3 space-y-1">
              {companyLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={footerLinkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explore" className="col-span-2 sm:col-span-1">
            <h2 className="text-sm font-semibold tracking-wide text-brand-navy">
              Explore
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 sm:block sm:space-y-1">
              <li>
                <Link href="/industries" className={footerLinkClass}>
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/company/alliances" className={footerLinkClass}>
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/start" className={footerLinkClass}>
                  Get started
                </Link>
              </li>
              <li>
                <Link href="/contact" className={footerLinkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-2 pt-2 text-[11px] leading-4 text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-4">
            © {new Date().getFullYear()} Coreridge Technologies. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-[11px] leading-4 transition-colors hover:text-brand-navy focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms"
              className="text-[11px] leading-4 transition-colors hover:text-brand-navy focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
