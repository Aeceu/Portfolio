"use client";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  {
    url: "https://github.com/Aeceu",
    tag: <AiFillGithub className="sm:w-10 sm:h-10 w-7 h-7" />,
    delay: 0.2,
  },
  {
    url: "https://www.linkedin.com/in/jose-acebuche-4a5b851b5/",
    tag: <AiFillLinkedin className="sm:w-10 sm:h-10 w-7 h-7" />,
    delay: 0.3,
  },
  {
    url: "https://www.facebook.com/Aeceuuu",
    tag: <AiFillFacebook className="sm:w-10 sm:h-10 w-7 h-7" />,
    delay: 0.4,
  },
];
export default function NavBar() {
  return (
    <nav
      className="w-full  p-8 flex justify-between  items-center  
    dark:text-white text-slate-950   ">
      <div className="flex gap-2 sm:gap-4">
        {links.map((link, i) => (
          <motion.span
            whileHover={{ color: "rgb(16 185 129)" }}
            key={i}
            initial={{ opacity: 0, y: -75 }}
            animate={{ opacity: 1, y: 0, transition: { delay: link.delay } }}
            className="">
            <Link href={link.url}>{link.tag}</Link>
          </motion.span>
        ))}
      </div>
      <div className="flex gap-4 items-center ">
        <ThemeToggle />
        <motion.button
          initial={{ opacity: 0, y: -75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 sm:px-8 sm:py-4 px-4 py-2  
                dark:border-white  border-slate-950 shadow-green-sm   hover:animate-up-down">
          <Link href="#contact-page">Request for Resume</Link>
        </motion.button>
      </div>
    </nav>
  );
}
