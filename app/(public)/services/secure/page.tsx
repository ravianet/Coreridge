"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  Lightbulb,
  LockKeyhole,
  MonitorCheck,
  Shield,
  ShieldCheck,
} from 'lucide-react';

export default function SecurePage() {
  const securityServices = [
    {
      title: "Perimeter & Network Security",
      description: "Secure your network boundary with advanced threat prevention and zero-trust architecture.",
      icon: Shield,
      features: ["Firewall Implementation", "Intrusion Prevention (IPS)", "Zero-Trust Network Access (ZTNA)", "VPN Solutions", "Network Segmentation"],
    },
    {
      title: "Endpoint Security",
      description: "Protect all devices accessing your network with modern endpoint protection platforms.",
      icon: MonitorCheck,
      features: ["EDR/XDR Solutions", "Anti-Ransomware Protection", "Device Encryption", "Endpoint Detection", "Threat Response"],
    },
    {
      title: "Data Protection",
      description: "Safeguard your sensitive data with comprehensive access control and prevention measures.",
      icon: LockKeyhole,
      features: ["Data Loss Prevention (DLP)", "Access Control Systems", "Identity & Access Management (IAM)", "Data Encryption", "Cloud Security"],
    },
    {
      title: "Security Audits & Compliance",
      description: "Maintain regulatory compliance with comprehensive security assessments and audits.",
      icon: ClipboardCheck,
      features: ["Vulnerability Assessment", "Penetration Testing (VAPT)", "IT Risk Audits", "Compliance Reporting", "Remediation Planning"],
    },
    {
      title: "Managed Security Services",
      description: "We provide a wide range of Managed Security service offerings covering applications, networks, endpoints, data, end-users, infrastructure, the cloud, perimeters, and much more.",
      icon: ShieldCheck,
      features: ["24/7 Security Operations", "Cloud Security Management", "Threat Intelligence", "Incident Response", "Security Monitoring"],
    },
    {
      title: "IT Consulting & Implementation",
      description: "We provide across the board IT Consulting and Implementation services to screen and fill any need gap in your business IT network and security infrastructure.",
      icon: Lightbulb,
      features: ["Security Gap Analysis", "Infrastructure Assessment", "Implementation Planning", "Deployment Support", "Post-Implementation Review"],
    }
  ];

  const securityStats = [
    { label: "Layered protection", icon: ShieldCheck },
    { label: "Continuous visibility", icon: Activity },
    { label: "Risk-led improvements", icon: ClipboardCheck },
    { label: "Practical guidance", icon: Lightbulb }
  ];

  return (
    <div className="min-h-screen bg-white">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 pb-12 pt-24 md:pb-14 md:pt-28"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-[#184491]/10 text-[#184491] rounded-full text-sm font-semibold mb-6">
              <Shield aria-hidden="true" className="mr-2 inline h-4 w-4" /> SECURE · CYBERSECURITY
            </span>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-[#184491] md:text-5xl lg:text-6xl">
              Enterprise Cybersecurity
            </h1>
            <p className="mx-auto mb-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Zero-Trust Cybersecurity & Continuous Threat Defense. Protect your organizational assets, users, and networks with comprehensive security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="rounded-xl bg-[#184491] px-6 py-3 font-semibold text-white transition hover:bg-[#12366f]"
              >
                Schedule Security Assessment
              </Link>
              <Link 
                href="#services"
                className="rounded-xl border border-[#184491]/20 bg-white/80 px-6 py-3 font-semibold text-[#184491] transition hover:bg-white"
              >
                Explore Security Services
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="border-y border-slate-100 bg-slate-50 px-6 py-7">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {securityStats.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 text-center text-sm font-semibold text-slate-700 md:text-base"
              >
                <item.icon aria-hidden="true" className="h-5 w-5 shrink-0 text-[#184491]" />
                {item.label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="px-6 py-12 md:py-14">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-9 text-center"
          >
            <h2 className="mb-3 text-3xl font-bold text-[#184491] md:text-4xl">Security, aligned to your needs</h2>
            <p className="mx-auto max-w-3xl text-slate-600 md:text-lg">
              Strengthen networks, endpoints, data, and operations with security services shaped around your environment and priorities.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#184491]/30 hover:shadow-md"
              >
                <service.icon aria-hidden="true" className="mb-4 h-6 w-6 text-[#184491]" />
                <h3 className="mb-3 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mb-5 text-sm leading-6 text-slate-600">{service.description}</p>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#184491]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#184491] px-6 py-12 md:py-14">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to strengthen your security?
          </h2>
          <p className="mb-7 text-lg text-blue-100">
            Let&apos;s review your priorities and identify practical next steps for your environment.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#184491] transition hover:bg-blue-50"
          >
            Talk to our team <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}