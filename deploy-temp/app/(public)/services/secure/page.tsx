"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SecurePage() {
  const securityServices = [
    {
      title: "Perimeter & Network Security",
      description: "Secure your network boundary with advanced threat prevention and zero-trust architecture.",
      icon: "🔒",
      features: ["Firewall Implementation", "Intrusion Prevention (IPS)", "Zero-Trust Network Access (ZTNA)", "VPN Solutions", "Network Segmentation"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      title: "Endpoint Security",
      description: "Protect all devices accessing your network with modern endpoint protection platforms.",
      icon: "💻",
      features: ["EDR/XDR Solutions", "Anti-Ransomware Protection", "Device Encryption", "Endpoint Detection", "Threat Response"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      title: "Data Protection",
      description: "Safeguard your sensitive data with comprehensive access control and prevention measures.",
      icon: "🔐",
      features: ["Data Loss Prevention (DLP)", "Access Control Systems", "Identity & Access Management (IAM)", "Data Encryption", "Cloud Security"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      title: "Security Audits & Compliance",
      description: "Maintain regulatory compliance with comprehensive security assessments and audits.",
      icon: "📋",
      features: ["Vulnerability Assessment", "Penetration Testing (VAPT)", "IT Risk Audits", "Compliance Reporting", "Remediation Planning"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      title: "Managed Security Services",
      description: "We provide a wide range of Managed Security service offerings covering applications, networks, endpoints, data, end-users, infrastructure, the cloud, perimeters, and much more.",
      icon: "🛡️",
      features: ["24/7 Security Operations", "Cloud Security Management", "Threat Intelligence", "Incident Response", "Security Monitoring"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      title: "IT Consulting & Implementation",
      description: "We provide across the board IT Consulting and Implementation services to screen and fill any need gap in your business IT network and security infrastructure.",
      icon: "💡",
      features: ["Security Gap Analysis", "Infrastructure Assessment", "Implementation Planning", "Deployment Support", "Post-Implementation Review"],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800&h=500"
    }
  ];

  const securityStats = [
    { number: "24/7", label: "Threat Monitoring" },
    { number: "99.9%", label: "Threat Detection Rate" },
    { number: "500+", label: "Secured Enterprises" },
    { number: "0", label: "Data Breaches (Client Base)" }
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-[#184491]/10 text-[#184491] rounded-full text-sm font-semibold mb-6">
              🛡️ SECURE
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#184491] mb-6">
              Enterprise Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
              Zero-Trust Cybersecurity & Continuous Threat Defense. Protect your organizational assets, users, and networks with comprehensive security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#184491] to-[#2563eb] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#184491]/30 transition-all duration-300"
              >
                Schedule Security Assessment
              </Link>
              <Link 
                href="#services"
                className="px-8 py-4 bg-gray-100 backdrop-blur-sm text-[#184491] font-semibold rounded-xl border border-gray-200 hover:bg-gray-200 transition-all duration-300"
              >
                Explore Security Services
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {securityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#184491] to-[#2563eb] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-700 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#184491] mb-4">Comprehensive Security Solutions</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From network perimeter to endpoint devices, we provide end-to-end security to protect your business from evolving cyber threats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 hover:border-[#184491]/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#184491] mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-3">
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

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#184491]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Enterprise?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Our cybersecurity experts are ready to assess your infrastructure and implement robust protection strategies.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-5 bg-white text-[#184491] font-semibold rounded-xl hover:shadow-lg hover:shadow-white/30 transition-all duration-300 text-lg"
          >
            Get Your Free Security Assessment
          </Link>
        </motion.div>
      </section>
    </div>
  );
}