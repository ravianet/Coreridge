"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function WhyCoreRidgePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  
  const coreDifferentiators = [
    {
      title: "Industry-Specific Expertise",
      description: "Deep domain knowledge across pharmaceuticals, life sciences, manufacturing, and enterprise sectors. We understand the unique regulatory and operational challenges your industry faces.",
      icon: "🎯",
      features: ["Pharma & GxP Compliance", "Manufacturing 4.0", "Enterprise BFSI", "Education Technology"]
    },
    {
      title: "End-to-End Partnership",
      description: "From initial consultation to ongoing support, we're with you at every stage. Our comprehensive approach ensures seamless implementation and long-term success.",
      icon: "🤝",
      features: ["Strategic Consulting", "Implementation Services", "24/7 Support", "Continuous Optimization"]
    },
    {
      title: "Proven Track Record",
      description: "Years of successful deployments with hundreds of satisfied clients. Our team has delivered complex IT transformation projects across multiple verticals.",
      icon: "🏆",
      features: ["500+ Projects Delivered", "98% Client Retention", "Global Reach", "Local Expertise"]
    },
    {
      title: "Security First Approach",
      description: "Security is built into everything we do. Our solutions incorporate industry-leading security practices to protect your critical data and systems.",
      icon: "🛡️",
      features: ["Zero Trust Architecture", "24/7 Monitoring", "Compliance Audits", "Data Encryption"]
    }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our client relationships. Your success is our success.",
      icon: "✅"
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to bring you cutting-edge solutions that drive competitive advantage.",
      icon: "💡"
    },
    {
      title: "Reliability",
      description: "You can count on us to deliver on time, every time. We take ownership of your project's success.",
      icon: "🎯"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Clients" },
    { number: "98%", label: "Client Retention" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Why Choose
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                CoreRidge
              </span>
            </h1>
            <p className="text-xl text-black leading-relaxed">
              We're not just another IT services provider. We're your strategic partner in digital transformation, 
              bringing decades of industry expertise and a proven methodology that delivers measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-black font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Differentiators */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Sets Us Apart</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our unique combination of industry expertise, technical excellence, and client-first approach 
              delivers results that drive your business forward.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreDifferentiators.map((differentiator, index) => (
              <motion.div
                key={differentiator.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-[#D0B77B]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#D0B77B]/10 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{differentiator.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{differentiator.title}</h3>
                <p className="text-slate-600 mb-6">{differentiator.description}</p>
                <div className="flex flex-wrap gap-2">
                  {differentiator.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-gradient-to-r from-[#D0B77B]/20 to-[#C4A86A]/20 text-slate-800 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do and define how we partner with our clients.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-b from-slate-50 to-white rounded-xl border border-slate-200 hover:border-[#D0B77B]/40 transition-all duration-500 hover:shadow-lg hover:shadow-[#D0B77B]/5 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Subtle gold accent background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D0B77B] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C4A86A] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Transformation?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how CoreRidge can help your organization achieve its digital goals.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 text-slate-900 font-semibold rounded-xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #D0B77B 0%, #C4A86A 100%)',
                boxShadow: isHovering 
                  ? '0 20px 60px rgba(208, 183, 123, 0.6), 0 0 80px rgba(208, 183, 123, 0.3)' 
                  : '0 10px 40px rgba(208, 183, 123, 0.4)',
                transform: isHovering ? 'scale(1.08)' : 'scale(1)'
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Cursor-following spotlight effect */}
              {isHovering && (
                <div 
                  className="absolute w-32 h-32 rounded-full pointer-events-none"
                  style={{
                    left: mousePosition.x - 64,
                    top: mousePosition.y - 64,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)',
                    transition: 'left 0.1s ease-out, top 0.1s ease-out',
                    filter: 'blur(8px)'
                  }}
                />
              )}
              {/* Shine overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)',
                  backgroundSize: '200% 200%',
                  animation: isHovering ? 'shine 1.5s infinite' : 'none'
                }}
              />
              <span className="relative z-10">Get in Touch</span>
            </Link>
            {/* Add custom keyframes for shine animation */}
            <style jsx>{`
              @keyframes shine {
                0% {
                  background-position: 200% 200%;
                }
                100% {
                  background-position: -200% -200%;
                }
              }
            `}</style>
          </motion.div>
        </div>
      </section>
    </div>
  );
}