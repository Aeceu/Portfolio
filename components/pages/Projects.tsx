import React from "react";
import DelayOnReveal from "../animate/DelayReveal";
import Divider from "../animate/divider";
import ProjectFolder from "../ProjectFolder";

export default function Projectspage() {
  return (
    <div
      id="project-page"
      className="relative  min-h-screen flex flex-col items-center p-4 gap-8"
    >
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
        <ProjectFolder
          name="Rehabify"
          description="A full stack application about rehabilitation of drugs and alcoholaddicts."
          projectImg="/rehabify/1.png"
          projectIndex="1"
          liveUrl="https://ts-rehab.vercel.app/"
          githubUrl="https://github.com/Aeceu/ts-rehab-frontend"
          tecnologies={[
            "nextjs",
            "react",
            "typescript",
            "javascript",
            "framer motion",
            "tailwindcss",
            "mongodb",
            "expressjs",
            "nodejs"
          ]}
        />

        <ProjectFolder
          name="Bubble Sort Visualizer"
          description="A application about bubble sort algorithm and visualize it to see how it works."
          projectImg="/bubble-sort/1.png"
          projectIndex="2"
          liveUrl="https://visualsortcraft.vercel.app/"
          githubUrl="https://github.com/Aeceu/Sorting-Algorithm-Visualizer"
          tecnologies={[
            "vitejs",
            "react",
            "typescript",
            "tailwindcss",
            "bubble sort",
            "data structure"
          ]}
        />

        <ProjectFolder
          name="SociaLite Application"
          description="A social media application where use can create and share post."
          projectImg="/socialite/image.png"
          projectIndex="3"
          githubUrl="https://github.com/Aeceu/socialite-client"
          liveUrl="https://socialite-six.vercel.app/"
          tecnologies={[
            "vitejs",
            "react",
            "javascript",
            "typescript",
            "tailwindcss",
            "zustand",
            "cloudinary",
            "jwt",
            "NextUI"
          ]}
        />

        <ProjectFolder
          name="KAINAKAP PWD profilling system"
          description="A pwd profilling application where I improved the ui, login and register page for our school project."
          projectImg="/kainakap/image.png"
          projectIndex="4"
          githubUrl="https://github.com/Aeceu/NEW_KAINAKAP"
          liveUrl="https://new-kainakap.vercel.app/auth/user/login"
          tecnologies={[
            "vitejs",
            "react",
            "javascript",
            "typescript",
            "tailwindcss",
            "redux-toolkit",
            "cloudinary",
            "jwt",
            "shadcnUI",
            "prisma"
          ]}
        />

        <ProjectFolder
          name="StyleLayer Co."
          description="Full stack e-commerce appliation where user can order and add to cart an item."
          projectImg="/stylelayer/image.png"
          projectIndex="5"
          githubUrl="https://github.com/Aeceu/stylelayer"
          liveUrl="https://stylelayer.vercel.app/"
          tecnologies={[
            "vitejs",
            "react",
            "typescript",
            "tailwindcss",
            "redux-toolkit",
            "cloudinary",
            "jwt",
            "shadcnUI",
            "prisma",
            "postgreSQL"
          ]}
        />
      </div>
    </div>
  );
}
