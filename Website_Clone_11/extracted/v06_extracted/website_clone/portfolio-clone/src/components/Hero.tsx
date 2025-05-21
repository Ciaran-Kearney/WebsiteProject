"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const professionRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const professions = [
      "Mechanical Engineer",
      "Engineer",
      "Automation Engineer",
      "Senior Acoustic Consultant",
      "Project Engineer",
      "Systems Integrator",
      "solution-oriented",
      "fast learner",
      "highly adaptable",
      "proactive problem solver",
    ];

    let currentProfessionIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 1500;
    let timeoutId: NodeJS.Timeout;

    const typeEffect = () => {
      const currentProfession = professions[currentProfessionIndex];

      if (isDeleting) {
        // Deleting characters
        if (professionRef.current) {
          professionRef.current.textContent = currentProfession.substring(
            0,
            currentCharIndex - 1
          );
          currentCharIndex--;
        }

        if (currentCharIndex === 0) {
          isDeleting = false;
          currentProfessionIndex =
            (currentProfessionIndex + 1) % professions.length;
          timeoutId = setTimeout(typeEffect, typingSpeed);
        } else {
          timeoutId = setTimeout(typeEffect, deletingSpeed);
        }
      } else {
        // Typing characters
        if (professionRef.current) {
          professionRef.current.textContent = currentProfession.substring(
            0,
            currentCharIndex + 1
          );
          currentCharIndex++;
        }

        if (currentCharIndex === currentProfession.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeEffect, pauseDuration);
        } else {
          timeoutId = setTimeout(typeEffect, typingSpeed);
        }
      }
    };

    timeoutId = setTimeout(typeEffect, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="min-h-screen pt-28 pb-20 flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                Hi, I'm <span className="text-portfolio-purple">Ciarán</span>
              </h1>
              <p className="text-xl text-portfolio-grey mb-6">
                I'm a{" "}
                <span
                  className="text-portfolio-purple typing-text"
                  id="profession"
                  ref={professionRef}
                ></span>
                <span className="cursor" ref={cursorRef}>
                  |
                </span>
              </p>
            </div>


          </div>

          <div className="flex-shrink-0">
            <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-portfolio-purple">
              <div className="w-full h-full bg-portfolio-grey/20 flex items-center justify-center text-portfolio-purple">
                <span className="text-sm">Profile Image</span>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <a
                href="#contact"
                className="bg-portfolio-purple text-white px-4 py-2 rounded-md text-sm hover:bg-portfolio-lightPurple transition-colors"
              >
                Contact me
              </a>
              <a
                href="#about"
                className="bg-portfolio-darkNavy text-portfolio-text px-4 py-2 rounded-md text-sm hover:bg-portfolio-grey/40 transition-colors"
              >
                About
              </a>
              <a
                href="https://www.linkedin.com/in/ciar%C3%A1n-kearney/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5] text-white px-4 py-2 rounded-md text-sm hover:bg-[#0369a1] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-portfolio-navy/80 to-transparent z-0" />
    </section>
  );
}
