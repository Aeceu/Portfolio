"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TechLogos() {
  const logos = [
    {
      category: "Programming Languages",
      techlogos: [
        { url: "/tech/python.svg", name: "Python" },
        { url: "/tech/c++.png", name: "C++" },
        { url: "/tech/java.svg", name: "Java" },
        { url: "/tech/js.svg", name: "JavaScript" },
        { url: "/tech/ts.svg", name: "TypeScript" },
      ],
    },
    {
      category: "Web Development",
      techlogos: [
        { url: "/tech/html.svg", name: "HTML" },
        { url: "/tech/css.svg", name: "CSS" },
        { url: "/tech/react.svg", name: "React" },
        { url: "/tech/react_native.svg", name: "React Native" },
        { url: "/tech/next.svg", name: "Next.js" },
        { url: "/tech/tailwind.svg", name: "Tailwind CSS" },
        { url: "/tech/vue.svg", name: "Vue 3" },
      ],
    },
    {
      category: "Backend Technologies",
      techlogos: [
        { url: "/tech/nodejs.svg", name: "Node.js" },
        { url: "/tech/express.svg", name: "Express.js" },
        { url: "/tech/flask.svg", name: "Flask" },
        { url: "/tech/redis.svg", name: "Redis" },
      ],
    },
    {
      category: "Database Technologies",
      techlogos: [
        { url: "/tech/mysql-logo.svg", name: "MySQL" },
        { url: "/tech/mongodb.svg", name: "MongoDB" },
        { url: "/tech/prisma-2.svg", name: "Prisma" },
      ],
    },
    {
      category: "State Management",
      techlogos: [
        { url: "/tech/redux.svg", name: "Redux" },
        { url: "/tech/zustand.png", name: "Zustand" },
        { url: "/tech/pinia.svg", name: "Pinia" },
      ],
    },
    {
      category: "Tools & Others",
      techlogos: [
        { url: "/tech/next-auth.png", name: "NextAuth.js" },
        { url: "/tech/git2.svg", name: "Git" },
        { url: "/tech/firebase-1.svg", name: "Firebase" },
        { url: "/tech/docker.svg", name: "Docker" },
        { url: "/tech/arch.svg", name: "Arch Linux" },
      ],
    },
  ];

  return (
    <div className="w-full space-y-12">
      {logos.map((category, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
          <div className="flex flex-wrap gap-3">
            {category.techlogos.map((tech, j) => (
              <motion.div
                key={j}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: j * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group relative w-16 h-16 rounded-lg border border-border bg-card flex items-center justify-center hover:border-accent transition-all p-3"
              >
                <Image src={tech.url} width={40} height={40} alt={tech.name} className="object-contain" />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
