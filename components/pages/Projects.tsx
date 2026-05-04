import React from "react";
import DelayOnReveal from "../animate/DelayReveal";
import Divider from "../animate/divider";
import ProjectFolder from "../ProjectFolder";
import { projects } from "@/lib/projects";

export default function Projectspage() {
  return (
    <div id="project-page" className="relative  min-h-screen flex flex-col items-center p-4 gap-8">
      <div className="w-full flex items-center justify-end">
        <DelayOnReveal
          delay={0.2}
          className="relative pr-4 flex text-5xl
          md:text-7xl lg:text-8xl font-extrabold text-emerald-500 mb-4 z-50 bg-white dark:bg-slate-950
          dark:[text-shadow:3px_3px_0_rgb(255_255_255_)]
          [text-shadow:3px_3px_0_rgb(2_6_23_)]
          lg:dark:[text-shadow:5px_5px_0_rgb(255_255_255_)]
          lg:[text-shadow:5px_5px_0_rgb(2_6_23_)]"
        >
          Projects
        </DelayOnReveal>
        <Divider />
      </div>

      <div className="flex flex-wrap items-center justify-center  gap-16 ">
        {projects.map((project, index) => (
          <ProjectFolder key={project.name} projectIndex={index + 1} {...project} />
        ))}
      </div>
    </div>
  );
}
