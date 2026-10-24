"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ComputerSystemValidationPage() {
  const coreCapabilities = [
    {
      title: "GxP Compliance",
      description: "Full alignment with global pharmaceutical regulations including FDA 21 CFR Part 11, EU Annex 11, and PIC/S guidelines for complete regulatory compliance.",
      icon: "📋",
      features: ["FDA 21 CFR Part 11", "EU Annex 11 Compliance", "GxP Alignment", "ALCOA+ Data Integrity"]
    },
    {
      title: "ERP System Validation",
      description: "Complete validation of enterprise resource planning systems including SAP, Oracle, and other major ERP platforms used in pharmaceutical manufacturing.",
      icon: "💻",
      features: ["SAP S/4HANA Validation", "Oracle Cloud Validation", "IQ/OQ/PQ Documentation", "Risk Assessment & Mitigation"]
    },
    {
      title: "LIMS & ELN Validation",
      description: "Validation services for Laboratory Information Management Systems and Electronic Laboratory Notebooks ensuring data integrity throughout research and development.",
      icon: "🔬",
      features: ["LIMS Implementation & Validation", "ELN System Deployment", "Instrument Integration", "Data Archiving & Retrieval"]
    },
    {
      title: "Automated System Validation",
      description: "Streamlined validation of automated manufacturing and packaging lines, control systems, and SCADA systems used in pharmaceutical production.",
      icon: "🏭",
      features: ["SCADA System Validation", "PLC & Control Systems", "Automated Packaging Lines", "Process Control Validation"]
    }
  ];

  const validationProcess = [
    {
      step: "01",
      title: "User Requirements Specification (URS)",
      description: "Document all functional and operational requirements for the system"
    },
    {
      step: "02",
      title: "Risk Assessment",
      description: "Identify and mitigate risks to patient safety, product quality, and data integrity"
    },
    {
      step: "03",
      title: "Installation Qualification (IQ)",
      description: "Verify system is installed correctly in the intended environment"
    },
    {
      step: "04",
      title: "Operational Qualification (OQ)",
      description: "Confirm system operates according to design specifications"
    },
    {
      step: "05",
      title: "Performance Qualification (PQ)",
      description: "Validate system performance in routine production conditions"
    },
    {
      step: "06",
      title: "Periodic Review",
      description: "Continuous monitoring and periodic revalidation to maintain compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Computer System Validation
                <span className="block text-[#184491]">
                  Ensuring Regulatory Compliance
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
              Complete validation services for all pharmaceutical systems ensuring FDA, GxP, and 21 CFR Part 11 compliance. 
              Our expert team delivers comprehensive validation documentation and execution for all regulated systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-4">Core Capabilities</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              End-to-end validation services that ensure your critical systems meet all regulatory requirements
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#184491]/50 transition-all duration-300 shadow-sm"
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-bold text-[#184491] mb-3">{capability.title}</h3>
                <p className="text-gray-700 mb-6">{capability.description}</p>
                <div className="flex flex-wrap gap-2">
                  {capability.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-[#184491]/10 text-[#184491] rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Process Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-4">Our Validation Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              A proven, systematic approach to ensure complete compliance and documentation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {validationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="text-4xl font-bold text-[#184491] mb-3">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#184491]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Validate Your Systems?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our CSV experts to discuss your validation needs and ensure regulatory compliance.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#184491] font-semibold rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/25"
            >
              Get Started with CSV
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}