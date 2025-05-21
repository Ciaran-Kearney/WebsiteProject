"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-portfolio-grey text-sm uppercase tracking-wider"
          >
            Introduction
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-center mx-auto"
          >
            Overview.
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3"
          >
            <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-portfolio-purple mx-auto">
              <div className="w-full h-full bg-portfolio-grey/20 flex items-center justify-center text-portfolio-purple">
                <span className="text-sm">Profile Image</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-2/3"
          >
            <Card className="bg-portfolio-darkNavy border-none shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Key Attributes</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-portfolio-purple rounded-full flex items-center justify-center text-white font-bold">
                      •
                    </div>
                    <p className="text-portfolio-text">
                      I am a passionate and driven engineering consultant known for my strong technical skills and excellent communication
                      abilities.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-portfolio-purple rounded-full flex items-center justify-center text-white font-bold">
                      •
                    </div>
                    <p className="text-portfolio-text">
                      I thrive in collaborative settings and consistently deliver innovative solutions.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-portfolio-purple rounded-full flex items-center justify-center text-white font-bold">
                      •
                    </div>
                    <p className="text-portfolio-text">
                      Committed to continuous learning, I am always eager to enhance my expertise and contribute to impactful projects.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-portfolio-purple rounded-full flex items-center justify-center text-white font-bold">
                      •
                    </div>
                    <p className="text-portfolio-text">
                      Bachelor of Engineering (Mechanical) with Second Class Honours from NUI Galway.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-portfolio-purple rounded-full flex items-center justify-center text-white font-bold">
                      •
                    </div>
                    <p className="text-portfolio-text">
                      Experience in project engineering, acoustic consulting, and manufacturing roles with a focus on technical excellence.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
