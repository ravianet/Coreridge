"use client";
import { motion } from "framer-motion";

const strategicPillars = [
  {
    id: "build",
    title: "BUILD",
    subtitle: "IT Infrastructure & Managed Hardware",
    description: "Resilience through Next-Gen IT Hardware & Infrastructure. From network architecture to cloud hybrid planning, we deliver robust infrastructure that scales with your enterprise.",
    icon: "🏗️",
    link: "/services/build",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Network & Security Hardware", "Compute & Storage Solutions", "End-User Computing", "Infrastructure Deployment"]
  },
  {
    id: "transform",
    title: "TRANSFORM",
    subtitle: "Digitalization, Software Development & AI Solutions",
    description: "Digitalization, Web Applications, ERP/CRM & AI Solutions. Elevate operational efficiency through software innovation and modern web technologies tailored to your business needs.",
    icon: "🚀",
    link: "/services/transform",
    gradient: "from-purple-500 to-pink-500",
    features: ["Custom Web & Mobile Apps", "Enterprise ERP/CRM Systems", "AI/ML Integration", "Legacy System Modernization"]
  },
  {
    id: "secure",
    title: "SECURE",
    subtitle: "Enterprise Cybersecurity & Threat Protection",
    description: "Zero-Trust Cybersecurity & Continuous Threat Defense. Protect your organizational assets, users, and networks with comprehensive security solutions.",
    icon: "🛡️",
    link: "/services/secure",
    gradient: "from-red-500 to-orange-500",
    features: ["Perimeter & Network Security", "Endpoint Security (EDR/XDR)", "Data Protection & DLP", "Security Audits & Compliance"]
  },
  {
    id: "validate",
    title: "VALIDATE",
    subtitle: "Computer System Validation (CSV) & Compliance",
    description: "Computer System Validation (CSV) tailored for Pharma, Life Sciences & Education. Ensure your systems meet strict FDA, GxP, 21 CFR Part 11, and EU Annex 11 standards.",
    icon: "✅",
    link: "/services/validate",
    gradient: "from-green-500 to-emerald-500",
    features: ["GxP / Software Validation", "IQ/OQ/PQ Qualifications", "Regulatory Audit Support", "Data Integrity Audits"]
  }
];

// Core Solutions At-a-Glance
const coreSolutions = [
  { category: "BUILD", items: ["Firewalls, Servers", "DLP, MDM", "Desktops & Workstations"] },
  { category: "TRANSFORM", items: ["Web & Mobile App Development", "Enterprise Automation", "Custom ERP"] },
  { category: "SECURE", items: ["Vulnerability Assessment", "SOC Setup", "Network Security"] },
  { category: "VALIDATE", items: ["GxP / Software Validation", "Audit Readiness", "Compliance Management"] }
];

export default function PillarMatrix() {
  return (
    <div className="space-y-16">
      {/* Strategic Pillars Grid - Interactive Hover Cards (UPDATED TO LIGHT THEME) */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {strategicPillars.map((pillar, index) => (
          <motion.a
            key={pillar.id}
            href={pillar.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-500 overflow-hidden group cursor-pointer block hover:border-brand-navy/40 shadow-sm hover:shadow-lg"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:shadow-cyan-500/25 transition-shadow duration-300`}>
                <span className="text-4xl">{pillar.icon}</span>
              </div>
              <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}>{pillar.title}</h3>
              <p className="text-xl text-gray-700 mb-4 font-medium">{pillar.subtitle}</p>
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{pillar.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {pillar.features.map((feature) => (
                  <span key={feature} className="px-3 py-1 text-xs font-medium bg-brand-navy/10 rounded-full text-brand-navy border border-brand-navy/20">
                    {feature}
                  </span>
                ))}
              </div>
              <div className={`inline-flex items-center font-semibold text-lg bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent group-hover:gap-2 gap-1 transition-all duration-300`}>
                Explore Services <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Removed duplicate Core Solutions At-a-Glance section - content already covered in strategic pillars */}


    </div>
  );
}