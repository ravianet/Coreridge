"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, ArrowRight, Check } from "lucide-react";

const companyStats = [
  { number: "40+", label: "Years Combined Expertise" },
  { number: "99.9%", label: "Uptime SLA" },
  { number: "2023", label: "Founded" },
  { number: "24/7", label: "Support Available" },
];

const milestones = [
  { year: "2023", title: "CoreRidge Founded", description: "Launched with a vision to transform enterprise technology, built on decades of industry leadership" },
  { year: "Today", title: "Serving Our Clients", description: "Delivering exceptional IT solutions and support to our existing clients with proven expertise" },
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
    image: "/team/ravi.jpg",
    profileUrl: "https://ravianet.github.io/resume/"
  },
  {
    name: "Nagadeepthi Valluru",
    role: "Co-Founder & CTO",
    description: "20-year aviation technology leader with extensive aviation experience, excelling as a Software Developer, DBA, Full-Stack Engineer, and Data Analyst. Led enterprise architecture, cloud modernization, and big data analytics initiatives for global airline networks, architecting mission-critical systems that power commercial aviation operations worldwide.",
    image: "/team/deepthi.jpg",
    profileUrl: "https://nagadeepthi-git.github.io/deepthi/"
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
          <span className="text-brand-navy">Building technology</span>
          <br />
          <span className="bg-gradient-to-r from-brand-navy to-brand-navy-light bg-clip-text text-transparent">that moves businesses forward</span>
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
          <p className="text-gray-500 font-medium text-sm uppercase tracking-[0.3em] mb-4">Our Journey</p>
          <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">Built on Decades of Expertise</h2>
        </div>
        <div className="shadow-xl rounded-3xl overflow-hidden bg-white border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {milestones.map((milestone, index) => {
              const isLastInRow = index % 2 === 1;
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
              return member.profileUrl ? (
                <motion.a
                  href={member.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={member.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                  className={`group relative p-12 bg-slate-50/30 hover:bg-blue-50/50 transition-all duration-400 text-center ${!isLastInRow ? 'md:border-r border-b md:border-b-0 border-gray-100' : ''} hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
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
                        <path d="M20 78 Q50 68 80 78 L76 100 L24 100 Z" fill="#1C376D" />
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
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-blue-700 transition-colors">{member.name}</h3>
                  <p className="text-brand-navy font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
                    View full profile
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </motion.a>
              ) : (
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
                        <path d="M20 78 Q50 68 80 78 L76 100 L24 100 Z" fill="#1C376D" />
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
                  <p className="text-brand-navy font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section - Matches home page design */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mx-6 pb-10 sm:px-8 sm:pb-12 lg:px-10 lg:pb-14"
      >
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-blue-200/80 bg-gradient-to-br from-blue-100/75 via-white/95 to-indigo-100/70 px-6 py-7 shadow-[0_18px_48px_-32px_rgba(15,42,86,0.42)] backdrop-blur-xl sm:px-8 sm:py-9 lg:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-36 -z-10 h-80 w-80 rounded-full bg-blue-200/35 blur-3xl"
          />
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-orange" />
                Have a project in mind?
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl">
                Let’s make your next move a confident one.
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
                Tell us where you want to go. We'll help you explore a practical way to get there.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-navy px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-brand-navy-dark hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Start a conversation
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-white hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Browse services
              </Link>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2 border-t border-blue-200/70 pt-4 text-xs font-medium text-slate-600 sm:text-sm">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <Check aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
            No pressure—just a thoughtful first conversation.
          </div>
        </div>
      </motion.section>
    </div>
  );
}