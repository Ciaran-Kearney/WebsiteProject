"use client";

import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  achievements: string[];
  year: number;
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (Mechanical)",
    institution: "NUI Galway",
    location: "Galway, Ireland",
    period: "2018 - 2022",
    achievements: ["Second Class Honours"],
    year: 2018,
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-portfolio-grey text-sm uppercase tracking-wider"
          >
            What I have Studied
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-center mx-auto"
          >
            Education.
          </motion.h2>
        </div>

        <div className="relative max-w-3xl mx-auto pt-10">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-portfolio-grey/30"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-16 flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-portfolio-purple flex items-center justify-center text-white text-xs font-bold">
                {item.year}
              </div>

              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                <h4 className="text-portfolio-purple mb-2">{item.institution}, {item.location}</h4>
                <p className="text-sm text-portfolio-grey mb-2">{item.period}</p>
                <ul className={`space-y-1 text-sm ${index % 2 === 0 ? "list-none" : "list-disc ml-4"}`}>
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
