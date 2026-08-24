"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const leadership = [
  {
    name: "Ravi Kumar Valluru",
    role: "Founder & Managing Director",
    experience: "15+ Years Experience",
    bio: "Senior IT Infrastructure Manager & AI Engineer with 15+ years of enterprise infrastructure experience. Led AI-powered solutions managing 500+ locations, 50,000+ users, and 9,400+ integrated cameras. Expert in Python, Django, Flask, ML systems, and enterprise-scale AI product delivery.",
    image: "👨‍💼",
    profileUrl: "https://ravianet.github.io/resume/",
    keyStats: ["500+ Locations Managed", "50K+ Users Supported", "9.4K Cameras Integrated"],
    skills: ["AI/ML", "Cloud Infrastructure", "Python", "Django", "Computer Vision"]
  },
  {
    name: "Shaik Reshma",
    role: "Founder & CEO",
    experience: "",
    bio: "",
    image: "👩‍💼",
    profileUrl: "#",
    keyStats: [],
    skills: []
  },
  {
    name: "Naga Deepthi Valluru",
    role: "Chief Technology Officer",
    experience: "20+ Years Experience",
    bio: "Principal Enterprise Architect & Certified MuleSoft Developer with 20+ years of excellence in aviation & aerospace technology. Spearheaded big data analytics, cloud modernization, and high-throughput integration ecosystems for The Boeing Company and global airline networks.",
    image: "👩‍💻",
    profileUrl: "https://nagadeepthi-git.github.io/deepthi/",
    keyStats: ["40+ Global Airlines Integrated", "100+ Enterprise Projects", "Cloud Platforms Mastered"],
    skills: ["Databricks", "MuleSoft", "Azure", "AWS", "Enterprise Architecture"]
  }
];

const executiveTeam = [
  { name: "Sarah Johnson", role: "Head of Cybersecurity", image: "👩‍🔐" },
  { name: "David Kim", role: "VP of Engineering", image: "👨‍🚀" },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-navy-900 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the team behind Coreridge Technologies - dedicated experts committed to your success.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Journey</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Founded in 2009, Coreridge Technologies began with a simple mission: to help enterprises navigate the complex world of technology while maintaining the highest standards of security and compliance. What started as a small team of passionate technologists has grown into a leading enterprise technology partner serving Fortune 500 companies across multiple industries.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Today, we continue to push the boundaries of innovation while staying true to our founding principles. Our team of experts brings decades of combined experience across AI, cybersecurity, cloud infrastructure, and regulatory compliance, ensuring that our clients always have the most advanced and reliable solutions at their fingertips.
          </p>
        </motion.section>

        {/* Founding Leadership */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Founding Leadership</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-2xl p-10 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="text-center md:text-left">
                    <span className="text-8xl mb-4 block">{leader.image}</span>
                    <Link 
                      href={leader.profileUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-colors"
                    >
                      View Full Profile →
                    </Link>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                    <p className="text-cyan-400 text-lg mb-3">{leader.role}</p>
                    <p className="text-violet-400 font-semibold mb-4">{leader.experience}</p>
                    <p className="text-gray-400 leading-relaxed mb-6">{leader.bio}</p>
                    
                    {/* Key Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {leader.keyStats.map((stat, i) => (
                        <div key={i} className="text-center p-3 bg-white/5 rounded-lg">
                          <p className="text-xs text-gray-500">{stat}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {leader.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Executive Team */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Executive Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {executiveTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass-card rounded-xl p-8 text-center hover:scale-105 transition-transform"
              >
                <span className="text-6xl mb-4 block">{member.image}</span>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}