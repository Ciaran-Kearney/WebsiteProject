"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface WorkItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  logo: string;
}

const workData: WorkItem[] = [
  {
    title: "Project Engineer",
    company: "Automatic Identification Systems",
    period: "July 2024 - Current",
    responsibilities: [
      "Print, Inspect, Apply Projects",
      "Cobot Cell",
      "Vision Systems",
      "System Integration",
    ],
    logo: "🔧",
  },
  {
    title: "Senior Acoustic Consultant",
    company: "Allegro Acoustics",
    period: "August 2021 - February 2024",
    responsibilities: [
      "Environmental Noise Control Projects",
      "Room Acoustics Projects",
      "Occupational Noise Control Assessments",
      "Sound Insulation Assessments",
    ],
    logo: "🔊",
  },
  {
    title: "General Operative",
    company: "Wright Concrete Products",
    period: "February 2020 - September 2020",
    responsibilities: [
      "Hollowcore Production Management",
      "Compressive Strength Testing",
    ],
    logo: "🏗️",
  },
  {
    title: "Student Engineer",
    company: "Thermo King Galway",
    period: "January 2019 - September 2019",
    responsibilities: [
      "Manufacturing Process Development",
      "3D printing",
      "CAD support",
      "New Product Development Team",
    ],
    logo: "🔩",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-portfolio-grey text-sm uppercase tracking-wider"
          >
            My Professional Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-center mx-auto"
          >
            Work Experience
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {workData.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-portfolio-darkNavy border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-portfolio-navy p-6 md:w-24 flex items-center justify-center text-4xl">
                      {item.logo}
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <h4 className="text-portfolio-purple">{item.company}</h4>
                        </div>
                        <span className="text-sm text-portfolio-grey mt-2 md:mt-0">{item.period}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-sm text-portfolio-text ml-2">
                        {item.responsibilities.map((responsibility, i) => (
                          <li key={`${item.title}-resp-${i}`}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
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
