import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StarBackground from "@/components/StarBackground";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

export default function Home() {
  const interests = [
    "Rock Climbing",
    "Hiking",
    "Ultimate Frisbee",
    "Game Design",
    "Reading",
    "Travelling",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <StarBackground />
      <Navbar />
      <Hero />
      <AboutSection />
      <EducationSection />
      <WorkSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Interests Section */}
      <section className="py-12 bg-portfolio-darkNavy/70">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Interests</h2>
            <p className="text-portfolio-text mt-2">
              When I'm not working, you'll find me enjoying these activities
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest) => (
              <div
                key={interest}
                className="bg-portfolio-navy px-6 py-3 rounded-full text-white shadow-md hover:bg-portfolio-purple transition-colors"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-portfolio-darkNavy py-6 text-center text-portfolio-grey text-sm">
        <div className="container mx-auto">
          <p className="mt-2">
            <a href="mailto:ciarankearney2013@hotmail.com" className="hover:text-white transition-colors">
              ciarankearney2013@hotmail.com
            </a>
            <span className="mx-2">|</span>
            <a href="tel:+353872363416" className="hover:text-white transition-colors">
              +353 87 236 3416
            </a>
            <span className="mx-2">|</span>
            <a href="https://www.linkedin.com/in/ciar%C3%A1n-kearney/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
