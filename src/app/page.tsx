"use client";

import Home from "./components/home";
import AboutMeSection from "./components/about-meSection";
import MyPortfolio from "./components/my-portfolio";
import MySkill from "./components/my-skill";
import MyExperience from "./components/my-experience";
import TestimonialSection from "./components/testimonialSection";
import ContacSection from "./components/contacSection";

export default function MainPage() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Home scrollToSection={scrollToSection} />
      
      <section id="about-me">
        <AboutMeSection scrollToSection={scrollToSection} />
      </section>

      <section id="skills">
        <MySkill scrollToSection={scrollToSection} />
      </section>

      <section id="portfolio">
        <MyPortfolio scrollToSection={scrollToSection} />
      </section>

      <section id="experience">
        <MyExperience scrollToSection={scrollToSection} />
      </section>

      <section id="testimonials">
        <TestimonialSection scrollToSection={scrollToSection} />
      </section>

      <section id="contacts">
        <ContacSection scrollToSection={scrollToSection} />
      </section>
    </>
  );
}