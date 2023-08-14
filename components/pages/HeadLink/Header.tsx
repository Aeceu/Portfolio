import DelayOnReveal from "@/components/animate/DelayReveal";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="mt-[20%] md:mt-[10%] lg:mt-[8%] w-[90%] flex flex-col  justify-center  lg:items-center items-start lg:text-center  text-left relative">
      <DelayOnReveal className="text-2xl lg:text-3xl font-extrabold ">
        Hi, I am
      </DelayOnReveal>
      <DelayOnReveal
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-emerald-500 mb-4
      dark:[text-shadow:3px_3px_0_rgb(255_255_255_)]
      [text-shadow:3px_3px_0_rgb(2_6_23_)]
      lg:dark:[text-shadow:5px_5px_0_rgb(255_255_255_)]
      lg:[text-shadow:5px_5px_0_rgb(2_6_23_)]
      "
      >
        Jose Acebuche
      </DelayOnReveal>
      <DelayOnReveal className="text-lg lg:text-xl font-bold ">
        Software Engineer | Full-stack Developer
      </DelayOnReveal>
      <DelayOnReveal className="text-sm lg:text-md w-full lg:w-3/4  ">
        Passionate about leveraging cutting-edge technologies and user-centered
        design principles to create innovative and impactful digital solutions
        for businesses and individuals alike.
      </DelayOnReveal>
      <DelayOnReveal className="flex gap-2 w-max  items-center border-2 mt-4 relative hover:animate-up-down hover:underline border-slate-950 dark:border-white shadow-green-sm ">
        <Link
          href="#project-page"
          className="flex gap-2 px-4 py-2 items-center "
        >
          Get to know me
        </Link>
      </DelayOnReveal>
    </div>
  );
}
