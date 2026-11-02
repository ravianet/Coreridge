"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import CapabilityHeroVisual from '../../../../components/CapabilityHeroVisual';

export default function ChangeControlPage() {
  const changeControlServices = [
    {
      title: "Change Management Framework",
      description: "Establish a comprehensive change control framework that meets regulatory requirements for your industry.",
      icon: "📋",
      features: ["Policy Development", "SOP Creation", "Workflow Design", "Training Programs"]
    },
    {
      title: "Change Request Process",
      description: "Implement structured processes for managing all change requests from initiation through closure.",
      icon: "📝",
      features: ["Request Intake", "Impact Assessment", "Approval Routing", "Implementation Tracking"]
    },
    {
      title: "CAPA Program Development",
      description: "Build robust Corrective and Preventive Action programs to identify and resolve quality issues.",
      icon: "🔧",
      features: ["Root Cause Analysis", "CAPA Development", "Implementation Planning", "Effectiveness Checks"]
    },
    {
      title: "Documentation Management",
      description: "Maintain comprehensive documentation of all changes and corrective actions taken.",
      icon: "📚",
      features: ["Document Control", "Audit Trails", "Version Management", "Archive Procedures"]
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure your change control and CAPA processes meet all relevant regulatory requirements.",
      icon: "✅",
      features: ["GxP Compliance", "FDA Requirements", "EMA Guidelines", "Audit Preparation"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Standardized site styling */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container-pro mx-auto grid items-center gap-8 py-8 md:py-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"
      >
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-6">
            📋 Change Control & CAPA
          </span>
          <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
            Change Control & CAPA Excellence
          </h1>
          <p className="mb-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Robust processes for managing changes and implementing corrective actions that maintain regulatory compliance.
          </p>
            <div className="flex flex-col gap-3 min-[480px]:flex-row">
              <Link 
                href="/contact"
                className="cta-button px-5"
              >
                Discuss Your Compliance Needs
              </Link>
              <Link 
                href="#solutions"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-navy/10 bg-white/80 px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                View Services
              </Link>
            </div>
          </div>
        <CapabilityHeroVisual domain="Change Control" solutions={changeControlServices.slice(0, 3)} />
      </motion.section>

      {/* Core Services Grid - Glass-effect cards */}
      <section id="solutions" className="py-14 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Change Control & CAPA Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for managing changes and quality issues in regulated environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {changeControlServices.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 bg-white/85 backdrop-blur-xl rounded-3xl border border-gray-200/60 shadow-2xl shadow-brand-navy/10 hover:shadow-brand-navy/15 hover:border-brand-navy/50 transition-all duration-300"
              >
                <span className="text-5xl mb-6 block">{solution.icon}</span>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm">
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
      <section className="py-8 md:py-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-surface rounded-3xl p-7 text-center sm:p-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Ready to Strengthen Your Compliance?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Our regulatory compliance experts help organizations implement robust change control and CAPA processes that pass even the strictest audits.
            </p>
            <Link 
              href="/contact"
              className="cta-button"
            >
              Start Your Compliance Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}