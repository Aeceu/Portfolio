import Image from "next/image";
import DelayOnReveal from "../animate/DelayReveal";
import Divider from "../animate/divider";
import React from "react";

export default function AboutPage() {
  return (
    <div
      id="about-page"
      className="relative min-h-screen  flex flex-col lg:items-start items-center p-4 "
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

      <div className="w-full flex gap-16 xl:flex-row flex-col-reverse items-center justify-between px-2 md:px-8">
        <div className="w-full xl:w-3/4  text-justify flex flex-col ">
          {/* INTERNSHIP JOURNEY SECTION */}
          <DelayOnReveal
            className="relative flex text-3xl lg:text-4xl font-extrabold text-emerald-500 z-50
              bg-white dark:bg-slate-950 lg:tracking-widest
              lg:dark:[text-shadow:4px_4px_0_rgb(255_255_255_)] lg:[text-shadow:4px_4px_0_rgb(2_6_23_)]
              dark:[text-shadow:2px_2px_0_rgb(255_255_255_)] [text-shadow:2px_2px_0_rgb(2_6_23_)]"
          >
            My Internship Journey
          </DelayOnReveal>

          <DelayOnReveal className="text-base leading-relaxed my-2">
            I completed a 3-month internship as a{" "}
            <strong>Frontend Developer Intern</strong> at{" "}
            <strong>Digiplus Interactive Corp.</strong> from{" "}
            <strong>March 10 to June 10</strong>. This role involved 40-hour
            workweeks and included a monthly allowance. Throughout the program,
            I gained hands-on experience in modern web development, collaborated
            in cross-functional teams, and contributed to multiple real-world
            projects under the guidance of experienced mentors.
          </DelayOnReveal>

          <DelayOnReveal className="text-base leading-relaxed ">
            <ul className="list-disc list-inside pl-4">
              <li>
                Gained practical knowledge in <strong>Vue 3</strong>,{" "}
                <strong>Pinia</strong> (state management), and{" "}
                <strong>Element Plus</strong> UI framework.
              </li>
              <li>
                Participated in regular team huddles and code reviews with
                mentor developers.
              </li>
              <li>
                Developed a <strong>student registration system</strong> with a
                modular component structure and responsive design.
              </li>
              <li>
                Collaborated with fellow interns using GitHub for version
                control, feature branches, and merge workflows.
              </li>
              <li>
                Proposed application ideas, created documentation (including
                system flows and UI mockups), and presented to department leads.
              </li>
              <li>
                Built a team-based interactive web application following agile
                methodologies, using <strong>GitHub Projects</strong> and{" "}
                <strong>Kanban</strong> boards.
              </li>
              <li>
                Conducted manual testing and resolved feature bugs based on
                issue tickets and QA feedback.
              </li>
              <li>
                Designed user interfaces using <strong>Figma</strong> and
                aligned frontend development with design specifications.
              </li>
              <li>
                Integrated third-party APIs using <strong>Axios</strong> to
                build a mock e-commerce platform with dynamic data rendering.
              </li>
              <li>
                Applied best practices in state management, component reuse, and
                project structure across all tasks.
              </li>
            </ul>
          </DelayOnReveal>

          <DelayOnReveal
            className=" relative  flex text-3xl  lg:text-4xl font-extrabold text-emerald-500 my-2 z-50
          bg-white dark:bg-slate-950 lg:tracking-widest
          lg:dark:[text-shadow:4px_4px_0_rgb(255_255_255_)] lg:[text-shadow:4px_4px_0_rgb(2_6_23_)]
          dark:[text-shadow:2px_2px_0_rgb(255_255_255_)] [text-shadow:2px_2px_0_rgb(2_6_23_)]"
          >
            My Development Journey
          </DelayOnReveal>
          <DelayOnReveal className="text-lg w-full">
            My journey in the realm of technology has been a vibrant
            exploration, from mastering coding languages and algorithms to my
            current passion for crafting sophisticated solutions that address
            real-world challenges.
          </DelayOnReveal>

          <div className="w-full  flex flex-wrap items-center justify-center xl:items-start xl:justify-start gap-12 px-8">
            <DelayOnReveal>
              <div className="w-[250px] sm:w-[350px] h-[200px] dark:bg-white dark:text-slate-950 border-2 border-slate-950 shadow-green-md flex flex-col p-4">
                <h1 className="font-extrabold text-4xl  [text-shadow:3px_3px_0_rgb(2_6_23_)] text-emerald-500 ">
                  3+ years
                </h1>
                <p className="mt-2 border-t-2  border-slate-950 ">
                  Accumulated experience in programming, developing various
                  applications, and honing coding skills.
                </p>
              </div>
            </DelayOnReveal>
            <DelayOnReveal>
              <div className="w-[250px] sm:w-[350px] h-[200px] dark:bg-white dark:text-slate-950 border-2 border-slate-950 shadow-green-md flex flex-col p-4">
                <h1 className="font-extrabold text-4xl  [text-shadow:3px_3px_0_rgb(2_6_23_)] text-emerald-500">
                  10+ projects
                </h1>
                <p className="mt-2 border-t-2  border-slate-950 ">
                  Successfully completed over ten projects, demonstrating a wide
                  range of technical and problem-solving abilities.
                </p>
              </div>
            </DelayOnReveal>
            <DelayOnReveal>
              <div className="w-[250px] sm:w-[350px] h-[200px] dark:bg-white dark:text-slate-950 border-2 border-slate-950 shadow-green-md flex flex-col p-4">
                <h1 className="font-extrabold text-4xl  [text-shadow:3px_3px_0_rgb(2_6_23_)] text-emerald-500">
                  2 certificates
                </h1>
                <p className="mt-2 border-t-2  border-slate-950 ">
                  Earned two certificates recognizing exceptional programming
                  skills and knowledge in the field.
                </p>
              </div>
            </DelayOnReveal>
            <DelayOnReveal>
              <div className="w-[250px] sm:w-[350px] h-[200px] dark:bg-white dark:text-slate-950 border-2 border-slate-950 shadow-green-md flex flex-col p-4">
                <h1 className="font-extrabold text-4xl  [text-shadow:3px_3px_0_rgb(2_6_23_)] text-emerald-500">
                  500+ hours
                </h1>
                <p className="mt-2 border-t-2  border-slate-950 ">
                  Consistently improving and expanding my expertise across
                  different programming languages and frameworks.
                </p>
              </div>
            </DelayOnReveal>
          </div>
        </div>
        <div className="w-full  xl:w-1/4 text-justify flex items-center justify-center">
          <div className="shrink-0 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] rounded-full border-2 border-slate-950 shadow-green-md overflow-hidden animate-moving">
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
    </div>
  );
}
