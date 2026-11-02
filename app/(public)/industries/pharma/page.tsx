"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  ClipboardCheck,
  Database,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";

export default function PharmaPage() {
  const coreSolutions = [
    {
      title: "Computer System Validation (CSV)",
      description: "Complete validation services for all pharmaceutical systems ensuring FDA, GxP, and 21 CFR Part 11 compliance.",
      icon: "✅",
      features: ["ERP System Validation", "LIMS Implementation", "QMS Management", "Electronic Batch Records"]
    },
    {
      title: "Laboratory IT Infrastructure",
      description: "Reliable infrastructure solutions supporting research, development, and quality control laboratories.",
      icon: "🔬",
      features: ["Instrument Integration", "Data Acquisition Systems", "Cold Chain Monitoring", "Laboratory Security"]
    },
    {
      title: "Regulatory Compliance",
      description: "Expert guidance to maintain compliance with global pharmaceutical regulations and pass audits with confidence.",
      icon: "📋",
      features: ["FDA 21 CFR Part 11", "EU Annex 11", "GxP Alignment", "ALCOA+ Data Integrity"]
    },
    {
      title: "Cybersecurity for Pharma",
      description: "Specialized security solutions protecting intellectual property, clinical data, and manufacturing systems.",
      icon: "🛡️",
      features: ["Clinical Trial Data Protection", "IP Protection", "Manufacturing Security", "Supply Chain Integrity"]
    },
    {
      title: "Quality Management Systems (QMS)",
      description: "QMS is a set of procedures and processes that ensure the quality of pharmaceutical products. Comprehensive quality management solutions for pharmaceutical manufacturing and distribution.",
      icon: "📊",
      features: ["Change Control", "Incident Management", "CAPA Implementation", "Quality Planning"]
    },
    {
      title: "SAP Services for Pharma",
      description: "We deliver end-to-end SAP expertise across implementation, rollout, and managed services. Guide your organization through high-performing digital E2E processes using SAP software & technology.",
      icon: "💼",
      features: ["SAP Implementation", "Global Rollouts", "Managed Cloud Services", "S/4HANA Migration"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 pb-14">
      <div className="container-pro">
        {/* Hero Section */}
        <motion.section
          aria-labelledby="pharma-hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative isolate mb-0 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-[#F8FAFD] to-[#EAF1F8] px-6 py-7 shadow-xl shadow-brand-navy/[0.06] sm:px-10 sm:py-9 lg:px-12"
        >
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-28 -z-10 h-80 w-80 rounded-full bg-brand-orange/[0.07] blur-3xl"
          />
          <div className="max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/80 px-3.5 py-2 text-sm font-semibold text-brand-navy shadow-sm">
              <FlaskConical aria-hidden="true" className="h-4 w-4 text-brand-orange" />
              Pharma &amp; Life Sciences
            </span>
            <h1
              id="pharma-hero-title"
              className="text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl"
            >
              Technology for Life Sciences
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Comprehensive IT and compliance solutions supporting pharmaceutical research, development, and manufacturing worldwide.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 min-[480px]:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-navy px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-navy/15 transition hover:-translate-y-0.5 hover:bg-brand-navy-light hover:shadow-brand-navy/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              Discuss Your Project
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="#solutions"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-brand-navy/10 bg-white/80 px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:-translate-y-0.5 hover:border-brand-navy/20 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              View Solutions
              <ArrowRight aria-hidden="true" className="h-4 w-4 text-brand-orange" />
            </Link>
          </div>
        </motion.section>

      {/* Challenges & Solutions Overview */}
      <section className="px-6 pt-4 pb-10 md:pt-6 md:pb-14">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6">Understanding Pharmaceutical Challenges</h2>
              <p className="text-lg text-gray-700 mb-6">
                Life sciences organizations face unique challenges combining cutting-edge research with strict regulatory requirements. Our solutions are designed specifically to address these complex needs.
              </p>
              <ul className="space-y-4">
                {[
                  "Maintaining data integrity across all systems and locations",
                  "Meeting strict regulatory requirements for clinical trials",
                  "Protecting valuable intellectual property and research data",
                  "Scaling IT infrastructure as organizations grow and acquire new entities",
                  "Digital transformation while maintaining continuous compliance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="w-6 h-6 bg-brand-navy/10 text-brand-navy rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative isolate overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-[#F5F8FC] to-[#E8EFF8] p-7 text-brand-navy shadow-xl shadow-brand-navy/10 sm:p-9">
              <div aria-hidden="true" className="absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full border border-brand-navy/5 bg-brand-navy/[0.03]" />
              <div aria-hidden="true" className="absolute -bottom-28 -left-20 -z-10 h-72 w-72 rounded-full border border-brand-navy/5 bg-white/60" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-orange/15 bg-brand-orange/10 text-brand-orange">
                <FlaskConical aria-hidden="true" className="h-7 w-7" />
              </div>
              <h3 className="mt-8 max-w-sm text-2xl font-bold leading-tight tracking-tight text-brand-navy sm:text-3xl">
                Technology that supports trusted life sciences operations
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                Connect dependable infrastructure with validated systems and secure, traceable data practices.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  { label: "System validation", icon: ClipboardCheck },
                  { label: "Data integrity", icon: Database },
                  { label: "Secure operations", icon: ShieldCheck },
                ].map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-3 rounded-xl border border-brand-navy/10 bg-white/75 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm shadow-brand-navy/[0.03]">
                    <Icon aria-hidden="true" className="h-4 w-4 text-brand-orange" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section id="solutions" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Pharma-Specific Solutions</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tailored technology and compliance services that understand the unique requirements of life sciences organizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-brand-navy/50 transition-all duration-300 shadow-sm"
              >
                <span className="text-5xl mb-6 block">{solution.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-700 mb-6">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-brand-navy/10 text-brand-navy rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Figma Style */}
      <section className="bg-gradient-to-br from-blue-50 to-white px-6 py-14 md:py-16 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Ready to Transform Your Pharma Operations?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Talk with our team about the technology and compliance needs of your life sciences organization.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-brand-orange text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:bg-[#ad550f]"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </div>
  );
}