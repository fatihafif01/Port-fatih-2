"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMeSection({ scrollToSection }) {
  return (
    <div className="min-h-screen bg-cyan-400 flex flex-col justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
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
            <p className="text-gray-800 leading-relaxed mb-8">
              Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis
              tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend
              id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.
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
    </div>
  );
}