"use client";
import { motion } from "framer-motion";

export default function BuildPage() {
  const hardwareCategories = [
    {
      title: "Network & Security Hardware",
      items: ["Next-Gen Firewalls (NGFW)", "Routers", "Switches", "Load Balancers"],
      icon: "🔌"
    },
    {
      title: "Compute & Storage",
      items: ["Enterprise Rack/Blade Servers", "SAN/NAS Storage", "Cloud Storage Solutions", "Backup Systems"],
      icon: "💾"
    },
    {
      title: "End-User Computing",
      items: ["High-performance Workstations", "Desktops", "Laptops", "Thin Clients"],
      icon: "💻"
    }
  ];

  const endpointManagement = [
    {
      title: "DLP (Data Loss Prevention)",
      description: "Comprehensive data protection across endpoints and cloud environments. Prevent data exfiltration and ensure compliance with regulatory requirements.",
      icon: "🛡️"
    },
    {
      title: "MDM (Mobile Device Management)",
      description: "Secure fleet management for remote and campus teams. Enforce security policies, manage applications, and protect corporate data on all devices.",
      icon: "📱"
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
      icon: "☁️",
      features: ["AWS Migration", "Azure Services", "Google Cloud Platform", "Cloud Cost Optimization"]
    },
    {
      title: "Private Cloud",
      description: "Secure, dedicated cloud infrastructure tailored for enterprise needs with enhanced security and compliance controls.",
      icon: "🔒",
      features: ["On-premise Cloud", "Hosted Private Cloud", "VMware Solutions", "Hybrid Integration"]
    }
  ];

  const managedServices = [
    {
      title: "Infrastructure Managed Services",
      description: "The distribution of businesses across geographies and involvement of various functional teams from remote independent locations has resulted in the scattering of IT infrastructure. Our managed services bring order and efficiency to your distributed IT landscape.",
      icon: "🔧",
      features: ["24/7 Infrastructure Monitoring", "Proactive Maintenance", "Performance Optimization", "Incident Management", "Capacity Planning"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-6xl mb-6 block">🏗️</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#184491]">
              BUILD — IT Infrastructure Services
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Infrastructure Procurement, Consulting, Deployment & Management. Build resilient IT foundations that scale with your enterprise needs.
          </p>
        </motion.div>

        {/* Consulting & System Design */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-6">Consulting & System Design</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Expert guidance to design the right infrastructure for your organization. Our team works with you to create scalable, secure, and cost-effective IT architectures.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-[#184491]/50 transition-all duration-300">
              <span className="text-3xl mb-4 block">🌐</span>
              <h3 className="text-xl font-bold text-[#184491] mb-2">Network Architecture</h3>
              <p className="text-gray-700">Design robust, secure network infrastructures that support your business operations at scale.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-[#184491]/50 transition-all duration-300">
              <span className="text-3xl mb-4 block">📊</span>
              <h3 className="text-xl font-bold text-[#184491] mb-2">Server Sizing</h3>
              <p className="text-gray-700">Right-size your compute resources to optimize performance while controlling costs.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-[#184491]/50 transition-all duration-300">
              <span className="text-3xl mb-4 block">☁️</span>
              <h3 className="text-xl font-bold text-[#184491] mb-2">Cloud Hybrid Planning</h3>
              <p className="text-gray-700">Develop hybrid cloud strategies that balance on-premise security with cloud scalability.</p>
            </div>
          </div>
        </motion.section>

        {/* Hardware Sales & Enterprise Licensing */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-10">Hardware Sales & Enterprise Licensing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {hardwareCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#184491]/50 transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="text-xl font-bold text-[#184491] mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-[#184491]"></span>
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
          className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-10">Endpoint & Data Management</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {endpointManagement.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-8 bg-white rounded-xl border border-gray-200 hover:border-[#184491]/50 transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-[#184491] mb-3">{item.title}</h3>
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
          className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-10">Infrastructure Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {infrastructureServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="p-4 bg-white rounded-lg border border-gray-200 text-center hover:border-[#184491]/50 transition-all duration-300"
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
          className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-10">Cloud Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cloudSolutions.map((cloud, index) => (
              <motion.div
                key={cloud.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="p-8 bg-white rounded-xl border border-gray-200"
              >
                <span className="text-4xl mb-4 block">{cloud.icon}</span>
                <h3 className="text-xl font-bold text-[#184491] mb-3">{cloud.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{cloud.description}</p>
                <ul className="space-y-2">
                  {cloud.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-[#184491]"></span>
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
          className="bg-white rounded-2xl p-8 md:p-12 mb-16 border border-gray-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-10">Infrastructure Managed Services</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {managedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="p-8 bg-gray-50 rounded-xl border border-gray-200"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-[#184491] mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-[#184491]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-center py-24 px-6 bg-[#184491] rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your IT Infrastructure?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build a resilient, scalable IT foundation for your enterprise.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#184491] rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-white/25"
          >
            Schedule a Consultation
          </a>
        </motion.div>

      </div>
    </div>
  );
}