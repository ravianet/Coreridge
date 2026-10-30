"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

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
        className="container-pro mx-auto py-20 md:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-6">
            📋 Change Control & CAPA
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Change Control & CAPA Excellence
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
            Robust processes for managing changes and implementing corrective actions that maintain regulatory compliance.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-brand-navy to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-navy/30 transition-all duration-300"
              >
                Discuss Your Compliance Needs
              </Link>
              <Link 
                href="#solutions"
                className="px-8 py-4 bg-white/80 backdrop-blur-xl text-brand-orange font-semibold rounded-xl border border-gray-200 hover:bg-brand-orange/5 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </motion.section>

      {/* Core Services Grid - Glass-effect cards */}
      <section id="solutions" className="py-20 md:py-24 bg-gray-50">
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
      <section className="py-20 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Ready to Strengthen Your Compliance?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Our regulatory compliance experts help organizations implement robust change control and CAPA processes that pass even the strictest audits.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg text-lg"
            >
              Start Your Compliance Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}