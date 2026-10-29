import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const companyLinks = [
  { label: "About Us", href: "/company/about-us" },
  { label: "Partners", href: "/company/alliances" },
  { label: "Clients", href: "/company/clients" },
  { label: "Careers", href: "/company/careers" },
];

const linkClassName =
  "inline-flex min-h-6 items-center text-sm text-blue-100/80 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-7 px-5 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16 lg:px-10 lg:py-7">
        <div className="max-w-md">
          <Link
            href="/"
            aria-label="Coreridge Technologies home"
            className="inline-flex rounded-md bg-white px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <img
              src="/logos/cr1.png"
              alt="Coreridge Technologies"
              className="h-8 w-auto object-contain"
            />
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-blue-100/80">
            Build, transform, secure, and validate the technology your business
            depends on.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
            Quick links
          </h2>
          <ul className="mt-2 space-y-0.5">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={linkClassName}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company links">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
            Company
          </h2>
          <ul className="mt-2 space-y-0.5">
            {companyLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={linkClassName}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10 bg-[#0d2345]">
        <div className="mx-auto max-w-7xl px-5 py-2 sm:px-8 lg:px-10">
          <p className="text-xs text-blue-100/70">
            © 2026 Coreridge Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
