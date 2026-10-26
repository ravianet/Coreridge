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
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-24 pb-12 md:pt-28 md:pb-14 px-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-[#184491]/10 text-[#184491] rounded-full text-sm font-semibold mb-6">
              📋 Change Control & CAPA
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#184491] mb-6">
              Change Control & CAPA Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
              Robust processes for managing changes and implementing corrective actions that maintain regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#184491] to-[#2563eb] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#184491]/30 transition-all duration-300"
              >
                Discuss Your Compliance Needs
              </Link>
              <Link 
                href="#solutions"
                className="px-8 py-4 bg-gray-100 backdrop-blur-sm text-[#184491] font-semibold rounded-xl border border-gray-200 hover:bg-gray-200 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Services Grid */}
      <section id="solutions" className="py-14 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#184491] mb-4">Change Control & CAPA Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions for managing changes and quality issues in regulated environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {changeControlServices.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:border-[#184491]/50 transition-all duration-300"
              >
                <span className="text-5xl mb-6 block">{solution.icon}</span>
                <h3 className="text-2xl font-bold text-[#184491] mb-3">{solution.title}</h3>
                <p className="text-gray-700 mb-6">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#184491]/10 text-[#184491] rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-16 px-6 bg-[#184491]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Strengthen Your Compliance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our regulatory compliance experts help organizations implement robust change control and CAPA processes that pass even the strictest audits.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#184491] font-semibold rounded-xl hover:shadow-lg hover:shadow-white/30 transition-all duration-300 text-lg"
          >
            Start Your Compliance Journey
          </Link>
        </motion.div>
      </section>
    </div>
  );
}