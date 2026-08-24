"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Tlog data loggers", logoUrl: "https://www.giriraj.co.in/assets/img/logo.png" },
  { name: "Cadmach", logoUrl: "https://cadmach.com/wp-content/uploads/2021/07/cadmach-logo-tagline.png" },
  { name: "Sree solutions", logoUrl: "https://zitaniumtech.com/wp-content/uploads/2025/08/sree-solutions.png" },
  { name: "Natoli", logoUrl: "https://zitaniumtech.com/wp-content/uploads/2025/08/natoli.png" },
  { name: "Ami polymers", logoUrl: "https://zitaniumtech.com/wp-content/uploads/2025/08/ami-logo.jpg" },
  { name: "Pacific", logoUrl: "https://zitaniumtech.com/wp-content/uploads/2025/08/pacific.png" },
  { name: "Skandanana", logoUrl: "https://zitaniumtech.com/wp-content/uploads/2025/08/skandana.png" },
  { name: "Shapes", logoUrl: "https://zitaniumtech.com/wp-content/uploads/2025/08/shapes.jpeg" },
];

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-navy-900 overflow-hidden pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
          >
            Our Esteemed Clients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
          >
            We are proud to partner with a diverse range of clients, helping them achieve their goals with our innovative solutions.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-white/5 rounded-lg flex justify-center items-center h-32"
            >
              <img src={client.logoUrl} alt={client.name} className="max-h-16 w-auto object-contain" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}