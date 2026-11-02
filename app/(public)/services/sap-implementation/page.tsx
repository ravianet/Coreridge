"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import CapabilityHeroVisual from '../../../../components/CapabilityHeroVisual';

export default function SAPImplementationPage() {
  const sapServices = [
    {
      title: "SAP S/4HANA Migration",
      description: "Seamlessly migrate your legacy SAP systems to S/4HANA with minimal disruption to your business operations.",
      icon: "💼",
      features: ["Legacy System Assessment", "Migration Planning", "Data Conversion", "Go-live Support"]
    },
    {
      title: "Global Rollouts",
      description: "Execute successful SAP rollouts across multiple geographies and business units.",
      icon: "🌍",
      features: ["Multi-country Deployment", "Localization Compliance", "Change Management", "Training Programs"]
    },
    {
      title: "Managed Cloud Services",
      description: "Comprehensive managed services for your SAP landscape in the cloud environment.",
      icon: "☁️",
      features: ["System monitoring", "Performance Optimization", "Security Management", "Regular Updates"]
    },
    {
      title: "Process Optimization",
      description: "Optimize your SAP business processes to maximize ROI and operational efficiency.",
      icon: "⚙️",
      features: ["Process Mapping", "Gap Analysis", "Best Practices Implementation", "Continuous Improvement"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-8 md:py-10 px-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/5 to-blue-400/5" />
        <div className="mx-auto relative z-10 grid max-w-7xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-left"
          >
            <span className="mb-5 inline-flex rounded-full border border-brand-navy/10 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm">
              💼 SAP Implementation & Rollout
            </span>
            <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
              End-to-End SAP Expertise
            </h1>
            <p className="mb-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We deliver end-to-end SAP expertise across implementation, rollout, and managed services to guide your digital transformation.
            </p>
            <div className="flex flex-col gap-3 min-[480px]:flex-row">
              <Link 
                href="/contact"
                className="cta-button px-5"
              >
                Discuss Your SAP Needs
              </Link>
              <Link 
                href="#solutions"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-navy/10 bg-white/80 px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                View Services
              </Link>
            </div>
          </motion.div>
          <CapabilityHeroVisual domain="SAP" solutions={sapServices.slice(0, 3)} />
        </div>
      </motion.section>

      {/* Core Services Grid */}
      <section id="solutions" className="py-14 md:py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">SAP Implementation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SAP solutions to help your organization modernize and scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {sapServices.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:border-brand-navy/50 transition-all duration-300"
              >
                <span className="text-5xl mb-6 block">{solution.icon}</span>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">{solution.title}</h3>
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
      <section className="px-6 py-8 md:py-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-surface rounded-3xl p-7 text-center sm:p-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Ready to Transform with SAP?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Our SAP experts have decades of experience implementing and managing SAP landscapes for enterprises worldwide.
            </p>
            <Link 
              href="/contact"
              className="cta-button"
            >
              Start Your SAP Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}