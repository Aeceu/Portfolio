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
      className="relative min-h-screen flex flex-col lg:items-start items-center p-4 ">
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
      <div className="w-full flex gap-16 lg:flex-row flex-col-reverse items-center justify-between px-2 md:px-8">
        <div className="w-full  text-justify flex flex-col gap-4 tracking-widest leading-7">
          <DelayOnReveal className="flex items-center ">
            I&apos;m <b className="text-2xl text-emerald-600">Jose Acebuche</b>, a{" "}
            <b className="text-lg text-orange-400">Software Engineer</b>, and{" "}
            <b className="text-lg text-orange-400">Full-Stack Developer</b> based in the
            <b className="text-lg text-red-500">Philippines</b>. My journey in the realm of
            technology has been a vibrant exploration, from mastering coding languages and
            algorithms to my current passion for crafting sophisticated solutions that address
            real-world challenges.
          </DelayOnReveal>
          <DelayOnReveal>
            My satisfaction derives from turning abstract concepts into functional applications.
            Whether I&apos;m deeply involved in front-end design, architecting robust back-end
            systems, or optimizing database queries, each development phase fuels my enthusiasm for
            creating impactful and seamless user experiences.
          </DelayOnReveal>
          <DelayOnReveal>
            Beyond coding, I actively immerse myself in the dynamic tech landscape. Engaging in
            online tutorials, participating in hackathons, and attending tech meetups are integral
            to my continuous learning process. When away from the keyboard, I&apos;m an ardent
            outdoor explorer, leveraging diverse experiences to enhance my well-rounded
            problem-solving skills.
          </DelayOnReveal>
          <DelayOnReveal>
            Join me on this exhilarating journey of innovation and creativity. Let&apos;s connect
            with fellow developers, contribute to the global tech community, and shape the future of
            technology together.
          </DelayOnReveal>
        </div>
        <div className="shrink-0 md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-full overflow-hidden animate-moving">
          <Image
            src={"/1x1.jpg"}
            alt="img"
            width={300}
            height={300}
            className="w-full h-full object-cover "
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 p-2 md:p-8">
        <h1 className="flex items-center gap-2 text-xl dark:text-emerald-400 text-slate-950 font-extrabold">
          Impressed ? Interact with me now
          <MoveRight className="w-6 h-6" />
        </h1>
        <span className="flex items-center gap-4">
          <DelayOnReveal className="flex gap-2 w-max  items-center border-2 relative hover:animate-up-down hover:underline border-slate-950 dark:border-white shadow-green-sm ">
            <Link href="#project-page" className="flex gap-2 px-6 py-4 items-center ">
              Contact me
            </Link>
          </DelayOnReveal>
          <DelayOnReveal className="flex gap-2 w-max  items-center border-2 relative hover:animate-up-down hover:underline border-slate-950 dark:border-white shadow-green-sm ">
            <Link href="#project-page" className="flex gap-2 px-6 py-4 items-center ">
              Email me
            </Link>
          </DelayOnReveal>
        </span>
      </div>
    </div>
  );
}
