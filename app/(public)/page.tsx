import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ClipboardCheck,
  Factory,
  FlaskConical,
  Layers3,
  Plane,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import Hero from "../../components/Hero";

export const metadata: Metadata = {
  title: "IT Infrastructure, Cybersecurity, AI & CSV Services",
  description:
    "Build, transform, secure, and validate your business technology with Coreridge. Explore IT infrastructure, software and AI solutions, cybersecurity, and computer system validation (CSV).",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Build. Transform. Secure. Validate. | Coreridge Technologies",
    description:
      "Your technology partner for IT infrastructure, AI and software development, cybersecurity, and computer system validation.",
    url: "/",
  },
  twitter: {
    title: "Build. Transform. Secure. Validate. | Coreridge Technologies",
    description:
      "IT infrastructure, AI and software development, cybersecurity, and computer system validation—all with one technology partner.",
  },
};

const clientLogos = [
  { name: "Tlog", src: "/clients/tlog.png" },
  { name: "Natoli", src: "/clients/natoli.png" },
  { name: "Ami Polymers", src: "/logos/ami-logo.jpg" },
  { name: "Pacific", src: "/clients/pacific.png" },
  { name: "Skandanana", src: "/clients/skandana.png" },
  { name: "Sree Solutions", src: "/clients/sree-solutions.png" },
  { name: "Shapes Style Lounge", src: "/clients/shapes.png" },
  { name: "Cadmach", src: "/clients/cadmach-logo.png" },
  { name: "Leroy Merlin South Africa", src: "/logos/Leroy Merlin South Africa.svg" },
  { name: "DLF Hospitality", src: "/logos/DLF Hospitality.png" },
  { name: "Bundle Technologies", src: "/logos/Bundle Technologies.jpg" },
  { name: "Client", src: "/clients/logo-1.png" },
  { name: "Sri Chaitanya", src: "/logos/Sri Chaitanya.jpg" },
  { name: "DistoPharma", src: "/logos/distoPharma.jpg" },
  { name: "Prozonic", src: "/logos/prozonic.svg" },
];

const capabilities = [
  {
    eyebrow: "01 / BUILD",
    title: "IT Infrastructure & Managed Hardware",
    description:
      "Resilience through next-generation IT hardware and infrastructure. From network architecture to hybrid cloud planning, we deliver robust infrastructure designed to scale with your enterprise.",
    href: "/services/build",
    linkLabel: "Explore BUILD services",
    icon: Layers3,
    tone: "bg-blue-50 text-brand-navy",
    features: [
      "Network & security hardware",
      "Compute & storage solutions",
      "End-user computing",
      "Infrastructure deployment",
    ],
  },
  {
    eyebrow: "02 / TRANSFORM",
    title: "Digitalization, Software Development & AI Solutions",
    description:
      "Digitalization, web applications, ERP/CRM, and AI solutions. Elevate operational efficiency through software innovation and modern web technologies tailored to your business needs.",
    href: "/services/transform",
    linkLabel: "Explore TRANSFORM services",
    icon: ArrowUpRight,
    tone: "bg-violet-50 text-violet-700",
    features: [
      "Custom web & mobile apps",
      "Enterprise ERP/CRM systems",
      "AI/ML integration",
      "Legacy system modernization",
    ],
  },
  {
    eyebrow: "03 / SECURE",
    title: "Enterprise Cybersecurity & Threat Protection",
    description:
      "Zero-trust cybersecurity and continuous threat defense. Protect your organizational assets, users, and networks with comprehensive security solutions.",
    href: "/services/secure",
    linkLabel: "Explore SECURE services",
    icon: ShieldCheck,
    tone: "bg-emerald-50 text-emerald-700",
    features: [
      "Perimeter & network security",
      "Endpoint security (EDR/XDR)",
      "Data protection & DLP",
      "Security audits & compliance",
    ],
  },
  {
    eyebrow: "04 / VALIDATE",
    title: "Computer System Validation (CSV) & Compliance",
    description:
      "Computer System Validation tailored for pharma, life sciences, and education. Help ensure systems meet FDA, GxP, 21 CFR Part 11, and EU Annex 11 requirements.",
    href: "/services/validate",
    linkLabel: "Explore VALIDATE services",
    icon: ClipboardCheck,
    tone: "bg-amber-50 text-amber-700",
    features: [
      "GxP / software validation",
      "IQ/OQ/PQ qualifications",
      "Regulatory audit support",
      "Data integrity audits",
    ],
  },
];

