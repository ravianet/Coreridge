"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function IndustriesPage() {
  const industries = [
    {
      name: "Pharma & Life Sciences",
      icon: "💊",
      description: "Comprehensive IT and compliance solutions for pharmaceutical research, development, and manufacturing organizations.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500",
      href: "/industries/pharma",
      color: "from-blue-500 to-cyan-500",
      keyServices: ["Computer System Validation (CSV)", "GxP Compliance", "Laboratory Information Systems", "Regulatory Audit Support"]
    },
    {
      name: "Education",
      icon: "🎓",
      description: "Technology solutions tailored for educational institutions, from K-12 to universities and research centers.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800&h=500",
      href: "/industries/education",
      color: "from-purple-500 to-pink-500",
      keyServices: ["Campus Infrastructure", "Student Information Systems", "Data Security & Privacy", "E-Learning Platforms"]
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Industrial IT solutions for modern manufacturing facilities, supporting Industry 4.0 and smart factory initiatives.",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=800&h=500",
      href: "/industries/manufacturing",
      color: "from-orange-500 to-red-500",
      keyServices: ["ERP Implementation", "Supply Chain Management", "Industrial IoT", "Process Automation"]
    },
    {
      name: "Enterprise",
      icon: "🏢",
      description: "Scalable enterprise solutions for large organizations across all sectors, supporting digital transformation at scale.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=500",
      href: "/industries/enterprise",
      color: "from-green-500 to-emerald-500",
      keyServices: ["Cloud Migration", "Cybersecurity", "Digital Transformation", "Managed IT Services"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Industry-Specific Solutions
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto mb-10">
              Tailored technology and compliance solutions designed for the unique challenges of your industry.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Industries Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={industry.href}>
                  <div className="bg-gray-50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 hover:border-cyan-500/50 transition-all duration-300 shadow-sm">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <span className="text-5xl mb-4 block">{industry.icon}</span>
                        <h3 className={`text-3xl font-bold bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                          {industry.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-black text-lg mb-6">{industry.description}</p>
                      <div className="mb-6">
                        <h4 className="text-black font-semibold mb-3">Key Services:</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.keyServices.map((service, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className={`inline-flex items-center gap-2 font-semibold bg-gradient-to-r ${industry.color} bg-clip-text text-transparent group-hover:gap-4 transition-all`}>
                        Explore Solutions
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyan-600/20 to-violet-600/20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Not Sure Which Solution Fits Your Industry?
          </h2>
          <p className="text-xl text-black mb-10">
            Our industry experts will assess your specific needs and recommend the perfect technology and compliance strategy for your organization.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 text-lg"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

