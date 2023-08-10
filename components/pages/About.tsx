"use client";
import DelayOnReveal from "../animate/DelayReveal";
import { motion } from "framer-motion";
import Divider from "../animate/divider";
import React from "react";

export default function AboutPage() {
  return (
    <div
      id="about-page"
      className="relative min-h-screen flex flex-col  p-4 gap-8"
    >
      <div className="w-full flex items-center ">
        <DelayOnReveal
          delay={0.2}
          className="relative pr-4 flex text-8xl font-extrabold text-emerald-500 mb-4 dark:[text-shadow:5px_5px_0_rgb(255_255_255_)] [text-shadow:5px_5px_0_rgb(2_6_23_)] z-50 bg-white dark:bg-slate-950"
        >
          About
        </DelayOnReveal>
        <Divider />
      </div>

      <div className="   ">
        <h1 className="text-lg flex gap-1 items-center">
        <h1 className="font-bold text-3xl text-emerald-500  ">Hi</h1>
          I am Jose Acebuche. A Software Engineer in the Phillipines.
        </h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, praesentium tempore culpa, voluptatibus voluptate ut necessitatibus in laudantium quasi eum illo, modi unde aliquam possimus quibusdam corporis exercitationem corrupti quam.</h1>
      </div>
    </div>
  );
}
