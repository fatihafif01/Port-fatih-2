"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      src: "/testimoials-1.jpeg",
      text: "Fatih is very responsible for his duties.",
      name: "Fikri",
    },
    {
      src: "/testimonials-2.jpeg",
      text: "He is very hard working and dedicated to his duties.",
      name: "Evan Gerard",
    },
    {
      src: "/testimonials-3.jpeg",
      text: "I recommend fatih if you want to make a front end",
      name: "fandi siregar",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-sky-300 flex flex-col justify-between">
      {/* Navbar tanpa background abu */}
      <nav className="h-16 border-b border-transparent"></nav>

      <main className="px-6 py-20 flex-1">
        <section className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
            TESTIMONIALS
          </h2>

          {/* Card Container */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="border border-gray-300 rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col items-center gap-4 bg-white"
              >
                {/* Foto Bulat Responsif */}
                <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                  <Image
                    src={testimonials[currentIndex].src}
                    alt={`Testimonial ${currentIndex + 1}`}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Teks Testimonial */}
                <p className="text-gray-700 text-lg italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <span className="font-semibold text-gray-900">
                  - {testimonials[currentIndex].name}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}
