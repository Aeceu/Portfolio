import React from "react";
import DelayOnReveal from "../animate/DelayReveal";
import Divider from "../animate/divider";
import Image from "next/image";
import Link from "next/link";

export default function Projectspage() {
  return (
    <div
      id="project-page"
      className="relative min-h-screen flex flex-col items-center p-4 gap-8"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center w-full h-full">
        {/* Travel Wander */}
        <div className="z-50 relative w-[600px] h-[300px] overflow-hidden flex flex-col rounded-md bg-[url(/travel-wander/2.png)] bg-cover bg-center">
          <div
            className="hover:-bottom-0 transition-all duration-300
        absolute -bottom-20
        w-full  rounded-t-md shadow-xl bg-slate-900 flex flex-col p-2  "
          >
            <h1 className="text-xs text-white/70">Full Stack Application</h1>
            <h1 className="text-red-500">Travel Wander</h1>
            <p className="mb-6  text-white/70">
              A full stack application about travelling to your desired
              destination.
            </p>
            <Link
              href="https://travel-wander.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              passHref
              className="text-xs px-2 py-1 rounded-sm bg-slate-700 w-max hover:text-red-500 text-white"
            >
              Live view
            </Link>
          </div>
        </div>

        {/* Rehabify */}
        <div className="z-50 relative w-[600px] h-[300px] overflow-hidden flex flex-col rounded-md bg-[url(/rehabify/1.png)] bg-cover bg-center">
          <div
            className="hover:-bottom-0 transition-all duration-300
        absolute -bottom-20
        w-full  rounded-t-md shadow-xl bg-slate-900 flex flex-col p-2  "
          >
            <h1 className="text-xs text-white/70">Full Stack Application</h1>
            <h1 className="text-emerald-500">Rehabify</h1>
            <p className="mb-6  text-white/70">
              A full stack application about rehabilitation of drugs and alcohol
              addicts.
            </p>
            <Link
              href="https://ts-rehab.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              passHref
              className="text-xs px-2 py-1 rounded-sm bg-slate-700 w-max hover:text-emerald-500 text-white"
            >
              Live view
            </Link>
          </div>
        </div>

        {/* Bubble Sort Visualizer */}
        <div className="z-50 relative w-[600px] h-[300px] overflow-hidden flex flex-col rounded-md bg-[url(/bubble-sort/1.png)] bg-cover bg-center">
          <div
            className="hover:-bottom-0 transition-all duration-300
        absolute -bottom-20
        w-full  rounded-t-md shadow-xl bg-slate-900 flex flex-col p-2  "
          >
            <h1 className="text-xs text-white/70">
              Data Structure Application
            </h1>
            <h1 className="text-amber-500">Bubble Sort Visualizer</h1>
            <p className="mb-6  text-white/70">
              A application about bubble sort algorithm and visualize it to see
              how it works.
            </p>
            <Link
              href="https://visualsortcraft.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              passHref
              className="text-xs px-2 py-1 rounded-sm bg-slate-700 w-max hover:text-amber-500 text-white"
            >
              Live view
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
