"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Tambahkan tipe props
type MyPortfolioProps = {
  scrollToSection?: (id: string) => void;
};

export default function MyPortfolio({ scrollToSection }: MyPortfolioProps) {
  return (
    <div className="min-h-screen bg-amber-400 flex flex-col justify-center">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* 🟢 Kiri: Gambar lingkaran + animasi hover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center order-1 md:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gray-200 shadow-lg cursor-pointer"
            >
              <Image
                src="/gambar-portfolio-1.png"
                alt="Fatih - My Portfolio"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>
          </motion.div>

          {/* 🔵 Kanan: Teks dan Tombol animasi */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-2"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              My Portfolio
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              Name: Fatih Afifurrahman
              <br />
              Place/Date of Birth: Jakarta, August 13, 2005
              <br />
              Status: Student
              <br />
              Skills: Video editing, coding.
              <br />
              Profile: Saya orang yang memiliki minat belajar tinggi terhadap teknologi dan investasi. Memiliki sikap pantang menyerah dan jujur. Saat ini fokus mengembangkan kemampuan di bidang pengembangan web dan manajemen proyek digital.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              onClick={() => scrollToSection && scrollToSection("skills")}
              className="px-6 py-2.5 bg-gray-200 text-gray-900 text-sm font-medium rounded shadow-sm hover:shadow-sm transition"
            >
              My Skill
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
