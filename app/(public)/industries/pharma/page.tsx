"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ClipboardCheck, Database, FlaskConical, ShieldCheck } from "lucide-react";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-navy/10 text-brand-navy rounded-full text-sm font-semibold mb-6">
            💊 Pharma & Life Sciences
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
            Technology for Life Sciences
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Comprehensive IT and compliance solutions supporting pharmaceutical research, development, and manufacturing worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-navy-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-navy/30 transition-all duration-300"
            >
              Discuss Your Project
            </Link>
            <Link
              href="#solutions"
              className="px-8 py-4 bg-gray-100 backdrop-blur-sm text-brand-navy font-semibold rounded-xl border border-gray-200 hover:bg-gray-200 transition-all duration-300"
            >
              View Solutions
            </Link>
          </div>
        </motion.div>

      {/* Challenges & Solutions Overview */}
      <section className="py-14 md:py-16 px-6">
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
            <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy via-[#18376a] to-[#315579] p-7 text-white shadow-2xl sm:p-9">
              <div aria-hidden="true" className="absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full border border-white/10 bg-white/5" />
              <div aria-hidden="true" className="absolute -bottom-28 -left-20 -z-10 h-72 w-72 rounded-full border border-white/10 bg-white/5" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-orange-200">
                <FlaskConical aria-hidden="true" className="h-7 w-7" />
              </div>
              <h3 className="mt-8 max-w-sm text-2xl font-semibold leading-tight sm:text-3xl">
                Technology that supports trusted life sciences operations
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-blue-100 sm:text-base">
                Connect dependable infrastructure with validated systems and secure, traceable data practices.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  { label: "System validation", icon: ClipboardCheck },
                  { label: "Data integrity", icon: Database },
                  { label: "Secure operations", icon: ShieldCheck },
                ].map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white">
                    <Icon aria-hidden="true" className="h-4 w-4 text-orange-200" />
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