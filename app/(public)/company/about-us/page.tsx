"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const companyStats = [
  { number: "500+", label: "Clients Worldwide" },
  { number: "99.9%", label: "Uptime SLA" },
  { number: "15+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
];

const milestones = [
  { year: "2009", title: "Founded", description: "Started with a vision to transform enterprise technology" },
  { year: "2014", title: "Global Expansion", description: "Opened offices across 3 continents" },
  { year: "2017", title: "Cloud Leader", description: "Recognized as top cloud transformation partner" },
  { year: "2020", title: "AI Innovation", description: "Launched our enterprise AI platform" },
  { year: "2024", label: "Today", description: "Leading the next generation of digital transformation" },
];

const coreValues = [
  {
    title: "Excellence",
    description: "We pursue excellence in every solution we deliver, never settling for anything less than outstanding."
  },
  {
    title: "Integrity",
    description: "Transparency and honesty guide every client relationship and business decision we make."
  },
  {
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions that move industries forward."
  },
  {
    title: "Collaboration",
    description: "Your success is our success. We work as an extension of your team to achieve shared goals."
  }
];

const teamMembers = [
  {
    name: "Ravi Kumar Valluru",
    role: "Founder & CEO",
    description: "19-year technology leader specializing in enterprise IT infrastructure, AI engineering, and digital transformation. Managed IT infrastructure for 50,000+ users across 600+ locations, integrated 9,400+ surveillance cameras, and built enterprise AI products in computer vision, predictive maintenance, and demand forecasting for education, manufacturing, and aviation sectors.",
    image: "/team/ravi.jpg"
  },
  {
    name: "Nagadeepthi Valluru",
    role: "Co-Founder & CTO",
    description: "20-year aviation technology leader with extensive aviation experience, excelling as a Software Developer, DBA, Full-Stack Engineer, and Data Analyst. Led enterprise architecture, cloud modernization, and big data analytics initiatives for global airline networks, architecting mission-critical systems that power commercial aviation operations worldwide.",
    image: "/team/deepthi.jpg"
  },
  {
    name: "Reshma Shaik",
    role: "Managing Director",
    description: "Leading strategic growth and operations for Coreridge Technologies as Managing Director, with 10+ years of experience growing enterprise technology brands. Expert in business strategy, demand generation, and building strong client relationships that drive business expansion across aviation and industrial sectors.",
    image: "/team/Reshma.jpg"
  }
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section - Modern compact layout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center mb-16 pt-24 px-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-10">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <p className="text-gray-600 font-medium tracking-wide text-sm">About Coreridge</p>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-[1.05] tracking-tight">
          <span className="text-[#184491]">Building technology</span>
          <br />
          <span className="bg-gradient-to-r from-[#184491] to-[#2563eb] bg-clip-text text-transparent">that moves businesses forward</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
          We're a team of engineers, designers, and strategists dedicated to creating enterprise solutions that deliver real, measurable results.
        </p>
      </motion.div>

      {/* Company Stats - Modern unified container */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 mx-6"
      >
        <div className="shadow-xl rounded-3xl overflow-hidden bg-white border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {companyStats.map((stat, index) => {
              const isLastInRow = index % 4 === 3;
              return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
              className={`text-center py-16 bg-slate-50/30 hover:bg-blue-50/50 transition-all duration-400 ${!isLastInRow ? 'border-r border-b md:border-b-0 border-gray-100' : ''}`}
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-extralight text-black mb-3 tracking-tight">{stat.number}</p>
              <p className="text-gray-500 text-sm tracking-widest uppercase">{stat.label}</p>
            </motion.div>
            );
            })}
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision - Seamless modern cards */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mx-6 mb-16"
      >
        <div className="shadow-xl rounded-3xl overflow-hidden bg-white border border-gray-100">
          <div className="grid md:grid-cols-2">
            {[{
              label: "Our Mission",
              title: "Empower enterprises through technology",
              description: "To empower enterprises worldwide with innovative, scalable, and secure technology solutions that drive growth, efficiency, and competitive advantage in the digital age."
            }, {
              label: "Our Vision",
              title: "Lead the next era of digital transformation",
              description: "To be the global leader in enterprise AI and digital transformation, recognized for our innovation, expertise, and unwavering commitment to client success."
            }].map((item, index) => {
              const isLast = index === 1;
              return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className={`p-16 bg-slate-50/30 hover:bg-blue-50/50 transition-all duration-400 ${!isLast ? 'md:border-r border-b md:border-b-0 border-gray-100' : ''}`}
            >
              <p className="text-gray-500 font-medium text-sm uppercase tracking-[0.3em] mb-6">{item.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">{item.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">{item.description}</p>
            </motion.div>
            );
            })}
          </div>
        </div>
      </motion.section>

      {/* Our Journey Timeline - Modern unified container */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mx-6 mb-16"
      >
        <div className="text-center mb-12">
          <p className="text-gray-500 font-medium text-sm uppercase tracking-[0.3em] mb-4">Our History</p>
          <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">15 Years of Innovation</h2>
        </div>
        <div className="shadow-xl rounded-3xl overflow-hidden bg-white border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {milestones.map((milestone, index) => {
              const isLastInRow = index % 5 === 4;
              return (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
              className={`relative p-10 bg-slate-50/30 hover:bg-blue-50/50 transition-all duration-400 ${!isLastInRow ? 'border-b md:border-b-0 md:border-r border-gray-100' : ''}`}
            >
              <div className="w-4 h-4 rounded-full bg-black mb-8 relative z-10 shadow-lg shadow-black/20"></div>
              {index < milestones.length - 1 && (
                <div className="absolute top-2 left-4 w-full h-px bg-gradient-to-r from-gray-300 to-transparent hidden md:block"></div>
              )}
              <p className="text-gray-500 font-mono text-sm mb-4 tracking-wide">{milestone.year}</p>
              <h3 className="text-2xl font-semibold text-black mb-4">{milestone.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
            </motion.div>
            );
            })}
          </div>
        </div>
      </motion.section>

      {/* Core Values - Modern unified container */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mx-6 mb-16"
      >
        <div className="text-center mb-12">
          <p className="text-gray-500 font-medium text-sm uppercase tracking-[0.3em] mb-4">Our Values</p>
          <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">What Drives Us</h2>
        </div>
        <div className="shadow-xl rounded-3xl overflow-hidden bg-white border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => {
              const isLastInRow = index % 4 === 3;
              const isLastRow = index >= 4; // Only one row for 4 values
              return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`p-10 bg-slate-50/30 hover:bg-blue-50/50 transition-all duration-400 ${!isLastInRow ? 'border-r border-b lg:border-b-0 border-gray-100' : ''}`}
            >
              <h3 className="text-2xl font-semibold text-black mb-4">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
            );
            })}
          </div>
        </div>
      </motion.section>

      {/* Leadership Team - Founder & CTO Profiles */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mx-6 mb-16"
      >
        <div className="text-center mb-12">
          <p className="text-gray-500 font-medium text-sm uppercase tracking-[0.3em] mb-4">Our Leadership</p>
          <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">Meet the Founders</h2>
        </div>
        <div className="shadow-xl rounded-3xl overflow-hidden bg-white border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {teamMembers.map((member, index) => {
              const isLastInRow = index % 3 === 2;
              return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className={`p-12 bg-slate-50/30 hover:bg-blue-50/50 transition-all duration-400 text-center ${!isLastInRow ? 'md:border-r border-b md:border-b-0 border-gray-100' : ''}`}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 border-4 border-white shadow-xl bg-gradient-to-br from-[#D0B77B] to-[#C4A86A]">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Ultra-modern Gen-Z young female vector profile illustration */
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Soft pastel pink background circle - youthful vibe */}
                    <circle cx="50" cy="50" r="50" fill="url(#youthfulGradient)" />
                    
                    {/* Long flowing hair with modern layers - super youthful */}
                    <path d="M20 30 Q15 50 18 75 Q22 90 30 95 L35 80 Q32 55 30 40 Q35 25 50 22 Q65 25 70 40 Q68 55 65 80 L70 95 Q78 90 82 75 Q85 50 80 30 Q70 20 50 18 Q30 20 20 30" fill="#2d1b0e" />
                    {/* Face-framing layers for modern look */}
                    <path d="M30 35 Q38 30 45 38" stroke="#2d1b0e" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M55 38 Q62 30 70 35" stroke="#2d1b0e" strokeWidth="4" fill="none" strokeLinecap="round" />
                    {/* Face-framing tendrils */}
                    <path d="M28 45 Q32 55 30 65" stroke="#2d1b0e" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M72 45 Q68 55 70 65" stroke="#2d1b0e" strokeWidth="3" fill="none" strokeLinecap="round" />
                    
                    {/* Super youthful heart-shaped face */}
                    <ellipse cx="50" cy="55" rx="20" ry="22" fill="#ffe4d6" />
                    
                    {/* HUGE anime-style youthful eyes - very expressive & young */}
                    <ellipse cx="40" cy="52" rx="8" ry="9" fill="white" />
                    <ellipse cx="60" cy="52" rx="8" ry="9" fill="white" />
                    <circle cx="41" cy="53" r="5.5" fill="#1a1a2e" />
                    <circle cx="61" cy="53" r="5.5" fill="#1a1a2e" />
                    {/* Large shiny highlights for youthful look */}
                    <circle cx="44" cy="50" r="2.5" fill="white" />
                    <circle cx="64" cy="50" r="2.5" fill="white" />
                    <circle cx="38" cy="55" r="1.5" fill="white" />
                    <circle cx="58" cy="55" r="1.5" fill="white" />
                    
                    {/* Extremely soft arched youthful eyebrows */}
                    <path d="M30 40 Q40 36 48 41" stroke="#4a5568" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                    <path d="M52 41 Q60 36 70 40" stroke="#4a5568" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                    
                    {/* Tiny cute button nose */}
                    <ellipse cx="50" cy="60" rx="2.5" ry="3" fill="#f5c9b0" />
                    
                    {/* Subtle natural youthful smile */}
                    <path d="M42 70 Q50 75 58 70" stroke="#d68080" strokeWidth="2" fill="none" strokeLinecap="round" />
                    
                    {/* Extra prominent youthful blush */}
                    <ellipse cx="28" cy="60" rx="9" ry="5" fill="#ffb3b3" opacity="0.8" />
                    <ellipse cx="72" cy="60" rx="9" ry="5" fill="#ffb3b3" opacity="0.8" />
                    
                    {/* Modern stylish casual professional top */}
                    <path d="M20 78 Q50 68 80 78 L76 100 L24 100 Z" fill="#2563eb" />
                    {/* Modern crop-style collar */}
                    <path d="M35 78 L50 74 L65 78" stroke="#93c5fd" strokeWidth="2" fill="none" />
                    <circle cx="50" cy="82" r="2" fill="#D0B77B" />
                    
                    {/* Small cute hoop earrings - trendy modern accessory */}
                    <circle cx="25" cy="54" r="3.5" fill="none" stroke="#D0B77B" strokeWidth="1.5" />
                    <circle cx="75" cy="54" r="3.5" fill="none" stroke="#D0B77B" strokeWidth="1.5" />
                    <circle cx="25" cy="54" r="1.5" fill="#D0B77B" />
                    <circle cx="75" cy="54" r="1.5" fill="#D0B77B" />
                    
                    {/* Soft youthful gradient */}
                    <defs>
                      <linearGradient id="youthfulGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFF5F5" />
                        <stop offset="40%" stopColor="#FEE2E2" />
                        <stop offset="100%" stopColor="#FECACA" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
              <p className="text-[#184491] font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </motion.div>
            );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section - Final compact modern touch */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mx-6 mb-16 text-center"
      >
        <div className="shadow-xl rounded-3xl overflow-hidden bg-gradient-to-r from-[#184491] via-[#2563eb] to-[#3b82f6] border border-white/20 p-12 md:p-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to transform your business?</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Let's discuss how we can help you achieve your digital transformation goals.
        </p>
        <Link
          href="/start"
          className="inline-flex items-center px-8 py-4 bg-white text-[#184491] text-sm font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get Started
        </Link>
        </div>
      </motion.section>
    </div>
  );
}