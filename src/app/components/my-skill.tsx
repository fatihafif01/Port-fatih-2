"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Skill() {
  const skillIcons = [
    "/gambar-skill-2.png",
    "/gambar-skill-3.jpeg",
    "/gambar-skill-4.jpg",
    "/gambar-skill-8.jpg",
    "/gambar-skill-6.jpeg",
    "/gambar-skill-7.png",
    "/gambar-experience-4.png",
    "/gambar-experience-3.png",
  ];

  return (
    <section className="min-h-screen bg-indigo-300 flex flex-col justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
          MY SKILLS
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {skillIcons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
              }}
              className="w-40 h-40 bg-gray-100 border-4 border-gray-300 rounded-xl shadow-md flex items-center justify-center cursor-pointer overflow-hidden"
            >
              <Image
                src={icon}
                alt={`Skill ${index + 1}`}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
