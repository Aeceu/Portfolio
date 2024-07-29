import Image from "next/image";
import DelayOnReveal from "../animate/DelayReveal";
import Divider from "../animate/divider";
import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div
      id="about-page"
      className="relative min-h-screen  flex flex-col lg:items-start items-center p-4 ">
      <div className="w-full flex items-center ">
        <DelayOnReveal
          delay={0.2}
          className="relative pr-4 flex text-5xl md:text-7xl lg:text-8xl font-extrabold text-emerald-500 mb-4 z-50 
          bg-white dark:bg-slate-950
          dark:[text-shadow:3px_3px_0_rgb(255_255_255_)] [text-shadow:3px_3px_0_rgb(2_6_23_)]
          lg:dark:[text-shadow:5px_5px_0_rgb(255_255_255_)] lg:[text-shadow:5px_5px_0_rgb(2_6_23_)]">
          About
        </DelayOnReveal>
        <Divider />
      </div>

      <div className="w-full flex gap-16 xl:flex-row flex-col-reverse items-center justify-between px-2 md:px-8">
        <div className="w-full xl:w-3/4  text-justify flex flex-col gap-4 ">
          <DelayOnReveal
            className=" relative  flex text-3xl  lg:text-4xl font-extrabold text-emerald-500 mb-2 z-50 
          bg-white dark:bg-slate-950 lg:tracking-widest
          lg:dark:[text-shadow:4px_4px_0_rgb(255_255_255_)] lg:[text-shadow:4px_4px_0_rgb(2_6_23_)]
          dark:[text-shadow:2px_2px_0_rgb(255_255_255_)] [text-shadow:2px_2px_0_rgb(2_6_23_)]">
            My Development Journey
          </DelayOnReveal>
          <DelayOnReveal className="text-lg w-full">
            My journey in the realm of technology has been a vibrant exploration, from mastering
            coding languages and algorithms to my current passion for crafting sophisticated
            solutions that address real-world challenges.
          </DelayOnReveal>

          <div className="w-full  flex flex-wrap items-center justify-center xl:items-start xl:justify-start gap-12">
            <DelayOnReveal>
              <div className="w-[350px] h-[200px] dark:bg-white dark:text-slate-950 border-2 border-slate-950 shadow-green-md flex flex-col p-4">
                <h1 className="font-extrabold text-4xl  [text-shadow:3px_3px_0_rgb(2_6_23_)] text-emerald-500 ">
                  3+ years
                </h1>
                <p className="mt-2 border-t-2  border-slate-950 ">
                  Accumulated experience in programming, developing various applications, and honing
                  coding skills.
                </p>
              </div>
            </DelayOnReveal>
            <DelayOnReveal>
              <div className="w-[350px] h-[200px] dark:bg-white dark:text-slate-950 border-2 border-slate-950 shadow-green-md flex flex-col p-4">
                <h1 className="font-extrabold text-4xl  [text-shadow:3px_3px_0_rgb(2_6_23_)] text-emerald-500">
                  10+ projects
                </h1>
                <p className="mt-2 border-t-2  border-slate-950 ">
                  Successfully completed over ten projects, demonstrating a wide range of technical
                  and problem-solving abilities.
                </p>
              </div>
            </DelayOnReveal>
            <DelayOnReveal>
              <div className="w-[350px] h-[200px] dark:bg-white dark:text-slate-950 border-2 border-slate-950 shadow-green-md flex flex-col p-4">
                <h1 className="font-extrabold text-4xl  [text-shadow:3px_3px_0_rgb(2_6_23_)] text-emerald-500">
                  2 certificates
                </h1>
                <p className="mt-2 border-t-2  border-slate-950 ">
                  Earned two certificates recognizing exceptional programming skills and knowledge
                  in the field.
                </p>
              </div>
            </DelayOnReveal>
            <DelayOnReveal>
              <div className="w-[350px] h-[200px] dark:bg-white dark:text-slate-950 border-2 border-slate-950 shadow-green-md flex flex-col p-4">
                <h1 className="font-extrabold text-4xl  [text-shadow:3px_3px_0_rgb(2_6_23_)] text-emerald-500">
                  500+ hours
                </h1>
                <p className="mt-2 border-t-2  border-slate-950 ">
                  Consistently improving and expanding my expertise across different programming
                  languages and frameworks.
                </p>
              </div>
            </DelayOnReveal>
          </div>
        </div>
        <div className="w-full  xl:w-1/4 text-justify flex items-center justify-center">
          <div className="shrink-0 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] rounded-full border-2 border-slate-950 shadow-green-md overflow-hidden animate-moving">
            <Image
              src={"/1x1.jpg"}
              alt="img"
              width={300}
              height={300}
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
      {/* <div className="w-full flex flex-col gap-2 p-2 md:p-8">
        <h1 className="flex items-center gap-2 text-sm md:text-xl dark:text-emerald-400 text-slate-950 font-extrabold">
          Impressed ? Interact with me now
          <MoveRight className="w-6 h-6" />
        </h1>
        <span className="flex items-center gap-4">
          <DelayOnReveal className="flex gap-2 w-max  items-center border-2 relative hover:animate-up-down hover:underline border-slate-950 dark:border-white shadow-green-sm ">
            <Link
              href="#project-page"
              className="flex gap-2 md:px-6 md:py-4 px-3 py-1.5 text-sm md:text-base items-center ">
              Contact me
            </Link>
          </DelayOnReveal>
        </span>
      </div> */}
    </div>
  );
}
