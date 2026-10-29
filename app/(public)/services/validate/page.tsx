"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  ClipboardCheck,
  Dna,
  Factory,
  GraduationCap,
  HeartPulse,
  Pill,
  SearchCheck,
  ShieldCheck,
} from 'lucide-react';

export default function ValidatePage() {
  const validationServices = [
    {
      title: "Computer System Validation (CSV)",
      description: "Ensure your software systems meet strict regulatory compliance standards for FDA, GxP, 21 CFR Part 11, and EU Annex 11.",
      icon: BadgeCheck,
      features: ["FDA Compliance", "GxP Alignment", "21 CFR Part 11", "EU Annex 11", "Regulatory Documentation"],
    },
    {
      title: "System Lifecycle Management",
      description: "Complete validation documentation from initial planning through ongoing compliance maintenance.",
      icon: ClipboardCheck,
      features: ["Validation Master Plans (VMP)", "User Requirement Specifications (URS)", "Installation Qualification (IQ)", "Operational Qualification (OQ)", "Performance Qualification (PQ)"],
    },
    {
      title: "Regulatory Audit Support",
      description: "Comprehensive audit preparation and support to ensure your systems pass regulatory inspections.",
      icon: SearchCheck,
      features: ["Gap Analysis", "Remediation Planning", "Audit Readiness", "Compliance Maintenance", "Regulator Liaison"],
    },
    {
      title: "Educational System Audits",
      description: "Data integrity and security audits for institutional management systems in education sector.",
      icon: GraduationCap,
      features: ["Student Data Protection", "Privacy Compliance", "System Security Assessments", "Data Integrity Checks", "Institutional Reporting"],
    }
  ];

  const targetIndustries = [
    { name: "Pharmaceutical", icon: Pill, description: "Validation support for drug development and manufacturing systems" },
    { name: "Healthcare", icon: HeartPulse, description: "System validation and healthcare compliance support" },
    { name: "Life Sciences", icon: Dna, description: "Biotech and research system validation" },
    { name: "Education", icon: BookOpen, description: "Institutional system and data integrity support" },
    { name: "Manufacturing", icon: Factory, description: "Industrial system validation and quality management" }
  ];

  const complianceStandards = [
    "FDA 21 CFR Part 11",
    "EU Annex 11",
    "GxP Guidelines",
    "HIPAA Compliance",
    "GDP Requirements",
    "ALCOA+ Data Integrity"
  ];

  return (
    <div className="min-h-screen bg-white">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 pb-12 pt-24 md:pb-14 md:pt-28"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/5 to-blue-400/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <span className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold tracking-wide text-brand-navy">
              <ShieldCheck aria-hidden="true" className="mr-2 h-4 w-4" /> VALIDATE · CSV & COMPLIANCE
            </span>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-brand-navy md:text-5xl lg:text-6xl">
              Computer System Validation
            </h1>
            <p className="mx-auto mb-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Practical validation and compliance support for regulated systems—from planning and documentation to audit readiness and lifecycle maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="rounded-xl bg-brand-navy px-6 py-3 font-semibold text-white transition hover:bg-brand-navy-dark"
              >
                Schedule Compliance Consultation
              </Link>
              <Link 
                href="#services"
                className="rounded-xl border border-brand-navy/20 bg-white/80 px-6 py-3 font-semibold text-brand-navy transition hover:bg-white"
              >
                Explore Validation Services
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Compliance Standards Banner */}
      <section className="border-y border-slate-100 bg-slate-50 px-6 py-7">
        <div className="max-w-7xl mx-auto">
          <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-wide text-slate-500">Standards & frameworks</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                {standard}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="px-6 py-12 md:py-14">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-9 text-center"
          >
            <h2 className="mb-3 text-3xl font-bold text-brand-navy md:text-4xl">Industries we support</h2>
            <p className="mx-auto max-w-3xl text-slate-600 md:text-lg">
              Specialized validation services for regulated industries requiring strict compliance and audit trails.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {targetIndustries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
              >
                <industry.icon aria-hidden="true" className="mx-auto mb-3 h-6 w-6 text-brand-navy" />
                <h3 className="mb-2 text-base font-bold text-slate-900">{industry.name}</h3>
                <p className="text-sm leading-5 text-slate-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-slate-50 px-6 py-12 md:py-14">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-9 text-center"
          >
            <h2 className="mb-3 text-3xl font-bold text-brand-navy md:text-4xl">Validation services across the system lifecycle</h2>
            <p className="mx-auto max-w-3xl text-slate-600 md:text-lg">
              From initial system deployment through ongoing compliance maintenance, we support your entire validation lifecycle.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {validationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
              >
                <service.icon aria-hidden="true" className="mb-4 h-6 w-6 text-brand-navy" />
                <h3 className="mb-3 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mb-5 text-sm leading-6 text-slate-600">{service.description}</p>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Process Timeline */}
      <section className="px-6 py-12 md:py-14">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-9 text-center"
          >
            <h2 className="mb-3 text-3xl font-bold text-brand-navy md:text-4xl">A clear validation process</h2>
            <p className="text-slate-600">Structured steps to support system validation and ongoing compliance.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-navy to-brand-navy-light hidden md:block" />
            {[
              { step: "01", title: "Assessment & Planning", description: "Gap analysis and Validation Master Plan development" },
              { step: "02", title: "Documentation", description: "URS, functional specifications, and test plan creation" },
              { step: "03", title: "Execution", description: "IQ/OQ/PQ testing and protocol execution" },
              { step: "04", title: "Reporting", description: "Validation summary report and compliance documentation" },
              { step: "05", title: "Maintenance", description: "Ongoing monitoring, periodic reviews, and change control" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-gray-50 backdrop-blur-sm p-6 rounded-xl border border-gray-200">
                    <span className="text-3xl font-bold bg-gradient-to-r from-brand-navy to-brand-navy-light bg-clip-text text-transparent">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-navy rounded-full hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-navy px-6 py-12 md:py-14">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Need support with validation?
          </h2>
          <p className="mb-7 text-lg text-blue-100">
            Talk with our team about your systems, compliance needs, and validation priorities.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-brand-navy transition hover:bg-blue-50"
          >
            Discuss your project <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}