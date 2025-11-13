"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProps } from "../page"; 

export default function TestimonialSection({ scrollToSection }: ScrollProps) {
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
      text: "I recommend Fatih if you want to make a front end.",
      name: "Fandi Siregar",
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
    <section className="min-h-screen bg-sky-300 flex flex-col justify-between px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
          TESTIMONIALS
        </h2>

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
              <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                <Image
                  src={testimonials[currentIndex].src}
                  alt={`Testimonial ${currentIndex + 1}`}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>

              <p className="text-gray-700 text-lg italic">
                "{testimonials[currentIndex].text}"
              </p>
              <span className="font-semibold text-gray-900">
                - {testimonials[currentIndex].name}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => scrollToSection("contacts")}
          className="mt-8 px-6 py-2 bg-gray-200 rounded text-gray-900 hover:bg-gray-300 transition"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}