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
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/company/careers" },
];

const linkClassName =
  "inline-flex min-h-7 items-center text-sm text-gray-600 transition-colors hover:text-brand-navy focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden">
      {/* Top Footer - Light glass-effect with reduced height */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 shadow-[0_-10px_40px_rgba(30,64,175,0.08)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_5%,rgba(59,130,246,0.08),transparent_45%),radial-gradient(ellipse_at_80%_95%,rgba(147,197,253,0.06),transparent_40%),radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.8),transparent_60%)]"
        />
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.6fr_0.7fr_0.7fr] lg:gap-12 lg:px-12">
          <div className="max-w-2xl">
            <Link
              href="/"
              aria-label="Coreridge Technologies home"
              className="inline-flex rounded-xl border border-gray-200/70 bg-white/90 px-4 py-2 shadow-[0_8px_30px_rgba(30,64,175,0.12)] backdrop-blur-xl transition-all duration-300 hover:bg-white hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(30,64,175,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              <img
                src="/logos/cr1.png"
                alt="Coreridge Technologies"
                className="h-9 w-auto max-w-[170px] object-contain"
              />
            </Link>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
              Build, transform, secure, and validate the technology your business
              depends on. We deliver enterprise-grade solutions that drive innovation and growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@coreridge.com</span>
              </div>
            </div>
          </div>

          <nav aria-label="Quick links" className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy border-b border-gray-200/70 pb-2 inline-block">Quick Links</h2>
            <ul className="mt-3 space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClassName}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links" className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy border-b border-gray-200/70 pb-2 inline-block">Company</h2>
            <ul className="mt-3 space-y-2">
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
      </div>

      {/* Bottom Footer - Light glass-effect with reduced height */}
      <div className="bg-white/80 backdrop-blur-xl border-t border-gray-200/60">
        <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 font-medium">
              © {new Date().getFullYear()} Coreridge Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-brand-navy transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms" className="text-xs text-gray-500 hover:text-brand-navy transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}