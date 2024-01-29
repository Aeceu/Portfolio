import Image from "next/image";
import DelayOnReveal from "../animate/DelayReveal";
import Divider from "../animate/divider";
import React from "react";

export default function AboutPage() {
  return (
    <div
      id="about-page"
      className="relative min-h-screen flex flex-col lg:items-start items-center p-4 "
    >
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
      <div className="w-full flex md:flex-row flex-col items-center gap-2">
        <div className="w-full md:w-1/2 text-justify flex flex-col gap-4">
          <DelayOnReveal className="flex items-center">
            I&apos;m Jose Acebuche, a Software Engineer, and Full-Stack
            Developer based in the Philippines. My journey in the realm of
            technology has been a vibrant exploration, from mastering coding
            languages and algorithms to my current passion for crafting
            sophisticated solutions that address real-world challenges.
          </DelayOnReveal>
          <DelayOnReveal>
            My satisfaction derives from turning abstract concepts into
            functional applications. Whether I&apos;m deeply involved in
            front-end design, architecting robust back-end systems, or
            optimizing database queries, each development phase fuels my
            enthusiasm for creating impactful and seamless user experiences.
          </DelayOnReveal>
          <DelayOnReveal>
            Beyond coding, I actively immerse myself in the dynamic tech
            landscape. Engaging in online tutorials, participating in
            hackathons, and attending tech meetups are integral to my continuous
            learning process. When away from the keyboard, I&apos;m an ardent
            outdoor explorer, leveraging diverse experiences to enhance my
            well-rounded problem-solving skills.
          </DelayOnReveal>
          <DelayOnReveal>
            Join me on this exhilarating journey of innovation and creativity.
            Let&apos;s connect with fellow developers, contribute to the global
            tech community, and shape the future of technology together.
          </DelayOnReveal>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center h-full">
          <Image
            src={"/img.svg"}
            alt="img"
            width={300}
            height={300}
            className="rounded-full animate-moving"
          />
        </div>
      </div>
    </div>
  );
}
