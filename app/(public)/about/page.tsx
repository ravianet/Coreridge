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
    <div className="min-h-screen bg-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              About Coreridge
            </span>
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
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
              <div className="text-black">{stat.label}</div>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
          <p className="text-lg text-black leading-relaxed">
            At Coreridge Technologies, we empower enterprises to navigate the complex digital landscape with confidence. Our mission is to deliver cutting-edge technology solutions that not only drive innovation but also maintain the highest standards of security, reliability, and regulatory compliance. We believe in building long-term partnerships with our clients, understanding their unique challenges, and providing tailored solutions that deliver measurable business outcomes.
          </p>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Excellence", desc: "We strive for excellence in every project we undertake, delivering solutions that exceed expectations.", icon: "🎯" },
              { title: "Integrity", desc: "Transparency and ethical practices are the foundation of all our client relationships.", icon: "🤝" },
              { title: "Innovation", desc: "We continuously evolve with technology, bringing the latest advancements to our clients.", icon: "💡" },
            ].map((value, index) => (
              <div key={index} className="glass-card rounded-xl p-8">
                <span className="text-5xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-black">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                name: "Ravi Kumar Valluru", 
                role: "Founder & CEO",
                bio: "19-year technology leader specializing in enterprise IT infrastructure, AI engineering, and digital transformation. Managed IT infrastructure for 50,000+ users across 600+ locations, integrated 9,400+ surveillance cameras, and built enterprise AI products in computer vision, predictive maintenance, and demand forecasting for education, manufacturing, and aviation sectors."
              },
              { 
                name: "Nagadeepthi Valluru", 
                role: "Co-Founder & CTO",
                bio: "20-year aviation technology leader with extensive aviation experience, excelling as a Software Developer, DBA, Full-Stack Engineer, and Data Analyst. Led enterprise architecture, cloud modernization, and big data analytics initiatives for global airline networks, architecting mission-critical systems that power commercial aviation operations worldwide."
              },
              { 
                name: "Reshma Shaik", 
                role: "Managing Director",
                bio: "Leading strategic growth and operations for Coreridge Technologies as Managing Director, with 10+ years of experience growing enterprise technology brands. Expert in business strategy, demand generation, and building strong client relationships that drive business expansion across aviation and industrial sectors."
              },
            ].map((member, index) => (
              <div key={index} className="glass-card rounded-xl p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-4 flex items-center justify-center text-3xl text-white">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                <p className="text-black">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}