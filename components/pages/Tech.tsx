"use client";
import React from "react";
import { motion } from "framer-motion";
import TechLogos from "../TechLogos";

export default function Techpage() {
  return (
    <div id="tech-page" className="relative min-h-screen py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Over the past <span className="text-accent font-semibold">three years</span>, I have immersed
            myself in the dynamic world of coding, mastering modern technologies and frameworks. I&apos;m
            committed to continuous learning and producing high-quality, maintainable code.
          </p>
        </motion.div>

        <TechLogos />
      </div>
    </div>
  );
}
