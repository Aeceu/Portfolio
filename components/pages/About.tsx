"use client";
import { motion } from "framer-motion";
import React from "react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "2", label: "Certifications" },
  { value: "500+", label: "Hours of Code" },
];

export default function AboutPage() {
  return (
    <div id="about-page" className="relative min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">Software Engineer</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Currently working as a <span className="text-foreground font-semibold">Backend Developer</span>,
                  building <span className="text-foreground font-semibold">web3 applications</span> with scalable
                  backend systems using React, Zustand for state management, and Tailwind CSS.
                </p>
                <p>
                  Previously completed a 3-month internship as a{" "}
                  <span className="text-foreground font-semibold">Frontend Developer</span> at{" "}
                  <span className="text-foreground font-semibold">Digiplus Interactive Corp.</span>, where I gained
                  hands-on experience with Vue 3, Pinia, and modern web development workflows.
                </p>
                <p>
                  I&apos;m passionate about creating efficient, scalable solutions and continuously learning new
                  technologies to stay at the forefront of web development.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card hover:border-accent transition-colors group"
              >
                <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
