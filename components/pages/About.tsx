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
      <div className="w-full text-justify flex flex-col gap-4">
        <p>
          I am <span className="text-emerald-500">Jose Acebuche</span>. A
          Software Engineer and Full-Stack Developer in the Phillipines. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          architecto totam dolorum temporibus suscipit dignissimos nulla
          consequuntur, minima officiis est eius molestias repudiandae eum, rem
          id similique, fugit sed numquam.
        </p>
        <p>
          I am a{" "}
          <span className="text-emerald-500 ">
            full stack developer and software engineer{" "}
          </span>
          , fueled by a passion for creating elegant solutions that bridge the
          gap between cutting-edge technology and real-world challenges. From my
          initial exploration of coding languages and algorithms to my present
          drive to develop impactful applications, my journey has been marked by
          a commitment to enhancing lives through technology.
        </p>
        <p>
          My satisfaction grows as I turn concepts into functional applications.
          Whether I am engrossed in{" "}
          <span className="text-emerald-500">
            front-end design, architecting robust back-end systems, or
            optimizing database queries, each development phase fuels my
            enthusiasm.
          </span>{" "}
          Beyond coding, I am drawn to the dynamic tech landscape, consistently
          engaging in learning through online tutorials, hackathons, and tech
          meetups. When I am not at the keyboard, I am an avid outdoor explorer,
          using diverse experiences to enhance my well-rounded problem-solving
          skills. Join me in this exhilarating journey of innovation and
          creativity, connecting with fellow developers and contributing to the
          global tech community.
        </p>
      </div>
    </div>
  );
}
