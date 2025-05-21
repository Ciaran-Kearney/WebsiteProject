"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const projectsData: Project[] = [
  {
    title: "Grange Backup Power Plant",
    description: "Environmental noise planning application and assessment for a 96MW backup power plant project.",
    tags: ["Environmental Noise", "Planning Application", "Assessment"],
    image: "🏭",
  },
  {
    title: "BT Ireland Data Centre",
    description: "Conducted environmental noise planning assessment for BT Ireland Data Centre in Blanchardstown.",
    tags: ["Data Centre", "Noise Assessment", "Planning"],
    image: "🖥️",
  },
  {
    title: "Friarstown Solar Farm",
    description: "Environmental noise assessment for a 50MW Solar Farm development project.",
    tags: ["Solar Farm", "Renewable Energy", "Environmental Assessment"],
    image: "☀️",
  },
  {
    title: "Merck 2.0 Manufacturing Facility",
    description: "Noise assessment for a €150 million expansion of the Merck manufacturing facility.",
    tags: ["Manufacturing", "Expansion Project", "Industrial Noise"],
    image: "🏗️",
  },
  {
    title: "Irish Life Block 3",
    description: "Room acoustics design for a major redevelopment of the Irish Life offices on Abbey Street.",
    tags: ["Room Acoustics", "Office Design", "Redevelopment"],
    image: "🏢",
  },
  {
    title: "Occupational Noise Assessments",
    description: "Conducted occupational noise control assessments for companies including Airforce H&V and Keltech.",
    tags: ["Occupational Noise", "Workplace Safety", "Assessments"],
    image: "👷",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-portfolio-grey text-sm uppercase tracking-wider"
          >
            Professional Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-center mx-auto"
          >
            Projects.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={`project-${project.title}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="project-card h-full flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4 bg-portfolio-navy p-3 rounded-md">{project.image}</div>
                    <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                  </div>
                  <p className="text-portfolio-text text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={`${project.title}-${tag}`} className="tag bg-portfolio-purple/20 text-white">{tag}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
