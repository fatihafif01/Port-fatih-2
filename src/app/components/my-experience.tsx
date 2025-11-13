"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProps } from "./types"; // <- import dari file tipe, bukan page

export default function MyExperience({ scrollToSection }: ScrollProps) {
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
    <section className="min-h-screen bg-indigo-300 flex flex-col justify-center pt-16">
      <div className="px-6 py-4 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 tracking-wide drop-shadow-sm"
        >
          MY EXPERIENCE
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 max-w-3xl mx-auto"
        >
          <div className="relative w-full h-64 flex justify-center items-center bg-gray-100 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute w-full h-full"
              >
                <Image
                  src={experiences[currentIndex].src}
                  alt="Experience Showcase"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full rounded-xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex + "-text"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="px-6 py-4 bg-white text-center flex items-center justify-center"
            >
              <p className="text-gray-700 text-lg leading-relaxed font-medium tracking-wide italic">
                {experiences[currentIndex].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
