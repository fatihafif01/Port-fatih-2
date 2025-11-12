"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function Home({ scrollToSection }) {
  const images = [
    "/gambar-portfolio-1.png",
    "/gambar-portfolio-2.png",
    "/gambar-portfolio-3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="home" className="min-h-screen bg-indigo-300">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-300 shadow-md fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo + Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-3xl font-bold text-gray-800 cursor-pointer"
            onClick={() => scrollToSection && scrollToSection("home")}
          >
            <Globe className="w-8 h-8 text-indigo-600" />
            <span>MY WEBSITE</span>
          </motion.div>

          {/* Navbar Links */}
          <div className="flex gap-8 text-xl">
            {[
              { name: "About me", id: "about-me" },
              { name: "testimonials", id: "testimonials" },
              { name: "Experience", id: "experience" },
              { name: "Contacts", id: "contacts" }
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection && scrollToSection(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.15, color: "#000" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className="text-gray-700 hover:text-gray-900 cursor-pointer bg-transparent border-none"
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-36 pb-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-lg font-semibold text-gray-600 uppercase tracking-wider mb-3">
              FULL STACK WEB DEVELOPER
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Hello, My name
              <br />
              is Fatih
            </h1>
            <p className="text-gray-700 leading-relaxed mb-7 max-w-md">
              I am a student at Telkom University Jakarta majoring in
              Information Technology who is always enthusiastic about learning
              all things related to technology.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                onClick={() => scrollToSection && scrollToSection("skills")}
                className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition"
              >
                My Skill
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                onClick={() => scrollToSection && scrollToSection("portfolio")}
                className="px-6 py-2.5 border border-gray-900 text-gray-900 text-sm font-medium rounded hover:bg-gray-50 transition"
              >
                My Portfolio
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gray-200 rounded-full overflow-hidden aspect-square max-w-sm mx-auto shadow-lg cursor-pointer border border-gray-400/50">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Portfolio Image ${currentIndex + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}