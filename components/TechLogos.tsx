"use client";
import DelayOnReveal from "./animate/DelayReveal";
import Image from "next/image";

export default function TechLogos() {
  const logos = [
    {
      category: "Programming Languages",
      techlogos: [
        {
          url: "/tech/python.svg",
          name: "Python",
          desc: "A versatile and high-level programming language known for its readability and clean syntax.",
        },
        {
          url: "/tech/c++.png",
          name: "C++",
          desc: "A powerful and general-purpose programming language that extends the capabilities of the C programming language.",
        },
        {
          url: "/tech/java.svg",
          name: "Java",
          desc: "A widely-used, class-based, and object-oriented programming language.",
        },
        {
          url: "/tech/js.svg",
          name: "JavaScript",
          desc: "A versatile scripting language used to add interactivity and dynamic behavior to web pages.",
        },
        {
          url: "/tech/ts.svg",
          name: "TypeScript",
          desc: "A superset of JavaScript that adds static typing and other advanced features.",
        },
      ],
    },
    {
      category: "Web Development",
      techlogos: [
        {
          url: "/tech/html.svg",
          name: "HTML",
          desc: "(Hypertext Markup Language) is the standard markup language for creating web pages and web applications.",
        },
        {
          url: "/tech/css.svg",
          name: "CSS",
          desc: "(Cascading Style Sheets) is used to style the presentation of HTML elements in web pages.",
        },
        {
          url: "/tech/react.svg",
          name: "React",
          desc: "A JavaScript library used for building user interfaces, particularly for single-page applications.",
        },
        {
          url: "/tech/react_native.svg",
          name: "React Native",
          desc: "A JavaScript library used for building user interfaces, particularly for mobile application.",
        },
        {
          url: "/tech/next.svg",
          name: "Next.js",
          desc: "A popular React framework that simplifies the creation of server-rendered React applications.",
        },
        {
          url: "/tech/tailwind.svg",
          name: "Tailwind CSS",
          desc: "A utility-first CSS framework that streamlines the process of designing and styling websites.",
        },
        {
          url: "/tech/vue.svg",
          name: "Vue 3",
          desc: "A progressive JavaScript framework used for building user interfaces and single-page applications with a reactive and component-based approach.",
        },
      ],
    },
    {
      category: "Backend Technologies",
      techlogos: [
        {
          url: "/tech/nodejs.svg",
          name: "Node.js",
          desc: "A runtime environment that allows you to execute JavaScript code on the server side.",
        },
        {
          url: "/tech/express.svg",
          name: "Express.js",
          desc: "A fast, unopinionated, minimalist web framework for Node.js.",
        },
        {
          url: "/tech/flask.svg",
          name: "Flask",
          desc: "A lightweight WSGI web application framework in Python.",
        },
      ],
    },
    {
      category: "Database Technologies",
      techlogos: [
        {
          url: "/tech/mysql-logo.svg",
          name: "MySQL",
          desc: "An open-source relational database management system that uses SQL.",
        },
        {
          url: "/tech/mongodb.svg",
          name: "MongoDB",
          desc: "A popular NoSQL database that uses a document-oriented data model.",
        },
        {
          url: "/tech/prisma-2.svg",
          name: "Prisma",
          desc: "A modern database toolkit that simplifies database access for Node.js and TypeScript applications.",
        },
      ],
    },
    {
      category: "State Management",
      techlogos: [
        {
          url: "/tech/redux.svg",
          name: "Redux",
          desc: "A predictable state container for JavaScript apps.",
        },
        {
          url: "/tech/zustand.png",
          name: "Zustand",
          desc: "A state management solution with a small footprint and simple API.",
        },
        {
          url: "/tech/pinia.svg",
          name: "Pinia",
          desc: "The intuitive Vue store library that is the official state management solution for Vue.js.",
        },
      ],
    },
    {
      category: "Other",
      techlogos: [
        {
          url: "/tech/next-auth.png",
          name: "NextAuth.js",
          desc: "A library that simplifies the implementation of authentication and authorization in Next.js applications.",
        },
        {
          url: "/tech/git2.svg",
          name: "Git",
          desc: "A distributed version control system for tracking changes in source code during software development.",
        },
        {
          url: "/tech/firebase-1.svg",
          name: "Firebase",
          desc: "A platform developed by Google for creating mobile and web applications.",
        },
        {
          url: "/tech/docker.svg",
          name: "Docker",
          desc: "A platform that enables developers to package applications into containers—standardized executable components combining application source code with the operating system libraries and dependencies required to run that code in any environment.",
        },
        {
          url: "/tech/arch.svg",
          name: "Arch Linux",
          desc: "A lightweight and flexible Linux distribution that follows a rolling-release model and is known for its simplicity, transparency, and customization.",
        },
      ],
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      {logos.map((logo, i) => (
        <div key={i} className=" flex flex-col gap-2">
          <DelayOnReveal
            className=" relative  flex text-2xl md:text-3xl lg:text-4xl  font-extrabold text-emerald-500 mb-2 z-50 
          bg-white dark:bg-slate-950 tracking-widest
          dark:[text-shadow:2px_2px_0_rgb(255_255_255_)] [text-shadow:2px_2px_0_rgb(2_6_23_)]
          lg:dark:[text-shadow:3px_3px_0_rgb(255_255_255_)] lg:[text-shadow:3px_3px_0_rgb(2_6_23_)]
          "
          >
            {logo.category}
          </DelayOnReveal>
          <ul className="flex flex-wrap items-center gap-4">
            {logo.techlogos.map((tech, j) => (
              <li key={j}>
                <DelayOnReveal className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center border-2 border-slate-950 shadow-green-sm bg-white">
                  <Image src={tech.url} width={40} height={40} alt="logo" />
                </DelayOnReveal>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/*
      grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] place-items-center
      <DelayOnReveal
            key={i}
            className="dark:bg-white  dark:shadow-green-md p-2 rounded-md flex gap-4 items-center justify-center flex-col  cursor-pointer
                transition-all hover:scale-110 w-[90px] h-[100px]">
            <Image src={logo.url} width={70} height={30} alt="logo" />
          </DelayOnReveal> 
          */}
    </div>
  );
}
