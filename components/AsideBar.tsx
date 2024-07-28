"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AsideBar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 h-screen px-2 py-8 flex flex-col items-center  
    text-white dark:text-slate-950 
    bg-slate-950 dark:bg-white shadow-green-md w-[50px] ">
      <Link
        href="#home-page"
        className="transition-all rotate-90 hover:text-emerald-500 hover:scale-125 my-4">
        Home
      </Link>
      <Link
        href="#about-page"
        className="transition-all rotate-90 hover:text-emerald-500 hover:scale-125 my-8">
        About
      </Link>
      <Link
        href="#tech-page"
        className="transition-all rotate-90 hover:text-emerald-500 hover:scale-125 my-9">
        Technologies
      </Link>
      <Link
        href="#project-page"
        className="transition-all rotate-90 hover:text-emerald-500 hover:scale-125 my-8">
        Projects
      </Link>
      <Link
        href="#contact-page"
        className="transition-all rotate-90 hover:text-emerald-500 hover:scale-125 my-8">
        Contacts
      </Link>
    </motion.div>
  );
}
