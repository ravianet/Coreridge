"use client";
import { motion } from "framer-motion";

const services = [
  {
    id: "ai",
    title: "AI Solutions",
    description: "Transform your business with cutting-edge artificial intelligence.",
    icon: "🤖",
  },
  {
    id: "infrastructure",
    title: "IT Infrastructure",
    description: "Build robust, high-availability infrastructure that grows.",
    icon: "☁️",
  },
  {
    id: "security",
    title: "Cyber Security",
    description: "Stay ahead of evolving threats with comprehensive protection.",
    icon: "🛡️",
  },
  {
    id: "development",
    title: "Application Development",
    description: "From concept to deployment, we create scalable software.",
    icon: "💻",
  },
  {
    id: "csv",
    title: "System Validation",
    description: "Meet regulatory requirements with full compliance assurance.",
    icon: "✅",
  }
];

export default function PillarMatrix() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -12, scale: 1.03 }}
          className="relative bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700 transition-all duration-500 overflow-hidden group"
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-xl">
            <span className="text-3xl">{service.icon}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
          <div className="inline-block text-cyan-400 font-semibold text-lg">
            Explore Service →
          </div>
        </motion.div>
      ))}
    </div>
  );
}
