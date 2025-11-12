"use client";

import { useState } from "react";
import { Globe } from "lucide-react";

type HomeProps = {
  scrollToSection?: (section: string) => void;
};

export default function Home(props: HomeProps) {
  const { scrollToSection } = props; // destructuring di sini, tipe sudah jelas
  const images = [
    "/gambar-portfolio-1.png",
    "/gambar-portfolio-2.png",
    "/gambar-portfolio-3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="relative w-96 h-64">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          &#60;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          &#62;
        </button>
      </div>
      <div className="mt-4 flex space-x-4">
        <Globe className="w-6 h-6" />
        <button
          onClick={() => scrollToSection && scrollToSection("about")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go to About
        </button>
      </div>
    </div>
  );
}
