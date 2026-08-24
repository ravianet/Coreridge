"use client";

import { motion } from "framer-motion";

const clientLogos = [
  { name: "Tlog", src: "/clients/tlog.png" },
  { name: "Natoli", src: "/clients/natoli.png" },
  { name: "Ami Polymers", src: "/logos/ami-logo.jpg" },
  { name: "Pacific", src: "/clients/pacific.png" },
  { name: "Skandanana", src: "/clients/skandana.png" },
  { name: "Sree Solutions", src: "/clients/sree-solutions.png" },
  { name: "Shapes Style Lounge", src: "/clients/shapes.png" },
  { name: "Cadmach", src: "/clients/cadmach-logo.png" }
];

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-12">
      <div className="absolute inset-0 bg-navy-900 -z-10" />
      
      {/* Animated gradient blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-500/20 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-violet-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-pink-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000" />

      <div className="relative z-10 text-center px-4 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 text-lg font-semibold text-cyan-400 tracking-wider"
        >
          Your End-to-End Digital Transformation Partner
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Innovate, Transform, Succeed
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Your Vision, Engineered.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-md md:max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
        >
          We are a digital transformation consultancy and software development company that provides cutting-edge engineering solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <a 
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full font-semibold text-lg text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:scale-105"
          >
            Get a Free Consultation
          </a>
          <a 
            href="/services"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 rounded-full font-semibold text-lg text-white border border-white/20 hover:bg-white/20 transition-all"
          >
            Our Services
          </a>
        </motion.div>

          <div className="mt-16 w-full">
            <p className="text-gray-400 text-sm tracking-widest uppercase text-center mb-8">Trusted by Industry Leaders</p>
            <div
              className="relative w-full overflow-hidden"
              style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
            >
              <div className="flex w-max animate-scroll group-hover:animation-pause">
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <div key={index} className="flex-shrink-0 w-36 md:w-48 h-24 flex items-center justify-center mx-2 md:mx-4">
                    <img 
                      src={client.src} 
                      alt={client.name}
                      className="max-h-12 md:max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}