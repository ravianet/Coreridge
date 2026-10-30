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
      {/* Hero Section - Matches site's glass-effect and color scheme */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container-pro mx-auto py-20 md:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-6">
            💻 Regulatory Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Computer System Validation
            <span className="block text-gray-800 mt-2">
              Ensuring Regulatory Compliance
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Complete validation services for all pharmaceutical systems ensuring FDA, GxP, and 21 CFR Part 11 compliance. 
            Our expert team delivers comprehensive validation documentation and execution for all regulated systems.
          </p>
        </div>
      </motion.section>

      {/* Core Capabilities - Glass-effect cards matching site design */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Core Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
                className="p-8 bg-white/85 backdrop-blur-xl rounded-3xl border border-gray-200/60 hover:border-brand-navy/50 transition-all duration-300 shadow-2xl shadow-brand-navy/10 hover:shadow-brand-navy/15 hover:scale-[1.02]"
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="flex flex-wrap gap-2">
                  {capability.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Process Timeline - Glass-effect cards */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Validation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven, systematic approach to ensure complete compliance and documentation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {validationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white/85 backdrop-blur-xl rounded-3xl border border-gray-200/60 shadow-2xl shadow-brand-navy/10 hover:shadow-brand-navy/15 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="text-4xl font-bold text-brand-navy mb-3">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Figma Style */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Ready to Validate Your Systems?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact our CSV experts to discuss your validation needs and ensure regulatory compliance.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
            >
              Get Started with CSV
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}