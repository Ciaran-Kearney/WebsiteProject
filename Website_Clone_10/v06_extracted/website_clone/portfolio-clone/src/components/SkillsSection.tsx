"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: string;
}

interface Certificate {
  name: string;
  icon: string;
}

const skillsData: SkillCategory[] = [
  {
    title: "General Software",
    skills: [
      { name: "Microsoft Office", icon: "📊" },
      { name: "Unity", icon: "🎮" },
      { name: "Blender", icon: "🎨" },
    ],
  },
  {
    title: "Automation Software",
    skills: [
      { name: "Sysmac Studio", icon: "🔧" },
      { name: "TIA Portal", icon: "🏭" },
      { name: "Cognex", icon: "👁️" },
    ],
  },
  {
    title: "CAD Software",
    skills: [
      { name: "Autodesk", icon: "📐" },
      { name: "Creo Parametric", icon: "✏️" },
      { name: "Solidworks", icon: "🔍" },
    ],
  },
  {
    title: "Acoustic Software",
    skills: [
      { name: "SoundPlan", icon: "🔊" },
      { name: "Odeon Room Acoustics", icon: "🎵" },
      { name: "Noise Tools", icon: "📢" },
      { name: "Insul", icon: "🧱" },
      { name: "Noise at Work", icon: "👷" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C#", icon: "💻" },
      { name: "LATEX", icon: "📝" },
      { name: "Matlab", icon: "📊" },
      { name: "Excel VBA", icon: "📈" },
    ],
  },
];

const certificatesData: Certificate[] = [
  { name: "Fás Safe Pass", icon: "🔐" },
  { name: "Engineers Ireland Technical Report Writing", icon: "📋" },
  { name: "Full Irish Driver's Licence", icon: "🚗" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-portfolio-grey text-sm uppercase tracking-wider"
          >
            Technical Proficiencies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-center mx-auto"
          >
            Skills.
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {skillsData.map((category, categoryIndex) => (
            <div key={category.title} className="mb-16">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl font-mono text-portfolio-purple mb-6 text-center"
              >
                &lt;{category.title}&gt;
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={`${category.title}-${skill.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.05 + categoryIndex * 0.1,
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="skill-icon flex items-center justify-center mb-2 text-2xl">
                      {skill.icon}
                    </div>
                    <span className="text-xs text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl font-mono text-portfolio-purple mt-6 text-center"
              >
                &lt;/{category.title}&gt;
              </motion.h3>
            </div>
          ))}

          {/* Certificates Section */}
          <div className="mt-24">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-portfolio-grey text-sm uppercase tracking-wider block text-center"
            >
              Professional Qualifications
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-bold text-white mb-8 text-center"
            >
              Certificates.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {certificatesData.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-portfolio-darkNavy rounded-lg p-4 flex items-center shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-portfolio-navy flex items-center justify-center text-2xl mr-4">
                    {cert.icon}
                  </div>
                  <span className="text-portfolio-text">{cert.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