const industries = [
  {
    name: "Pharma & life sciences",
    detail: "Technology and validation for regulated environments.",
    href: "/industries/pharma",
    icon: FlaskConical,
  },
  {
    name: "Manufacturing",
    detail: "Connected operations and dependable systems.",
    href: "/industries/manufacturing",
    icon: Factory,
  },
  {
    name: "Aviation & aerospace",
    detail: "Technology support for complex, critical operations.",
    href: "/industries/aviation",
    icon: Plane,
  },
  {
    name: "Enterprise",
    detail: "Solutions built for scale, security, and change.",
    href: "/industries/enterprise",
    icon: Building2,
  },
];

const principles = [
  {
    title: "Start with your reality",
    description:
      "We listen first, understand your environment, and shape a solution around your goals—not a template.",
  },
  {
    title: "Make the complex clear",
    description:
      "You get transparent communication, practical recommendations, and a delivery path you can follow.",
  },
  {
    title: "Stay accountable",
    description:
      "We work alongside your team from planning through delivery, with care for the systems you rely on.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <Hero />

      <section
        aria-labelledby="client-organizations-title"
        className="border-b border-slate-100 bg-white px-5 py-7 sm:px-8 sm:py-9 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-4 text-left sm:flex-row sm:items-end">
            <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                Our clients
              </p>
              <h2
                id="client-organizations-title"
              className="mt-2 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-3xl"
              >
                Organizations we’re proud to work with
              </h2>
            </div>
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-dark"
            >
              Meet all our clients
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div
            aria-label="Client logos. Scroll horizontally to see all clients."
            className="mt-6 overflow-x-auto overscroll-x-contain pb-3 [scrollbar-color:#cbd5e1_transparent] [scrollbar-width:thin]"
            tabIndex={0}
          >
            <div className="flex w-max snap-x snap-mandatory gap-3 pr-1 sm:gap-4">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-24 w-32 snap-start flex-col items-center justify-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-3 transition duration-300 hover:border-blue-200 hover:shadow-md sm:h-28 sm:w-36"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={200}
                  height={88}
                  className="h-10 w-full object-contain sm:h-12"
                />
                <span className="line-clamp-1 w-full text-center text-[11px] font-medium text-slate-600 sm:text-xs">
                  {logo.name}
                </span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                What we do
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl">
                Technology that moves your business forward.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
              The right partner should make technology easier to navigate. We
              bring engineering, security, validation, and transformation
              together to help you take the next step with confidence.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {capabilities.map(({ eyebrow, title, description, href, linkLabel, icon: Icon, tone, features }) => (
              <Link
                key={eyebrow}
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 transition duration-300 hover:border-blue-200 hover:bg-white hover:shadow-[0_16px_40px_-28px_rgba(15,42,86,0.35)] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.16em] text-slate-500">
                    {eyebrow}
                  </span>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${tone}`}>
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-4 max-w-md text-lg font-semibold leading-snug tracking-tight text-slate-900 sm:text-xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                  {description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600"
                    >
                      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-brand-navy">
                  {linkLabel}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                Who we work with
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl">
                Built around the realities of your industry.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Every industry has different pressures. We bring relevant
                expertise to the systems and processes that matter most.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-dark"
            >
              See all industries
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(({ name, detail, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-4 transition duration-300 hover:border-blue-200 hover:bg-white hover:shadow-md sm:p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand-navy">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {detail}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-navy">
                  Learn more
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
              The Coreridge approach
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl">
              Good partnerships feel clear from day one.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Technology projects are about more than tools. They need a team
              that understands your priorities, respects your constraints, and
              keeps people aligned throughout the work.
            </p>
            <Link
              href="/company/why-coreridge"
              className="mt-5 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-brand-navy hover:text-brand-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
            >
              Why work with Coreridge
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 divide-y divide-slate-200">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="flex gap-4 p-4 transition-colors hover:bg-white sm:gap-5 sm:p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100/70 text-xs font-bold text-brand-navy">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                    {principle.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-10 sm:px-8 sm:pb-12 lg:px-10 lg:pb-14">
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-7 sm:px-8 sm:py-9 lg:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-36 -z-10 h-80 w-80 rounded-full bg-blue-200/35 blur-3xl"
          />
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-orange" />
                Have a project in mind?
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl">
                Let’s make your next move a confident one.
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
                Tell us where you want to go. We’ll help you explore a practical
                way to get there.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-navy px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-brand-navy-dark hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Start a conversation
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-white hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Browse services
              </Link>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2 border-t border-blue-200/70 pt-4 text-xs font-medium text-slate-600 sm:text-sm">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <Check aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
            No pressure—just a thoughtful first conversation.
          </div>
        </div>
      </section>
    </div>
  );
}
