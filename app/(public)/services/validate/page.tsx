"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ValidatePage() {
  const validationServices = [
    {
      title: "Computer System Validation (CSV)",
      description: "Ensure your software systems meet strict regulatory compliance standards for FDA, GxP, 21 CFR Part 11, and EU Annex 11.",
      icon: "✅",
      features: ["FDA Compliance", "GxP Alignment", "21 CFR Part 11", "EU Annex 11", "Regulatory Documentation"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=500",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "System Lifecycle Management",
      description: "Complete validation documentation from initial planning through ongoing compliance maintenance.",
      icon: "📋",
      features: ["Validation Master Plans (VMP)", "User Requirement Specifications (URS)", "Installation Qualification (IQ)", "Operational Qualification (OQ)", "Performance Qualification (PQ)"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=500",
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Regulatory Audit Support",
      description: "Comprehensive audit preparation and support to ensure your systems pass regulatory inspections.",
      icon: "🔍",
      features: ["Gap Analysis", "Remediation Planning", "Audit Readiness", "Compliance Maintenance", "Regulator Liaison"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=500",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Educational System Audits",
      description: "Data integrity and security audits for institutional management systems in education sector.",
      icon: "🎓",
      features: ["Student Data Protection", "Privacy Compliance", "System Security Assessments", "Data Integrity Checks", "Institutional Reporting"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800&h=500",
      color: "from-cyan-500 to-green-500"
    }
  ];

  const targetIndustries = [
    { name: "Pharmaceutical", icon: "💊", description: "Full CSV compliance for drug development and manufacturing systems" },
    { name: "Healthcare", icon: "🏥", description: "HIPAA and healthcare regulatory compliance" },
    { name: "Life Sciences", icon: "🧬", description: "Biotech and research institution validation" },
    { name: "Education", icon: "📚", description: "Educational institution data security and compliance" },
    { name: "Manufacturing", icon: "🏭", description: "Industrial system validation and quality management" }
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
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#184491]/5 to-blue-400/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-[#184491]/10 text-[#184491] rounded-full text-sm font-semibold mb-6">
              ✅ VALIDATE
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#184491] mb-6">
              Computer System Validation
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
              CSV & Compliance tailored for Pharma, Life Sciences & Education. Ensure your systems meet all regulatory requirements and maintain audit readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#184491] to-[#2563eb] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#184491]/30 transition-all duration-300"
              >
                Schedule Compliance Consultation
              </Link>
              <Link 
                href="#services"
                className="px-8 py-4 bg-gray-100 backdrop-blur-sm text-[#184491] font-semibold rounded-xl border border-gray-200 hover:bg-gray-200 transition-all duration-300"
              >
                Explore Validation Services
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Compliance Standards Banner */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-gray-800 mb-8">Supported Compliance Standards</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-[#184491]/10 border border-[#184491]/30 rounded-full text-[#184491] font-medium"
              >
                {standard}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#184491] mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized validation services for regulated industries requiring strict compliance and audit trails.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {targetIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:border-[#184491]/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#184491] mb-4">Comprehensive Validation Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From initial system deployment through ongoing compliance maintenance, we support your entire validation lifecycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {validationServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 hover:border-[#184491]/50 transition-all duration-300 shadow-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-[#184491] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Process Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#184491] mb-4">Our Validation Process</h2>
            <p className="text-xl text-gray-700">A proven methodology for successful system validation and regulatory compliance</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#184491] to-[#2563eb] hidden md:block" />
            {[
              { step: "01", title: "Assessment & Planning", description: "Gap analysis and Validation Master Plan development" },
              { step: "02", title: "Documentation", description: "URS, functional specifications, and test plan creation" },
              { step: "03", title: "Execution", description: "IQ/OQ/PQ testing and protocol execution" },
              { step: "04", title: "Reporting", description: "Validation summary report and compliance documentation" },
              { step: "05", title: "Maintenance", description: "Ongoing monitoring, periodic reviews, and change control" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-gray-50 backdrop-blur-sm p-6 rounded-xl border border-gray-200">
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#184491] to-[#2563eb] bg-clip-text text-transparent">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#184491] rounded-full hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#184491]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Achieve Compliance?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Our CSV experts have helped hundreds of organizations maintain regulatory compliance and pass audits with confidence.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-5 bg-white text-[#184491] font-semibold rounded-xl hover:shadow-lg hover:shadow-white/30 transition-all duration-300 text-lg"
          >
            Start Your Validation Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
}