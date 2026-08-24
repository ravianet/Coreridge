"use client";
import { motion } from "framer-motion";

const services = [
  {
    id: "ai",
    title: "AI Solutions",
    tagline: "Intelligent. Innovative. Impactful.",
    description: "Transform your business with cutting-edge artificial intelligence. We build intelligent automation, scalable machine learning pipelines, advanced facial recognition models, and predictive analytics that drive actionable insights.",
    features: ["Intelligent Automation", "Machine Learning Pipelines", "Facial Recognition Models", "Predictive Analytics"],
    gradient: "from-cyan-400 to-blue-500",
    icon: "🤖"
  },
  {
    id: "infrastructure",
    title: "IT Infrastructure",
    tagline: "Scalable. Reliable. Future-Ready.",
    description: "Build robust, high-availability infrastructure that grows with your business. Our cloud-native deployments, enterprise networking solutions, and virtualization platforms ensure 99.99% uptime.",
    features: ["High-Availability Servers", "Cloud-Native Deployments", "Enterprise Networking", "Virtualization"],
    gradient: "from-green-400 to-emerald-500",
    icon: "☁️"
  },
  {
    id: "security",
    title: "Cyber Security",
    tagline: "Protect. Detect. Respond.",
    description: "Stay ahead of evolving threats with comprehensive cybersecurity. Our proactive threat detection, vulnerability audits, endpoint protection, and incident response strategies keep your assets secure.",
    features: ["Proactive Threat Detection", "Vulnerability Audits", "Endpoint Protection", "Incident Response"],
    gradient: "from-red-400 to-rose-500",
    icon: "🛡️"
  },
  {
    id: "development",
    title: "Application Development",
    tagline: "Build. Integrate. Deliver.",
    description: "From concept to deployment, we create scalable full-stack software tailored to your needs. Enterprise ERP architectures, cloud backend microservices, and custom APIs that power your operations.",
    features: ["Full-Stack Software", "Enterprise ERP Architectures", "Cloud Microservices", "Custom APIs"],
    gradient: "from-amber-400 to-orange-500",
    icon: "💻"
  },
  {
    id: "csv",
    title: "Computer System Validation",
    tagline: "Validate. Comply. Assure.",
    description: "Meet rigorous regulatory requirements with confidence. We provide GxP compliance expertise, automated validation testing, risk assessment frameworks, and audit-ready data integrity assurance.",
    features: ["GxP Compliance", "Automated Validation Testing", "Risk Assessment Frameworks", "Data Integrity Assurance"],
    gradient: "from-violet-400 to-purple-500",
    icon: "✅"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-navy-900 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Services & Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive enterprise technology solutions designed to power your digital transformation. Explore our full suite of services.
          </p>
        </motion.div>

        {/* All Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-6xl mb-6 block">{service.icon}</span>
                  <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  <p className="text-2xl text-gray-300 mb-6 font-medium">{service.tagline}</p>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">{service.description}</p>
                  <a
                    href="/contact"
                    className={`inline-block px-8 py-4 bg-gradient-to-r ${service.gradient} rounded-xl font-semibold text-lg text-white hover:scale-105 transition-transform`}
                  >
                    Get Started
                  </a>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white mb-6">Key Capabilities</h4>
                  {service.features.map((feature, fIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + fIndex * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-navy-700/50 rounded-lg border border-white/5"
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-gray-200 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center glass-card rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help your business thrive in the digital age.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-xl font-semibold text-lg text-white hover:scale-105 transition-transform"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </div>
  );
}