'use client'
import React from 'react'
import DelayOnReveal from '../animate/DelayReveal';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const LogoLink = () =>{
  const logos = [
    {url: "/tech/python.svg",
     name: "Python",
     desc: "A versatile and high-level programming language known for its readability and clean syntax."},
    {url: "/tech/c++.png",
     name: "C++",
     desc: "A powerful and general-purpose programming language that extends the capabilities of the C programming language."},
    {url: "/tech/java.svg",
     name: "Java",
     desc: "A widely-used, class-based, and object-oriented programming language."},
    {url: "/tech/html.svg",
     name: "HTML",
     desc: "(Hypertext Markup Language) is the standard markup language for creating web pages and web applications."},
    {url: "/tech/css.svg",
     name: "CSS",
     desc: "(Cascading Style Sheets) is used to style the presentation of HTML elements in web pages."},
    {url: "/tech/js.svg",
     name: "JavaScript",
     desc: "A versatile scripting language used to add interactivity and dynamic behavior to web pages."},
    {url: "/tech/ts.svg",
     name: "TypeScript",
     desc: "A superset of JavaScript that adds static typing and other advanced features."},
    {url: "/tech/next.svg",
     name: "Next.js",
     desc: "A popular React framework that simplifies the creation of server-rendered React applications."},
     {url: "/tech/nodejs.svg",
     name: "Node.js",
     desc: "A runtime environment that allows you to execute JavaScript code on the server side."},
    {url: "/tech/react.svg",
     name: "React",
     desc: "A JavaScript library used for building user interfaces, particularly for single-page applications."},
    {url: "/tech/tailwind.svg",
     name: "Tailwind CSS",
     desc: "A utility-first CSS framework that streamlines the process of designing and styling websites."},
    {url: "/tech/mongodb.svg",
     name: "MongoDB",
     desc: "A popular NoSQL database that uses a document-oriented data model."},
    {url: "/tech/next-auth.png",
     name: "NextAuth.js",
     desc: "A library that simplifies the implementation of authentication and authorization in Next.js applications."},
     {url: "/tech/git2.svg",
     name: "Git",
     desc: "A distributed version control system for tracking changes in source code during software development."},
];

  return(
    <div className="w-3/5 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] place-items-center gap-4 ">
  {logos.map((logo, i) => {
    return (
        <DelayOnReveal key={i} className='dark:bg-white  dark:shadow-green-md p-2 rounded-md flex gap-4 items-center flex-col h-full cursor-pointer
        transition-all hover:scale-110'>
            <Image
              src={logo.url}
              width={50}
              height={50}
              alt='logo'
              />
        </DelayOnReveal>
    )
  })}
</div>

  )
}

export default function Techpage() {
  return (
    <div id="tech-page" className='relative min-h-screen flex flex-col items-center p-4 gap-8'>
      <div className='w-full flex items-center justify-center'>
        <DelayOnReveal
          delay={.2}
          className="relative pr-4 flex text-8xl font-extrabold text-emerald-500 mb-4 dark:[text-shadow:5px_5px_0_rgb(255_255_255_)] [text-shadow:5px_5px_0_rgb(2_6_23_)] z-50 bg-white dark:bg-slate-950">
          Technologies
        </DelayOnReveal>       
        <span className='w-[95%] border-[1px] rounded-full border-zinc-500/70 absolute '/>
      </div>
        <div className='flex justify-between items-center px-8 gap-8'>
          <LogoLink/>
          <div>
            <div>
              <h1 className='flex items-center gap-2 font-bold text-emerald-500 text-md'>
                Tech
              <span className='w-full border-[1px] rounded-full border-zinc-500/70 '/>
              </h1>
              <DelayOnReveal>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut hic similique dolorum voluptate necessitatibus explicabo laborum. Quod delectus nihil ex error deserunt iste ut expedita laudantium voluptatibus debitis? Illo.
              </DelayOnReveal>
            </div>
            <div>
              <h1 className='flex items-center gap-2 font-bold text-emerald-500 text-md'>
                Experience
              <span className='w-full border-[1px] rounded-full border-zinc-500/70 '/>
              </h1>
              <DelayOnReveal>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut hic similique dolorum voluptate necessitatibus explicabo laborum. Quod delectus nihil ex error deserunt iste ut expedita laudantium voluptatibus debitis? Illo.
              </DelayOnReveal>
            </div>
            <div>
              <h1 className='flex items-center gap-2 font-bold text-emerald-500 text-md'>
                Percentage
              <span className='w-full border-[1px] rounded-full border-zinc-500/70 '/>
              </h1>
              <DelayOnReveal>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut hic similique dolorum voluptate necessitatibus explicabo laborum. Quod delectus nihil ex error deserunt iste ut expedita laudantium voluptatibus debitis? Illo.
              </DelayOnReveal>
            </div>
            
          </div>  
        </div>
    </div>
  )
}

