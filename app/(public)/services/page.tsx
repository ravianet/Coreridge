"use client";
import { motion } from "framer-motion";

// Professional service categorization matching iflexion.com's enterprise structure
const services = [
  {
    id: "build",
    title: "IT Infrastructure Services",
    tagline: "Foundations. Scalable. Resilient.",
    description: "End-to-end IT infrastructure solutions including IT Network & Infrastructure Solutions, Cloud Solutions, and Data Centre Solutions. Build resilient IT foundations that scale with your enterprise needs.",
    features: ["IT Infrastructure Design", "Cloud Solutions", "Data Centre Solutions", "Infrastructure Management"],
    category: "BUILD",
    gradient: "from-primary-500 to-accent-cyan",
    icon: "🏗️",
    href: "/services/build",
    color: "primary"
  },
  {
    id: "secure",
    title: "Cybersecurity Services",
    tagline: "Protect. Defend. Monitor.",
    description: "Comprehensive Information Security Solutions, Cyber Security services, and IT Consulting to safeguard your organization. We provide managed security services covering applications, networks, endpoints, and cloud environments.",
    features: ["Information Security", "Cyber Security", "Managed Security Services", "IT Consulting & Implementation", "CCTV Implementation & AI Video Analytics"],
    subServices: [
      { name: "CCTV & AI Video Analytics", href: "/services/cctv-video-analytics" }
    ],
    category: "SECURE",
    gradient: "from-red-500 to-orange-500",
    icon: "🔒",
    href: "/services/secure",
    color: "red"
  },
  {
    id: "transform",
    title: "Digitalization & AI Solutions",
    tagline: "Innovate. Automate. Scale.",
    description: "Elevating operational efficiency through software innovation and modern web technologies. Transform your business with cutting-edge digital solutions including AI, supply chain optimization, and SAP services.",
    features: ["Digital Transformation", "AI & Machine Learning", "Supply Chain Solutions", "SAP Implementation"],
    subServices: [
      { name: "Supply Chain Solutions", href: "/services/supply-chain" },
      { name: "SAP Implementation & Rollout", href: "/services/sap-implementation" }
    ],
    category: "TRANSFORM",
    gradient: "from-purple-500 to-pink-500",
    icon: "🚀",
    href: "/services/transform",
    color: "purple"
  },
  {
    id: "validate",
    title: "Compliance & CSV Services",
    tagline: "Comply. Validate. Audit-ready.",
    description: "Computer System Validation (CSV) & compliance services tailored for Pharma, Life Sciences & Education. Ensure your systems meet FDA, GxP, 21 CFR Part 11, and EU Annex 11 regulatory requirements.",
    features: ["Computer System Validation", "Regulatory Compliance", "Quality Management Systems (QMS)", "Change Control & CAPA"],
    subServices: [
      { name: "Quality Management Systems (QMS)", href: "/services/quality-management" },
      { name: "Change Control & CAPA", href: "/services/change-control" },
      { name: "Computer System Validation (CSV)", href: "/services/computer-system-validation" }
    ],
    category: "VALIDATE",
    gradient: "from-green-500 to-emerald-500",
    icon: "✅",
    href: "/services/validate",
    color: "green"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="container-pro">
        {/* Hero Section - Professional enterprise header like iflexion.com */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-700 text-sm font-semibold mb-6">
            Our Expertise
          </span>
          <h1 className="mb-6">
            <span className="gradient-text">Services & Solutions</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive enterprise technology solutions designed to power your digital transformation. Explore our full suite of services that drive innovation and growth.
          </p>
        </motion.div>

        {/* All Services - Professional grid layout with enterprise styling */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="bg-gray-50 p-10 md:p-16 rounded-2xl border border-gray-200"
            >
              <div className="grid lg:grid-cols-5 gap-12 items-start">
                {/* Left Content - Professional typography */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">{service.icon}</span>
                    <span className={`px-3 py-1 bg-gradient-to-r ${service.gradient} bg-opacity-10 border border-current rounded-lg text-sm font-bold tracking-wider bg-clip-text text-transparent`}>
                      {service.category}
                    </span>
                  </div>
                  <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  <p className="text-2xl text-black mb-6 font-medium">{service.tagline}</p>
                  <p className="text-black text-lg leading-relaxed mb-8">{service.description}</p>
                  <a
                    href={service.href}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                
                {/* Right Content - Features & Sub-services */}
                <div className="lg:col-span-3 space-y-8">
                  {/* Key Capabilities */}
                  <div>
                    <h4 className="text-xl font-semibold text-brand-navy mb-6">Key Capabilities</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, fIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.12 + fIndex * 0.08 }}
                          className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-brand-navy/50 transition-all"
                        >
                          <div className="w-3 h-3 rounded-full bg-brand-navy" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Specialized Sub-Services */}
                  {service.subServices && (
                    <div>
                      <h4 className="text-xl font-semibold text-brand-navy mb-6">Specialized Sub-Services</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.subServices.map((subService, sIndex) => (
                          <motion.a
                            key={subService.name}
                            href={subService.href}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12 + (service.features.length + sIndex) * 0.08 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-brand-navy/50 transition-all cursor-pointer group"
                          >
                            <div className="w-3 h-3 rounded-full bg-brand-navy" />
                            <span className="text-gray-700 font-medium group-hover:text-brand-navy transition-colors">{subService.name}</span>
                            <svg className="w-4 h-4 ml-auto text-gray-400 group-hover:text-brand-navy group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Professional enterprise closing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-32 text-center py-24 px-6 bg-brand-navy rounded-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how our enterprise solutions can help your business thrive in the digital age. Partner with Coreridge for your technology journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Schedule a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/company/about-us"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Learn About Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}