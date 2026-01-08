"use client";
import { Github, ExternalLink } from "lucide-react";
import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  tecnologies: string[];
  projectImg: string;
  name: string;
  description: string;
  projectIndex: string;
  liveUrl: string;
  githubUrl: string;
};

const ProjectFolder: FC<Props> = ({
  githubUrl,
  liveUrl,
  description,
  name,
  projectImg,
  tecnologies,
  projectIndex,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-accent transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={projectImg}
          width={600}
          height={400}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
          #{projectIndex}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tecnologies.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              {tech}
            </span>
          ))}
          {tecnologies.length > 5 && (
            <span className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
              +{tecnologies.length - 5} more
            </span>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent/10 hover:border-accent transition-colors text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectFolder;
