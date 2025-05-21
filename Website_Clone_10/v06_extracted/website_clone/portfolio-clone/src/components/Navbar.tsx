"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { text: "About", href: "#about" },
  { text: "Education", href: "#education" },
  { text: "Work", href: "#work" },
  { text: "Skills", href: "#skills" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-portfolio-navy/95 backdrop-blur-sm py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link
          href="/"
          className="text-white font-bold text-xl flex items-center space-x-2"
        >
          <span className="text-portfolio-purple">&lt;</span>
          <span className="font-mono">Ciarán Kearney</span>
          <span className="text-portfolio-purple">&gt;</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white hover:text-portfolio-purple transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-portfolio-navy/95 backdrop-blur-md py-4 px-4 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white hover:text-portfolio-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
