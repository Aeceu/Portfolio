"use client";
import React from "react";
import DelayOnReveal from "../animate/DelayReveal";
import TechLogos from "../TechLogos";
import Divider from "../animate/divider";

export default function Techpage() {
  return (
    <div
      id="tech-page"
      className="relative min-h-screen flex flex-col items-center p-4 gap-8"
    >
      <div className="w-full flex items-center justify-center">
        <DelayOnReveal
          delay={0.2}
          className="relative pr-4 flex text-5xl md:text-7xl lg:text-8xl font-extrabold text-emerald-500 mb-4 z-50 bg-white dark:bg-slate-950
          dark:[text-shadow:3px_3px_0_rgb(255_255_255_)] 
          [text-shadow:3px_3px_0_rgb(2_6_23_)] 
          lg:dark:[text-shadow:5px_5px_0_rgb(255_255_255_)] 
          lg:[text-shadow:5px_5px_0_rgb(2_6_23_)] "
        >
          Technologies
        </DelayOnReveal>
        <Divider />
      </div>

      <div className=" flex flex-col lg:flex-row justify-between items-center lg:px-8 gap-8">
        <TechLogos />
        <div className="lg:w-[70%]">
          <div>
            <div className="flex items-center">
              <h1 className="relative z-50 pr-6 bg-white dark:bg-slate-950 text-emerald-500 font-bold">
                Technologies & Experience
              </h1>
              <span className="w-[95%] border-[1px] rounded-full border-zinc-500/70 absolute " />
            </div>
            <DelayOnReveal>
              Over the past <b className="text-emerald-500">three years</b>, I
              have immersed myself in the dynamic world of coding, dedicating my
              efforts to mastering and embracing the latest technologies
              prevalent in the market. Throughout this journey, I have
              consistently honed and elevated my coding skills, striving for
              continuous improvement to produce code of the highest quality. My
              commitment to staying abreast of cutting-edge developments
              reflects my passion for staying at the forefront of technological
              advancements and delivering optimal solutions.
            </DelayOnReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
