"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Tambahkan tipe props supaya TypeScript tidak error saat build
type AboutMeSectionProps = {
  scrollToSection?: (id: string) => void;
};

export default function AboutMeSection({ scrollToSection }: AboutMeSectionProps) {
  return (
    <section className="min-h-screen bg-cyan-300 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              About Me
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              I am a person with a strong interest in technology and investment. I have a never-give-up attitude and honesty. I enjoy facing new challenges, adapt quickly to change, and always strive to contribute my best at every opportunity. Furthermore, I am open to working both in teams and independently to achieve clear and impactful goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              onClick={() => scrollToSection && scrollToSection("portfolio")}
              className="px-6 py-2.5 bg-gray-200 text-gray-900 text-sm font-medium rounded hover:bg-gray-300 transition"
            >
              My Portfolio
            </motion.button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gray-200 shadow-lg">
              <Image
                src="/gambar-portfolio-2.png"
                alt="Fatih - About Me"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
