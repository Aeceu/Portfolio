"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Homepage() {
  return (
    <div id="home-page" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-accent font-medium text-lg">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
            Jose Acebuche
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground">
            Software Engineer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Passionate about building exceptional digital experiences with modern technologies.
          Currently crafting scalable web3 applications and full-stack solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link href="#project-page">
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-medium">
              View My Work
            </button>
          </Link>
          <Link href="#contact-page">
            <button className="px-8 py-3 border border-border rounded-lg hover:bg-accent/10 transition-all font-medium">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8"
      >
        <Link href="#about-page">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
