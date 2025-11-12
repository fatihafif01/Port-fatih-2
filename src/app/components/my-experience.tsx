"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MyExperience({ scrollToSection }) {
  const experiences = [
    {
      src: "/Gambar-experience-1.png",
      text: "I once created a restaurant web UI using HTML, CSS, and JavaScript.",
    },
    {
      src: "/Gambar-experience-4.png",
      text: "I have also tried and made a project with the Go language.",
    },
    {
      src: "/Gambar-experience-3.png",
      text: "I have also tried and created a project using PHP language.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [experiences.length]);

  return (
    <div className="min-h-screen bg-indigo-300 flex flex-col justify-center pt-16">
      {/* 🔹 Konten Utama */}
      <main className="px-6 py-4">
        <section className="max-w-5xl mx-auto text-center">
          {/* Judul */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent tracking-wide drop-shadow-sm"
          >
            MY EXPERIENCE
          </motion.h2>

          {/* 🔹 Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="border border-gray-200 bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 max-w-3xl mx-auto"
          >
            {/* 🔹 Gambar Otomatis dengan Animasi */}
            <div className="relative w-full h-64 flex justify-center items-center bg-gray-100 rounded-b-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute"
                >
                  <Image
                    src={experiences[currentIndex].src}
                    alt="Experience Showcase"
                    width={800}
                    height={400}
                    className="rounded-xl object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 🔹 Deskripsi Dinamis Modern */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex + "-text"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 text-center rounded-b-2xl flex items-center justify-center"
              >
                <p className="text-gray-700 text-lg leading-relaxed font-medium tracking-wide italic">
                  {experiences[currentIndex].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
