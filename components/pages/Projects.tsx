"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectFolder from "../ProjectFolder";

export default function Projectspage() {
  return (
    <div id="project-page" className="relative min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of projects showcasing my skills in full-stack development,
            from web3 applications to e-commerce platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectFolder
            name="Rehabify"
            description="A full-stack rehabilitation platform for drug and alcohol addiction support, featuring user management, progress tracking, and resource sharing."
            projectImg="/rehabify/1.png"
            projectIndex="1"
            liveUrl="https://ts-rehab.vercel.app/"
            githubUrl="https://github.com/Aeceu/ts-rehab-frontend"
            tecnologies={[
              "Next.js",
              "React",
              "TypeScript",
              "Framer Motion",
              "Tailwind CSS",
              "MongoDB",
              "Express.js",
              "Node.js"
            ]}
          />

          <ProjectFolder
            name="Bubble Sort Visualizer"
            description="An interactive algorithm visualizer that demonstrates bubble sort in real-time, helping students understand sorting algorithms through visual representation."
            projectImg="/bubble-sort/1.png"
            projectIndex="2"
            liveUrl="https://visualsortcraft.vercel.app/"
            githubUrl="https://github.com/Aeceu/Sorting-Algorithm-Visualizer"
            tecnologies={[
              "Vite",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Algorithms",
              "Data Structures"
            ]}
          />

          <ProjectFolder
            name="SociaLite"
            description="A modern social media platform where users can create, share, and interact with posts, featuring real-time updates and cloud-based media storage."
            projectImg="/socialite/image.png"
            projectIndex="3"
            githubUrl="https://github.com/Aeceu/socialite-client"
            liveUrl="https://socialite-six.vercel.app/"
            tecnologies={[
              "Vite",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Zustand",
              "Cloudinary",
              "JWT",
              "NextUI"
            ]}
          />

          <ProjectFolder
            name="KAINAKAP PWD System"
            description="A comprehensive PWD profiling system with enhanced UI/UX, secure authentication, and efficient data management for persons with disabilities."
            projectImg="/kainakap/image.png"
            projectIndex="4"
            githubUrl="https://github.com/Aeceu/NEW_KAINAKAP"
            liveUrl="https://new-kainakap.vercel.app/auth/user/login"
            tecnologies={[
              "Vite",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Redux Toolkit",
              "Shadcn UI",
              "Prisma"
            ]}
          />

          <ProjectFolder
            name="StyleLayer Co."
            description="A feature-rich e-commerce platform with shopping cart, order management, secure authentication, and seamless payment integration."
            projectImg="/stylelayer/image.png"
            projectIndex="5"
            githubUrl="https://github.com/Aeceu/stylelayer"
            liveUrl="https://stylelayer.vercel.app/"
            tecnologies={[
              "Vite",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Redux Toolkit",
              "Shadcn UI",
              "Prisma",
              "PostgreSQL"
            ]}
          />
        </div>
      </div>
    </div>
  );
}
