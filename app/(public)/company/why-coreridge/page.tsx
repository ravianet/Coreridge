"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CircleCheck,
  CodeXml,
  Factory,
  HeartHandshake,
  Handshake,
  Lightbulb,
  LockKeyhole,
  type LucideIcon,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  UsersRound,
  MapPin,
  Cloud,
  Cpu,
  Rocket,
  ExternalLink,
} from 'lucide-react';

type IconTileProps = {
  icon: LucideIcon;
  artwork: "industry" | "partnership" | "achievement" | "security" | "integrity" | "excellence" | "innovation" | "reliability" | "experience" | "projects" | "clients" | "retention";
  accent?: "blue" | "cyan" | "gold" | "green";
  size?: "sm" | "md" | "lg";
  secondaryIcon?: LucideIcon;
};

function IconTile({
  icon: Icon,
  artwork,
  accent = "blue",
  size = "md",
  secondaryIcon: SecondaryIcon,
}: IconTileProps) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-16 w-16",
  };
  const iconSizes = { sm: "h-[1.125rem] w-[1.125rem]", md: "h-[1.375rem] w-[1.375rem]", lg: "h-6 w-6" };
  const colors = {
    blue: { stroke: "#302060", node: "#f59a2a", soft: "#fff4e5" },
    cyan: { stroke: "#29205f", node: "#f59a2a", soft: "#fff4e5" },
    gold: { stroke: "#302060", node: "#f59a2a", soft: "#fff4e5" },
    green: { stroke: "#29205f", node: "#f59a2a", soft: "#fff4e5" },
  };
  const color = colors[accent];

  return (
    <span
      aria-hidden="true"
      className={`group/icon relative inline-flex shrink-0 items-center justify-center transition duration-300 group-hover:scale-105 ${sizes[size]}`}
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-visible drop-shadow-sm transition duration-300 group-hover:drop-shadow-md"
        fill="none"
        viewBox="0 0 96 96"
      >
        {artwork === "industry" && (
          <>
            <path d="M48 8v14M48 74v14M8 48h14m52 0h14M19.7 19.7l10 10m36.6 36.6 10 10m0-56.6-10 10m-36.6 36.6-10 10" stroke={color.stroke} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="48" cy="48" r="27" fill={color.soft} stroke={color.stroke} strokeWidth="2.5" />
            <circle cx="48" cy="48" r="17" stroke={color.node} strokeWidth="3" />
            <circle cx="48" cy="48" r="6" fill={color.node} />
            <circle cx="48" cy="8" r="4" fill={color.node} /><circle cx="88" cy="48" r="4" fill={color.node} /><circle cx="48" cy="88" r="4" fill={color.node} /><circle cx="8" cy="48" r="4" fill={color.node} />
          </>
        )}
        {artwork === "partnership" && (
          <>
            <path d="M17 47c5-11 13-17 23-17h9m30 19c-5 11-13 17-23 17h-9" stroke={color.stroke} strokeWidth="4" strokeLinecap="round" />
            <path d="m38 48 8-7c3-3 7-3 10 0l4 4m-22 8 8 7c3 3 7 3 10 0l4-4m-24-5 5-5m26 10-5 5" stroke={color.node} strokeWidth="4" strokeLinecap="round" />
            <circle cx="18" cy="47" r="6" fill={color.soft} stroke={color.node} strokeWidth="3" /><circle cx="78" cy="49" r="6" fill={color.soft} stroke={color.node} strokeWidth="3" />
            <path d="M15 69h10m46-42h10" stroke={color.stroke} strokeWidth="2" strokeLinecap="round" />
          </>
        )}
        {artwork === "achievement" && (
          <>
            <path d="M32 20h32v15c0 12-7 21-16 21s-16-9-16-21V20Z" fill={color.soft} stroke={color.stroke} strokeWidth="3" />
            <path d="M32 27H21v6c0 10 7 16 17 16m26-22h11v6c0 10-7 16-17 16M48 56v13m-12 8h24m-20-8h16l4 8H40l4-8Z" stroke={color.stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m48 27 2.8 5.8 6.4.9-4.6 4.5 1.1 6.3-5.7-3-5.7 3 1.1-6.3-4.6-4.5 6.4-.9L48 27Z" fill={color.node} />
            <path d="M16 17v8m-4-4h8m60 38v8m-4-4h8" stroke={color.node} strokeWidth="2.5" strokeLinecap="round" />
          </>
        )}
        {artwork === "security" && (
          <>
            <path d="M48 9 77 20v22c0 19-12 33-29 43C31 75 19 61 19 42V20L48 9Z" fill={color.soft} stroke={color.stroke} strokeWidth="3" strokeLinejoin="round" />
            <path d="m34 47 9 9 19-20" stroke={color.node} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="76" cy="24" r="9" fill={color.node} stroke="white" strokeWidth="3" />
          </>
        )}
        {artwork === "integrity" && (
          <>
            <path d="m48 9 8 7 11-1 4 10 10 5-2 11 6 9-7 8-1 11-11 3-7 9-10-5-10 5-7-9-11-3-1-11-7-8 6-9-2-11 10-5 4-10 11 1 8-7Z" fill={color.soft} stroke={color.stroke} strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="48" cy="45" r="19" fill="white" stroke={color.node} strokeWidth="3" />
            <path d="m39 45 6 6 12-13" stroke={color.stroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m34 71-3 15 12-6 5 9 3-14m11-1 3 12 8-8 8 5-2-16" fill={color.node} stroke={color.stroke} strokeWidth="2" strokeLinejoin="round" />
          </>
        )}
        {artwork === "excellence" && (
          <>
            <path d="m48 9 6 23 20-13-13 20 24 6-24 6 13 20-20-13-6 24-6-24-20 13 13-20-24-6 24-6-13-20 20 13 6-23Z" fill={color.soft} stroke={color.stroke} strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="48" cy="48" r="13" fill="white" stroke={color.node} strokeWidth="3" />
            <path d="m48 38 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1 3-7Z" fill={color.node} />
            <circle cx="14" cy="20" r="4" fill={color.node} /><circle cx="82" cy="76" r="4" fill={color.node} />
          </>
        )}
        {artwork === "innovation" && (
          <>
            <path d="M32 41a16 16 0 1 1 32 0c0 7-4 11-8 16-2 2-2 5-2 8H42c0-3 0-6-2-8-4-5-8-9-8-16Z" fill={color.soft} stroke={color.stroke} strokeWidth="3" />
            <path d="M42 72h12m-10 7h8M48 7v9m-28 4 7 7m42-7-7 7M9 47h10m58 0h10m-6 26-8-6m-50 6 8-6" stroke={color.stroke} strokeWidth="3" strokeLinecap="round" />
            <path d="M43 47c2 2 4 3 5 7 1-4 3-5 5-7" stroke={color.node} strokeWidth="3" strokeLinecap="round" />
            <circle cx="77" cy="21" r="5" fill={color.node} /><circle cx="18" cy="70" r="4" fill={color.node} />
          </>
        )}
        {artwork === "reliability" && (
          <>
            <circle cx="48" cy="48" r="34" fill={color.soft} stroke={color.stroke} strokeWidth="3" />
            <circle cx="48" cy="48" r="25" stroke={color.node} strokeWidth="2" strokeDasharray="3 4" />
            <path d="m31 49 11 11 24-26" stroke={color.stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M76 24v13m-6-6h12M20 72v9m-4-4h8" stroke={color.node} strokeWidth="3" strokeLinecap="round" />
          </>
        )}
        {artwork === "experience" && (
          <>
            <rect x="19" y="19" width="58" height="59" rx="9" fill={color.soft} stroke={color.stroke} strokeWidth="3" />
            <path d="M32 12v15m32-15v15M20 36h56" stroke={color.stroke} strokeWidth="3" strokeLinecap="round" />
            <path d="M32 49h3m11 0h3m11 0h3M32 62h3m11 0h3m11 0h3" stroke={color.node} strokeWidth="5" strokeLinecap="round" />
            <circle cx="70" cy="69" r="11" fill={color.node} stroke="white" strokeWidth="3" />
            <path d="m65 69 4 4 7-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
        {artwork === "projects" && (
          <>
            <rect x="13" y="29" width="70" height="48" rx="8" fill={color.soft} stroke={color.stroke} strokeWidth="3" />
            <path d="M35 29v-8a5 5 0 0 1 5-5h16a5 5 0 0 1 5 5v8M14 45h68M42 45v7h12v-7" stroke={color.stroke} strokeWidth="3" strokeLinejoin="round" />
            <circle cx="70" cy="67" r="13" fill={color.node} stroke="white" strokeWidth="3" />
            <path d="m64 67 4 4 8-9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
        {artwork === "clients" && (
          <>
            <circle cx="48" cy="30" r="12" fill={color.soft} stroke={color.stroke} strokeWidth="3" />
            <circle cx="23" cy="38" r="9" fill={color.soft} stroke={color.stroke} strokeWidth="2.5" />
            <circle cx="73" cy="38" r="9" fill={color.soft} stroke={color.stroke} strokeWidth="2.5" />
            <path d="M25 78c1-15 9-23 23-23s22 8 23 23H25Zm-18-3c1-11 6-17 16-18m50 0c10 1 15 7 16 18" fill={color.soft} stroke={color.stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="48" cy="70" r="5" fill={color.node} />
          </>
        )}
        {artwork === "retention" && (
          <>
            <path d="M48 77 20 51C2 32 29 13 47 34c18-21 47-2 29 17L48 77Z" fill={color.soft} stroke={color.stroke} strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M30 49h11l6-12 8 23 6-11h8" stroke={color.node} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="76" cy="22" r="8" fill={color.node} stroke="white" strokeWidth="3" />
            <path d="m73 22 2 2 4-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
      <Icon
        className={`relative z-10 ${iconSizes[size]}`}
        color={color.stroke}
        strokeWidth={1.9}
      />
      {SecondaryIcon && (
        <span
          className="absolute -bottom-0.5 -right-0.5 z-20 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white shadow-sm"
          style={{ backgroundColor: color.node, color: "white" }}
        >
          <SecondaryIcon aria-hidden="true" className="h-2.5 w-2.5" strokeWidth={2.3} />
        </span>
      )}
    </span>
  );
}

export default function WhyCoreRidgePage() {
  const coreDifferentiators = [
    {
      title: "Industry-Specific Expertise",
      description: "Deep domain knowledge across pharmaceuticals, life sciences, manufacturing, and enterprise sectors. We understand the unique regulatory and operational challenges your industry faces.",
      icon: Target,
      artwork: "industry" as const,
      secondaryIcon: Factory,
      accent: "cyan" as const,
      features: ["Pharma & GxP Compliance", "Manufacturing 4.0", "Enterprise BFSI", "Education Technology"]
    },
    {
      title: "End-to-End Partnership",
      description: "From initial consultation to ongoing support, we work with your team at every stage to make delivery clear and sustainable.",
      icon: Handshake,
      artwork: "partnership" as const,
      secondaryIcon: HeartHandshake,
      accent: "blue" as const,
      features: ["Strategic Consulting", "Implementation Services", "Ongoing Support", "Continuous Improvement"]
    },
    {
      title: "Broad Delivery Experience",
      description: "Our leadership experience spans infrastructure, software, cybersecurity, and validation across multiple industries.",
      icon: Trophy,
      artwork: "achievement" as const,
      secondaryIcon: BriefcaseBusiness,
      accent: "gold" as const,
      features: ["Enterprise infrastructure", "Software & AI", "Cybersecurity", "System validation"]
    },
    {
      title: "Security First Approach",
      description: "We consider security throughout solution design and delivery, helping protect the data and systems your business relies on.",
      icon: ShieldCheck,
      artwork: "security" as const,
      secondaryIcon: LockKeyhole,
      accent: "green" as const,
      features: ["Security architecture", "Risk assessments", "Compliance support", "Data protection"]
    }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our client relationships. Your success is our success.",
      icon: BadgeCheck,
      artwork: "integrity" as const,
      secondaryIcon: CircleCheck,
      accent: "blue" as const,
    },
    {
      title: "Excellence",
      description: "We focus on thoughtful delivery, clear communication, and solutions shaped around each client's needs.",
      icon: Sparkles,
      artwork: "excellence" as const,
      secondaryIcon: Trophy,
      accent: "gold" as const,
    },
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to bring you cutting-edge solutions that drive competitive advantage.",
      icon: Lightbulb,
      artwork: "innovation" as const,
      secondaryIcon: CodeXml,
      accent: "cyan" as const,
    },
    {
      title: "Reliability",
      description: "We work to deliver dependable outcomes and communicate clearly about progress, risks, and changes.",
      icon: CircleCheck,
      artwork: "reliability" as const,
      secondaryIcon: ShieldCheck,
      accent: "green" as const,
    }
  ];

  const stats = [
    { number: "40+", label: "Combined leadership experience", icon: CalendarDays, artwork: "experience" as const, accent: "blue" as const, secondaryIcon: Sparkles },
    { number: "50,000+", label: "Users supported across leadership experience", icon: UsersRound, artwork: "clients" as const, accent: "cyan" as const, secondaryIcon: HeartHandshake },
    { number: "600+", label: "Locations supported across leadership experience", icon: Building2, artwork: "industry" as const, accent: "gold" as const, secondaryIcon: MapPin },
    { number: "2023", label: "Coreridge founded", icon: CalendarDays, artwork: "projects" as const, accent: "green" as const, secondaryIcon: Rocket }
  ];

  const testimonials = [
    {
      quote:
        "I've had the pleasure of working with Coreridge Technologies for the past several years, and their support has been indispensable. They have been our trusted partners, assisting with everything from infrastructure upgrades and security implementations to cloud migrations.",
      name: "Ramesh Behara",
      role: "GM",
      company: "Disto Pharmaceuticals",
      mark: "DB",
    },
    {
      quote:
        "I am thrilled to share my experience with Coreridge Technologies, a true leader in IT infrastructure, digital transformation, and cybersecurity services. As a growing business, we faced challenges in managing our IT infrastructure and data security. Their proactive approach has made a remarkable difference in our operations. I highly recommend Coreridge to anyone seeking professional, reliable, and results-driven solutions. They have been an invaluable service provider, and I look forward to continuing this good relationship in the future.",
      name: "V K Rao",
      role: "Director",
      company: "Prozonic Extrusions Private Limited",
      mark: "VR",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <section className="relative isolate overflow-hidden bg-[#E8EDF2] px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-10 lg:pb-16 lg:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_88%_12%,rgba(213,133,91,0.18),transparent_35%),radial-gradient(ellipse_at_10%_90%,rgba(28,55,109,0.10),transparent_40%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/75 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
              <IconTile icon={Sparkles} artwork="innovation" secondaryIcon={CircleCheck} accent="blue" size="sm" />
              Your partner for technology that works
            </span>
            <h1 className="mb-5 text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-brand-navy sm:text-5xl lg:text-6xl">
              A technology partner
              <span className="mt-1 block text-[#A95122]">built around you.</span>
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              We bring industry expertise and practical technology delivery
              together—helping your team make complex change clear, secure, and
              manageable.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#C56735] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#A95122]/15 transition hover:-translate-y-0.5 hover:bg-[#B4582A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A95122]"
              >
                Talk to our team
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-brand-navy/15 bg-white/80 px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Explore our services
              </Link>
            </div>
          </motion.div>
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="rounded-3xl border border-white/90 bg-white/85 p-5 shadow-[0_24px_70px_-34px_rgba(6,20,61,0.28)] backdrop-blur-md sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A95122]">
                Why Coreridge
              </p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.03em] text-brand-navy sm:text-3xl">
                Clear advice. Thoughtful delivery.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                From first conversation to ongoing support, we work alongside
                your team to make technology work for your business.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["01", "Industry expertise"],
                  ["02", "End-to-end support"],
                  ["03", "Security-minded"],
                  ["04", "Built around you"],
                ].map(([number, label]) => (
                  <div key={number} className="rounded-xl border border-slate-200/80 bg-[#F7F8FA] p-3">
                    <span className="text-xs font-bold tracking-wider text-[#A95122]">{number}</span>
                    <p className="mt-1 text-sm font-semibold text-brand-navy">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-slate-200/80 bg-white px-5 py-8 sm:px-8 md:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#F7F8FA] px-3 py-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-lg hover:shadow-brand-navy/5 sm:py-6">
                <IconTile icon={stat.icon} artwork={stat.artwork} secondaryIcon={stat.secondaryIcon} accent={stat.accent} size="md" />
                <div className="mb-1 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-slate-600 sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Differentiators */}
      <section className="bg-[#F3F5F7] px-5 py-14 sm:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 max-w-3xl text-left md:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A95122]">The Coreridge difference</p>
            <h2 className="mb-3 text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">What sets us apart</h2>
            <p className="mx-auto max-w-2xl text-slate-600 md:text-lg">
              Our unique combination of industry expertise, technical excellence, and client-first approach 
              delivers results that drive your business forward.
            </p>
          </motion.div>
          
          <div className="grid gap-5 md:grid-cols-2">
            {coreDifferentiators.map((differentiator, index) => (
              <motion.div
                key={differentiator.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_-24px_rgba(6,20,61,0.35)] transition duration-300 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-xl hover:shadow-brand-navy/5 sm:p-7"
              >
                <div className="mb-5">
                  <IconTile icon={differentiator.icon} artwork={differentiator.artwork} secondaryIcon={differentiator.secondaryIcon} accent={differentiator.accent} size="lg" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-950 md:text-2xl">{differentiator.title}</h3>
                <p className="mb-5 leading-7 text-slate-600">{differentiator.description}</p>
                <div className="flex flex-wrap gap-2">
                  {differentiator.features.map((feature) => (
                    <span key={feature} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 sm:text-sm">
                      <CircleCheck aria-hidden="true" className="h-3.5 w-3.5 text-emerald-600" />
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Our Values */}
      <section className="bg-white px-5 py-14 sm:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 max-w-3xl text-left md:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A95122]">How we work</p>
            <h2 className="mb-3 text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">Our core values</h2>
            <p className="mx-auto max-w-2xl text-slate-600 md:text-lg">
              These principles guide everything we do and define how we partner with our clients.
            </p>
          </motion.div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#F7F8FA] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-lg hover:shadow-brand-navy/5 sm:p-6"
              >
                <div className="mb-4">
                  <IconTile icon={value.icon} artwork={value.artwork} secondaryIcon={value.secondaryIcon} accent={value.accent} size="md" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-950">{value.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="relative isolate overflow-hidden bg-[#E8EDF2] px-5 py-14 sm:px-8 md:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_8%_0%,rgba(213,133,91,0.12),transparent_35%),radial-gradient(ellipse_at_95%_95%,rgba(28,55,109,0.08),transparent_40%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-left md:mb-10">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#A95122]/15 bg-white/75 px-4 py-2 text-sm font-semibold text-[#A95122] shadow-sm backdrop-blur-sm">
              <Building2 aria-hidden="true" className="h-4 w-4" />
              Client partnerships
            </span>
            <h2 className="mb-3 text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
              Client success stories
              <span className="block text-[#A95122]">built on lasting partnerships</span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 md:text-lg">
              Here's what our clients say about working with Coreridge on their technology and support needs.
            </p>
          </motion.div>

          {/* Client Testimonials */}
          <div className="grid items-stretch gap-5 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={testimonial.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative flex h-full flex-col rounded-2xl border border-white/90 bg-white/85 p-6 shadow-[0_16px_40px_-28px_rgba(6,20,61,0.35)] backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:p-8"
              >
                <Quote aria-hidden="true" className="mb-4 h-8 w-8 text-slate-400" />
                <blockquote className="flex-1 text-base leading-7 text-slate-700 md:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-slate-300 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-lg font-semibold text-slate-800">
                    {testimonial.mark}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {/* Our Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-left md:mb-10"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A95122]">Our story</p>
            <h2 className="mb-3 text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
              Our Journey
              <span className="block text-[#A95122]">years of expertise, now as CoreRidge</span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 md:text-lg">
              Built by industry veterans with decades of IT experience, we founded CoreRidge in 2023 to deliver exceptional digital transformation.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mx-auto mb-16 max-w-4xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute bottom-0 left-3 top-0 w-0.5 bg-slate-200 md:left-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-6 md:space-y-8">
                {/* 2023 - Founded */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative grid grid-cols-[24px_minmax(0,1fr)] items-center gap-4 md:grid-cols-[1fr_24px_1fr] md:gap-6"
                >
                  <div className="col-start-2 row-start-1 min-w-0 md:col-start-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                      <span className="mb-2 inline-block rounded-full bg-[#C56735]/10 px-3 py-1 text-xs font-semibold text-[#A95122]">2023</span>
                      <h3 className="mb-2 text-xl font-bold text-brand-navy">CoreRidge Founded</h3>
                      <p className="text-slate-600">Launched our vision to transform enterprise technology with seasoned leadership driving every decision.</p>
                    </div>
                  </div>
                  <div className="relative z-10 col-start-1 row-start-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-navy md:col-start-2 md:justify-self-center">
                    <Rocket className="h-3 w-3 text-white" />
                  </div>
                </motion.div>

                {/* Leadership Experience Combined */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative grid grid-cols-[24px_minmax(0,1fr)] items-center gap-4 md:grid-cols-[1fr_24px_1fr] md:gap-6"
                >
                  <div className="col-start-2 row-start-1 min-w-0 md:col-start-1">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                      <span className="mb-2 inline-block rounded-full bg-[#C56735]/10 px-3 py-1 text-xs font-semibold text-[#A95122]">Leadership Legacy</span>
                      <h3 className="mb-2 text-xl font-bold text-brand-navy">40+ Years Combined Experience</h3>
                      <p className="text-slate-600">Our CEO brings 19 years of industry expertise, and our CTO contributes 20+ years of technical leadership in IT.</p>
                    </div>
                  </div>
                  <div className="relative z-10 col-start-1 row-start-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#C56735] md:col-start-2 md:justify-self-center">
                    <UsersRound className="h-3 w-3 text-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-left md:mb-10"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A95122]">Leadership</p>
            <h2 className="mb-3 text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
              Meet Our
              <span className="block text-[#A95122]">Leadership Team</span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 md:text-lg">
              Industry veterans dedicated to delivering excellence in every digital transformation project.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 mb-16">
            {/* CEO Profile */}
            <motion.a
              href="https://ravianet.github.io/resume/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-white/90 bg-white/85 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="mb-1 text-xl font-bold text-slate-950">RAVI KUMAR VALLURU</h3>
                  <p className="mb-3 text-sm font-semibold text-[#A95122]">Founder and CEO</p>
                  <p className="mb-4 text-slate-600">19 years of extensive experience in the IT industry, leading enterprise transformations and building successful technology teams.</p>
                </div>
                <ExternalLink className="h-5 w-5 text-slate-400 transition-colors group-hover:text-[#A95122]" />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
                View full profile
              </span>
            </motion.a>

            {/* CTO Profile */}
            <motion.a
              href="https://nagadeepthi-git.github.io/deepthi/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group rounded-2xl border border-white/90 bg-white/85 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="mb-1 text-xl font-bold text-slate-950">NAGA DEEPTHI VALLURU</h3>
                  <p className="mb-3 text-sm font-semibold text-[#A95122]">CTO</p>
                  <p className="mb-4 text-slate-600">20+ years of technical expertise architecting scalable solutions, driving innovation, and leading complex technology initiatives.</p>
                </div>
                <ExternalLink className="h-5 w-5 text-slate-400 transition-colors group-hover:text-[#A95122]" />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
                View full profile
              </span>
            </motion.a>
          </div>

        </div>
      </section>
    </div>
  );
}