"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function QMSPage() {
  const qmsServices = [
    {
      title: "QMS Implementation",
      description: "Implement and configure comprehensive Quality Management Systems that meet your industry's regulatory requirements.",
      icon: "✅",
      features: ["System Selection", "Configuration", "Integration", "User Training"]
    },
    {
      title: "Change Control",
      description: "Establish robust change control processes to manage all modifications to your validated systems.",
      icon: "📋",
      features: ["Change Request Management", "Impact Assessments", "Approval Workflows", "Documentation Tracking"]
    },
    {
      title: "CAPA Implementation",
      description: "Develop and deploy Corrective and Preventive Action processes to address root causes of quality issues.",
      icon: "🔧",
      features: ["Root Cause Analysis", "CAPA Development", "Implementation Tracking", "Effectiveness Verification"]
    },
    {
      title: "Quality Planning",
      description: "Create comprehensive quality plans that align with regulatory requirements and business objectives.",
      icon: "📐",
      features: ["Quality Objectives", "Process Mapping", "Risk Assessment", "Compliance Framework"]
    },
    {
      title: "Incident Management",
      description: "Establish processes to identify, track, and resolve quality incidents before they impact operations.",
      icon: "🚨",
      features: ["Incident Tracking", "Root Cause Investigation", "Corrective Actions", "Prevention Strategies"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Standardized */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 md:py-24 px-6"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_5%,rgba(59,130,246,0.08),transparent_45%),radial-gradient(ellipse_at_80%_95%,rgba(147,197,253,0.06),transparent_40%),radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.8),transparent_60%)]"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-6">
              ✅ Quality Management Systems (QMS)
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Comprehensive Quality Management
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              QMS solutions that ensure your organization consistently meets quality standards and regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-brand-navy to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-navy/30 transition-all duration-300"
              >
                Discuss Your QMS Needs
              </Link>
              <Link 
                href="#solutions"
                className="px-8 py-4 bg-white/80 backdrop-blur-xl text-brand-orange font-semibold rounded-xl border border-gray-200 hover:bg-brand-orange/5 transition-all duration-300"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Services Grid - Glass-effect cards */}
      <section id="solutions" className="py-20 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">QMS Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive quality management solutions designed for regulated industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {qmsServices.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 bg-white/85 backdrop-blur-xl rounded-3xl border border-gray-200/60 shadow-2xl shadow-brand-navy/10 hover:shadow-brand-navy/15 transition-all duration-300"
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
      <section className="py-20 md:py-24 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Ready to Implement Your QMS?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Our quality management experts help regulated organizations implement and maintain QMS that meets the strictest regulatory requirements.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg text-lg"
            >
              Start Your Quality Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}