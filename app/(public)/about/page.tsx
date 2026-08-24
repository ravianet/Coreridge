"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Client Retention" },
    { number: "50+", label: "Industry Experts" },
  ];

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
              About Coreridge
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a leading enterprise technology partner dedicated to transforming businesses through innovative solutions, robust security, and regulatory compliance.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="glass-card rounded-xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            At Coreridge Technologies, we empower enterprises to navigate the complex digital landscape with confidence. Our mission is to deliver cutting-edge technology solutions that not only drive innovation but also maintain the highest standards of security, reliability, and regulatory compliance. We believe in building long-term partnerships with our clients, understanding their unique challenges, and providing tailored solutions that deliver measurable business outcomes.
          </p>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Excellence", desc: "We strive for excellence in every project we undertake, delivering solutions that exceed expectations.", icon: "🎯" },
              { title: "Integrity", desc: "Transparency and ethical practices are the foundation of all our client relationships.", icon: "🤝" },
              { title: "Innovation", desc: "We continuously evolve with technology, bringing the latest advancements to our clients.", icon: "💡" },
            ].map((value, index) => (
              <div key={index} className="glass-card rounded-xl p-8">
                <span className="text-5xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}