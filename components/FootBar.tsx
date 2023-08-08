'use client'
import React from 'react'
import Appear from './animate/appear'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { AiFillHome,AiFillProject } from 'react-icons/ai'
import {GiTechnoHeart} from 'react-icons/gi'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger
} from "@/components/ui/hover-card"

export default function AsideBar() {
  return (
    <motion.div
     initial={{opacity:0,x:"-100vw"}}
     animate={{opacity:1,x:0}}
     transition={{duration:.7}}
     className='sticky top-0 h-full px-2 py-8 flex flex-col gap-16 items-center  
    text-white dark:text-slate-950 
    bg-slate-950 dark:bg-white shadow-light w-[50px] ' >
        <Link href="#home-page" className='flex gap-1 items-center rotate-90 hover:text-emerald-500 hover:scale-125'>
            Home
        </Link>  
        <Link href="#tech-page"  className='flex gap-1 items-center rotate-90 hover:text-emerald-500 hover:scale-125'>
            Technologies
        </Link>
        <Link href="#project-page"  className='flex gap-1 items-center rotate-90 hover:text-emerald-500 hover:scale-125'>
            Projects
        </Link> 
        {/* <HoverCard>
            <HoverCardTrigger asChild>
                <motion.span
                whileHover={{scale:1.2,color:'rgb(16 185 129)'}}
                initial={{opacity:0,y:75}}
                animate={{opacity:1,y:0,
                    transition:{delay:.8}
                }}>
                  
                </motion.span>
            </HoverCardTrigger>
            <HoverCardContent className='w-max px-4 py-1 flex items-center justify-center
            text-white bg-black shadow-custom dark:text-black dark:bg-white dark:shadow-light'>
                <h1 className='text-sm'>Home</h1>
            </HoverCardContent>
        </HoverCard>

        <HoverCard>
            <HoverCardTrigger asChild>
                <motion.span
                whileHover={{scale:1.2,color:'rgb(16 185 129)'}}
                initial={{opacity:0,y:75}}
                animate={{opacity:1,y:0,
                    transition:{delay:.9}
                }}>
                    
                </motion.span>
            </HoverCardTrigger>
            <HoverCardContent className='w-max px-4 py-1 flex items-center justify-center
            text-white bg-black shadow-custom dark:text-black dark:bg-white dark:shadow-light'>
                    <h1 className='text-sm'>Technology</h1>
            </HoverCardContent>
        </HoverCard>

        <HoverCard>
            <HoverCardTrigger asChild>
            <motion.span
                whileHover={{scale:1.2,color:'rgb(16 185 129)'}}
                initial={{opacity:0,y:75}}
                animate={{opacity:1,y:0,
                    transition:{delay:1}
                }}>
                   
            </motion.span>
            </HoverCardTrigger>
            <HoverCardContent className='w-max px-4 py-1 flex items-center justify-center
            text-white bg-black shadow-custom dark:text-black dark:bg-white dark:shadow-light'>
                    <h1 className='text-sm'>Projects</h1>
            </HoverCardContent>
        </HoverCard> */}
    </motion.div>   
  )
}
