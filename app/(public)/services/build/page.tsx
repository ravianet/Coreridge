"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Cloud,
  CloudCog,
  HardDrive,
  Laptop,
  LockKeyhole,
  Network,
  Router,
  Server,
  Settings2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export default function BuildPage() {
  const hardwareCategories = [
    {
      title: "Network & Security Hardware",
      items: ["Next-Gen Firewalls (NGFW)", "Routers", "Switches", "Load Balancers"],
      icon: Router
    },
    {
      title: "Compute & Storage",
      items: ["Enterprise Rack/Blade Servers", "SAN/NAS Storage", "Cloud Storage Solutions", "Backup Systems"],
      icon: HardDrive
    },
    {
      title: "End-User Computing",
      items: ["High-performance Workstations", "Desktops", "Laptops", "Thin Clients"],
      icon: Laptop
    }
  ];

  const endpointManagement = [
    {
      title: "DLP (Data Loss Prevention)",
      description: "Comprehensive data protection across endpoints and cloud environments. Prevent data exfiltration and ensure compliance with regulatory requirements.",
      icon: ShieldCheck
    },
    {
      title: "MDM (Mobile Device Management)",
      description: "Secure fleet management for remote and campus teams. Enforce security policies, manage applications, and protect corporate data on all devices.",
      icon: Smartphone
    }
  ];

  const infrastructureServices = [
    "Network Deployment",
    "Campus Wi-Fi Implementation",
    "Structured Cabling",
    "Server Virtualization",
    "Cloud Hybrid Planning",
    "Infrastructure Monitoring"
  ];

  const cloudSolutions = [
    {
      title: "Public Cloud",
      description: "The rapid rise of cloud-based solutions has resulted in nearly all businesses placing at least a part of their operations there. Leverage leading cloud platforms for scalability and innovation.",
      icon: Cloud,
      features: ["AWS Migration", "Azure Services", "Google Cloud Platform", "Cloud Cost Optimization"]
    },
    {
      title: "Private Cloud",
      description: "Secure, dedicated cloud infrastructure tailored for enterprise needs with enhanced security and compliance controls.",
      icon: LockKeyhole,
      features: ["On-premise Cloud", "Hosted Private Cloud", "VMware Solutions", "Hybrid Integration"]
    }
  ];

  const managedServices = [
    {
      title: "Infrastructure Managed Services",
      description: "The distribution of businesses across geographies and involvement of various functional teams from remote independent locations has resulted in the scattering of IT infrastructure. Our managed services bring order and efficiency to your distributed IT landscape.",
      icon: Settings2,
      features: ["24/7 Infrastructure Monitoring", "Proactive Maintenance", "Performance Optimization", "Incident Management", "Capacity Planning"]
    }
  ];

  return (
    <div className="min-h-screen bg-white px-4 pt-24 sm:px-6 md:pt-28 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-8 max-w-4xl text-center md:mb-10"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold tracking-wide text-brand-navy">
            <Server aria-hidden="true" className="h-4 w-4" />
            BUILD · INFRASTRUCTURE & MANAGED HARDWARE
          </span>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Resilient infrastructure,
            <span className="block text-brand-navy">built for what&apos;s next.</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            Practical infrastructure consulting, procurement, deployment, and managed services—aligned to your organization&apos;s needs.
          </p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-navy px-6 py-3 font-semibold text-white transition hover:bg-brand-navy-dark">
            Plan your infrastructure <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Consulting & System Design */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 rounded-2xl border border-slate-200 bg-white py-12 px-6 md:mb-10 md:py-16 md:px-8"
        >
          <h2 className="mb-3 text-2xl font-bold text-brand-navy md:text-3xl">Consulting & system design</h2>
          <p className="mb-6 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Expert guidance to design the right infrastructure for your organization. Our team works with you to create scalable, secure, and cost-effective IT architectures.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-navy/40">
              <Network aria-hidden="true" className="mb-4 h-6 w-6 text-brand-navy" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Network Architecture</h3>
              <p className="text-gray-700">Design robust, secure network infrastructures that support your business operations at scale.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-navy/40">
              <BarChart3 aria-hidden="true" className="mb-4 h-6 w-6 text-brand-navy" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Server Sizing</h3>
              <p className="text-gray-700">Right-size your compute resources to optimize performance while controlling costs.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-navy/40">
              <CloudCog aria-hidden="true" className="mb-4 h-6 w-6 text-brand-navy" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Cloud Hybrid Planning</h3>
              <p className="text-gray-700">Develop hybrid cloud strategies that balance on-premise security with cloud scalability.</p>
            </div>
          </div>
        </motion.section>

        {/* Hardware Sales & Enterprise Licensing */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 md:mb-10"
        >
          <h2 className="mb-6 text-2xl font-bold text-brand-navy md:text-3xl">Hardware & enterprise licensing</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {hardwareCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-md"
              >
                <category.icon aria-hidden="true" className="mb-4 h-6 w-6 text-brand-navy" />
                <h3 className="mb-4 text-lg font-bold text-slate-900">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-brand-navy"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Endpoint & Data Management */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8 rounded-2xl border border-slate-200 bg-white py-12 px-6 md:mb-10 md:py-16 md:px-8"
        >
          <h2 className="mb-6 text-2xl font-bold text-brand-navy md:text-3xl">Endpoint & data management</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {endpointManagement.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-navy/40"
              >
                <item.icon aria-hidden="true" className="mb-4 h-6 w-6 text-brand-navy" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Infrastructure Services */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8 rounded-2xl border border-slate-200 bg-white py-12 px-6 md:mb-10 md:py-16 md:px-8"
        >
          <h2 className="mb-6 text-2xl font-bold text-brand-navy md:text-3xl">Infrastructure services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {infrastructureServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="p-4 bg-white rounded-lg border border-gray-200 text-center hover:border-brand-navy/50 transition-all duration-300"
              >
                <span className="text-gray-700 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Cloud Solutions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8 rounded-2xl border border-slate-200 bg-white py-12 px-6 md:mb-10 md:py-16 md:px-8"
        >
          <h2 className="mb-6 text-2xl font-bold text-brand-navy md:text-3xl">Cloud solutions</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {cloudSolutions.map((cloud, index) => (
              <motion.div
                key={cloud.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <cloud.icon aria-hidden="true" className="mb-4 h-6 w-6 text-brand-navy" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">{cloud.title}</h3>
                <p className="mb-4 leading-relaxed text-slate-600">{cloud.description}</p>
                <ul className="space-y-2">
                  {cloud.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-brand-navy"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Infrastructure Managed Services */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-8 rounded-2xl border border-slate-200 bg-white py-12 px-6 md:mb-10 md:py-16 md:px-8"
        >
          <h2 className="mb-6 text-2xl font-bold text-brand-navy md:text-3xl">Infrastructure managed services</h2>
          <div className="grid gap-5">
            {managedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <service.icon aria-hidden="true" className="mb-4 h-6 w-6 text-brand-navy" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mb-4 leading-relaxed text-slate-600">{service.description}</p>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-brand-navy"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section - Figma Style */}
        <section className="bg-gradient-to-br from-blue-50 to-white px-6 py-16 md:py-20 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-lg p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Ready to Build Your IT Infrastructure?</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you build a resilient, scalable IT foundation for your enterprise.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                Schedule a Consultation
              </a>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}