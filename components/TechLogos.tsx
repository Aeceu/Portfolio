'use client'
import DelayOnReveal from "./animate/DelayReveal";
import Image from "next/image";

export default function TechLogos() {
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
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] place-items-center gap-4 ">
          {logos.map((logo, i) => {
            return (
                <DelayOnReveal key={i} className='dark:bg-white  dark:shadow-green-md p-2 rounded-md flex gap-4 items-center flex-col h-full cursor-pointer
                transition-all hover:scale-110'>
                    <Image
                      src={logo.url}
                      width={70}
                      height={70}
                      alt='logo'
                      />
                </DelayOnReveal>
            )
          })}
        </div>
      )
}
