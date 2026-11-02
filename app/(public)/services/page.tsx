"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// Professional service categorization matching iflexion.com's enterprise structure
const services = [
  {
    id: "build",
    title: "IT Infrastructure Services",
    tagline: "Foundations. Scalable. Resilient.",
    description: "End-to-end IT infrastructure solutions including IT Network & Infrastructure Solutions, Cloud Solutions, and Data Centre Solutions. Build resilient IT foundations that scale with your enterprise needs.",
    features: ["IT Infrastructure Design", "Cloud Solutions", "Data Centre Solutions", "Infrastructure Management"],
    category: "BUILD",
    gradient: "from-brand-navy to-brand-navy-light",
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
    gradient: "from-brand-navy to-brand-navy-light",
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
    gradient: "from-brand-navy to-brand-navy-light",
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
    gradient: "from-brand-navy to-brand-navy-light",
    icon: "✅",
    href: "/services/validate",
    color: "green"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pb-14 pt-16 sm:pt-20">
      <div className="container-pro">
        {/* Hero Section - Professional enterprise header like iflexion.com */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-14 max-w-4xl text-center sm:mb-16"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2 text-sm font-semibold text-brand-orange">
            Our Expertise
          </span>
          <h1 className="mb-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-brand-navy md:text-5xl lg:text-6xl">
            Services &amp; Solutions
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            Comprehensive enterprise technology solutions designed to power your digital transformation. Explore our full suite of services that drive innovation and growth.
          </p>
        </motion.div>

        {/* All Services - Professional grid layout with enterprise styling */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-7 md:p-9"
            >
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Left Content - Professional typography */}
                <div className="lg:col-span-2">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy/5 text-2xl">{service.icon}</span>
                    <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold tracking-wider text-brand-orange">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mb-3 text-base font-semibold text-slate-700">{service.tagline}</p>
                  <p className="mb-6 text-sm leading-7 text-slate-600">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
                  >
                    Learn More
                    <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                {/* Right Content - Features & Sub-services */}
                <div className="lg:col-span-3 space-y-6">
                  {/* Key Capabilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-brand-navy mb-4">Key Capabilities</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.12 + fIndex * 0.08 }}
                          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 transition-colors hover:border-brand-navy/30"
                        >
                          <div className="h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                          <span className="text-sm font-medium text-slate-600">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Specialized Sub-Services */}
                  {service.subServices && (
                    <div>
                      <h4 className="text-lg font-semibold text-brand-navy mb-4">Specialized Sub-Services</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.subServices.map((subService, sIndex) => (
                          <motion.a
                            key={subService.name}
                            href={subService.href}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12 + (service.features.length + sIndex) * 0.08 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-brand-navy/30 group"
                          >
                            <div className="h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                            <span className="text-gray-700 font-medium text-sm group-hover:text-brand-navy transition-colors">{subService.name}</span>
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

        {/* CTA Section - Figma Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-16 rounded-3xl bg-brand-navy px-6 py-12 text-center shadow-[0_20px_54px_-32px_rgba(6,20,61,0.55)] sm:px-10 sm:py-16 md:mt-20"
        >
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">Ready to Transform Your Enterprise?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-300">
            Let's discuss how our enterprise solutions can help your business thrive in the digital age. Partner with Coreridge for your technology journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ad550f] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange-light"
            >
              Schedule a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/company/about-us"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}