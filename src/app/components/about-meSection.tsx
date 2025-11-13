import Image from 'next/image';
import { Mail, Github, Linkedin } from 'lucide-react';
import { ScrollProps } from "../page";

// ✅ Tambahkan prop scrollToSection
export default function AboutMe({ scrollToSection }: ScrollProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">

      {/* About Me Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex-1">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              About me
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. 
              Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.
            </p>
            {/* ✅ Tambahkan onClick handler */}
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="px-6 py-2.5 bg-gray-200 text-gray-900 text-sm font-medium rounded hover:bg-gray-300 transition"
            >
              My Portfolio
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center">
            <div className="relative w-96 h-96 rounded-full overflow-hidden bg-gray-200">
              <Image 
                src="/gambar-portfolio-2.png" 
                alt="Fatih - About Me"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 py-6 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 My Website. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="mailto:fatih@example.com" 
              className="text-gray-700 hover:text-blue-600 transition"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a 
              href="https://github.com/username" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-blue-600 transition"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://linkedin.com/in/username" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-blue-600 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}