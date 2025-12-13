import DelayOnReveal from "../animate/DelayReveal";
import Divider from "../animate/divider";
import React from "react";

export default function AboutPage() {
  return (
    <div id="about-page" className="relative min-h-screen  flex flex-col lg:items-start items-center p-4 ">
      <div className="w-full flex items-center ">
        <DelayOnReveal
          delay={0.2}
          className="relative pr-4 flex text-5xl md:text-7xl lg:text-8xl font-extrabold text-emerald-500 mb-4 z-50
          bg-white dark:bg-slate-950
          dark:[text-shadow:3px_3px_0_rgb(255_255_255_)] [text-shadow:3px_3px_0_rgb(2_6_23_)]
          lg:dark:[text-shadow:5px_5px_0_rgb(255_255_255_)] lg:[text-shadow:5px_5px_0_rgb(2_6_23_)]"
        >
          About
        </DelayOnReveal>
        <Divider />
      </div>

      <div className="w-full flex gap-16 xl:flex-row flex-col-reverse items-center justify-between px-2 md:px-8">
        <div className="w-full xl:w-3/4  text-justify flex flex-col ">
          {/* CURRENT ROLE */}
          <DelayOnReveal
            className="relative flex text-3xl lg:text-4xl font-extrabold text-emerald-500 z-50
              bg-white dark:bg-slate-950 lg:tracking-widest
              lg:dark:[text-shadow:4px_4px_0_rgb(255_255_255_)] lg:[text-shadow:4px_4px_0_rgb(2_6_23_)]
              dark:[text-shadow:2px_2px_0_rgb(255_255_255_)] [text-shadow:2px_2px_0_rgb(2_6_23_)]"
          >
            Junior Backend Developer
          </DelayOnReveal>

          <DelayOnReveal className="text-base leading-relaxed my-2">
            Currently working as a <strong>Junior Backend Developer</strong>. Building
            <strong> web3 applications</strong> with scalable backend systems using <strong>React</strong>,{" "}
            <strong>Zustand</strong> for state management, and <strong>Tailwind CSS</strong>.
          </DelayOnReveal>

          <DelayOnReveal className="text-base leading-relaxed mb-4">
            Previously completed a 3-month internship as a <strong>Frontend Developer</strong> at{" "}
            <strong>Digiplus Interactive Corp.</strong>, where I gained hands-on experience with <strong>Vue 3</strong>,
            <strong>Pinia</strong>, and modern web development workflows.
          </DelayOnReveal>

          <div className="w-full  flex flex-wrap items-center justify-center xl:items-start xl:justify-start gap-12 px-8">
            <DelayOnReveal>
              <div className="w-[250px] sm:w-[350px] h-[200px] dark:bg-white dark:text-slate-950 border-2 border-slate-950 shadow-green-md flex flex-col p-4">
                <h1 className="font-extrabold text-4xl  [text-shadow:3px_3px_0_rgb(2_6_23_)] text-emerald-500 ">
                  3+ years
                </h1>
                <p className="mt-2 border-t-2  border-slate-950 ">
                  Accumulated experience in programming, developing various applications, and honing coding skills.
                </p>
              </div>
            </DelayOnReveal>
            <DelayOnReveal>
              <div className="w-[250px] sm:w-[350px] h-[200px] dark:bg-white dark:text-slate-950 border-2 border-slate-950 shadow-green-md flex flex-col p-4">
                <h1 className="font-extrabold text-4xl  [text-shadow:3px_3px_0_rgb(2_6_23_)] text-emerald-500">
                  10+ projects
                </h1>
                <p className="mt-2 border-t-2  border-slate-950 ">
                  Successfully completed over ten projects, demonstrating a wide range of technical and problem-solving
                  abilities.
                </p>
              </div>
            </DelayOnReveal>
            <DelayOnReveal>
              <div className="w-[250px] sm:w-[350px] h-[200px] dark:bg-white dark:text-slate-950 border-2 border-slate-950 shadow-green-md flex flex-col p-4">
                <h1 className="font-extrabold text-4xl  [text-shadow:3px_3px_0_rgb(2_6_23_)] text-emerald-500">
                  2 certificates
                </h1>
                <p className="mt-2 border-t-2  border-slate-950 ">
                  Earned two certificates recognizing exceptional programming skills and knowledge in the field.
                </p>
              </div>
            </DelayOnReveal>
            <DelayOnReveal>
              <div className="w-[250px] sm:w-[350px] h-[200px] dark:bg-white dark:text-slate-950 border-2 border-slate-950 shadow-green-md flex flex-col p-4">
                <h1 className="font-extrabold text-4xl  [text-shadow:3px_3px_0_rgb(2_6_23_)] text-emerald-500">
                  500+ hours
                </h1>
                <p className="mt-2 border-t-2  border-slate-950 ">
                  Consistently improving and expanding my expertise across different programming languages and
                  frameworks.
                </p>
              </div>
            </DelayOnReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
