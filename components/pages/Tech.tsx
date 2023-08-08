'use client'
import React from 'react'
import DelayOnReveal from '../animate/DelayReveal';
import Image from 'next/image';
import { motion } from 'framer-motion';

import{
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandMongodb,
  TbBrandPython,

} from "react-icons/tb"
import {
  FaNode,
  FaJava,

} from "react-icons/fa"
import {
  RiJavascriptLine
} from "react-icons/ri"

export const LogoLink = () =>{
  const logos = [
    {url:<TbBrandHtml5 size="3rem"/>},
    {url:<TbBrandCss3 size="3rem"/>},
    {url:<RiJavascriptLine size="3rem"/>},
    {url:<TbBrandTypescript size="3rem"/>},
    {url:<TbBrandReact size="3rem"/>},
    {url:<TbBrandNextjs size="3rem"/>}, 
    {url:<FaNode size="3rem"/>},
    {url:<TbBrandTailwind size="3rem"/>},
    {url:<TbBrandMongodb size="3rem"/>},
    {url:<FaJava size="3rem"/>},
    {url:<TbBrandPython size="3rem"/>}
  ]
  return(
    <div className=" grid grid-cols-4 place-items-center gap-4 ">
      {
        logos.map((logo,i)=>{
          return(
          <DelayOnReveal key={i} className='p-1 border-[3px] border-white dark:border-black hover:border-black dark:hover:border-white  rounded-md cursor-pointer'>
            {logo.url}
          </DelayOnReveal>
          )
        })
      }
      </div>
  )
}

export default function Techpage() {
  return (
    <div id="tech-page" className='w-full min-h-screen flex flex-col items-center justify-center gap-4 '>
        <DelayOnReveal
          delay={.2}
          className=" text-8xl font-extrabold">
          Technologies
        </DelayOnReveal>
        <motion.span 
        initial={{opacity:0,x:"100vw"}}
        animate={{opacity:1,x:0}}
        className='h-1 w-[530px] rounded-full border-2 dark:border-white border-black'></motion.span>

        {/* <LogoLink/> */}
    </div>
  )
}

