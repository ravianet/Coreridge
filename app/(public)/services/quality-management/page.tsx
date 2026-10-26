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
              ✅ Quality Management Systems (QMS)
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#184491] mb-6">
              Comprehensive Quality Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
              QMS solutions that ensure your organization consistently meets quality standards and regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#184491] to-[#2563eb] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#184491]/30 transition-all duration-300"
              >
                Discuss Your QMS Needs
              </Link>
              <Link 
                href="#solutions"
                className="px-8 py-4 bg-gray-100 backdrop-blur-sm text-[#184491] font-semibold rounded-xl border border-gray-200 hover:bg-gray-200 transition-all duration-300"
              >
                View Solutions
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#184491] mb-4">QMS Capabilities</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive quality management solutions designed for regulated industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {qmsServices.map((solution, index) => (
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
            Ready to Implement Your QMS?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our quality management experts help regulated organizations implement and maintain QMS that meets the strictest regulatory requirements.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#184491] font-semibold rounded-xl hover:shadow-lg hover:shadow-white/30 transition-all duration-300 text-lg"
          >
            Start Your Quality Journey
          </Link>
        </motion.div>
      </section>
    </div>
  );
}