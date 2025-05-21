"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';

// These would normally come from environment variables
// You'll need to replace with actual EmailJS service, template, and public key
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Using EmailJS to send form data
    if (form.current) {
      emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          setIsSubmitting(false);
          setSubmitted(true);
          setFormState({
            name: "",
            email: "",
            message: "",
          });

          // Reset the submitted state after 5 seconds
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          setIsSubmitting(false);
          setError("Failed to send message. Please try again later or contact me directly via email.");
        });
    }
  };

  // For development/demo purposes - simulate EmailJS
  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate EmailJS call with a delay for better UX
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        message: "",
      });

      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-portfolio-grey text-sm uppercase tracking-wider"
          >
            Get in touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading text-center mx-auto"
          >
            Contact.
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-portfolio-darkNavy border-none shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank you for your message!</h3>
                  <p className="text-portfolio-text">I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form
                  ref={form}
                  onSubmit={EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY" ? handleSubmit : handleDemoSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="text-xl">👤</div>
                        <label htmlFor="name" className="text-sm font-medium text-white">
                          Name
                        </label>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full py-3 px-4 bg-portfolio-navy text-white rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="text-xl">✉️</div>
                        <label htmlFor="email" className="text-sm font-medium text-white">
                          Email
                        </label>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full py-3 px-4 bg-portfolio-navy text-white rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="text-xl">💬</div>
                        <label htmlFor="message" className="text-sm font-medium text-white">
                          Message
                        </label>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full py-3 px-4 bg-portfolio-navy text-white rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {error && (
                    <div className="text-red-400 text-sm mt-2 p-2 bg-red-900/20 rounded-md">
                      {error}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="text-xs text-portfolio-grey hidden sm:block">
                      {EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY" ?
                        "Demo mode: Email will not be sent" :
                        "Your message will be sent via EmailJS"}
                    </div>
                    <Button
                      type="submit"
                      className="bg-portfolio-purple hover:bg-portfolio-lightPurple text-white font-medium px-6 py-3 rounded-md transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Card>

          <div className="mt-12 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:space-x-4">
              <a
                href="mailto:ciarankearney2013@hotmail.com"
                className="text-portfolio-text hover:text-white flex items-center transition-colors"
              >
                <span className="text-xl mr-2">📧</span>
                ciarankearney2013@hotmail.com
              </a>
              <a
                href="tel:+353872363416"
                className="text-portfolio-text hover:text-white flex items-center transition-colors"
              >
                <span className="text-xl mr-2">📱</span>
                +353 87 236 3416
              </a>
            </div>

            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://linkedin.com/in/ciarán-kearney" target="_blank" rel="noopener noreferrer" className="text-portfolio-text hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
