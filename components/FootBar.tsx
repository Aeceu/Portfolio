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

export default function FootBar() {
  return (
    <div className=' rounded-full p-4 flex gap-4 items-center fixed bottom-2 z-50
    text-white bg-black shadow-custom dark:text-black dark:bg-white dark:shadow-light' >
        <HoverCard>
            <HoverCardTrigger asChild>
                <motion.span
                whileFocus={{scale:1.2,y:-3}}
                whileHover={{scale:1.2,y:-3}}
                initial={{opacity:0,y:75}}
                animate={{opacity:1,y:0,
                    transition:{delay:.2}
                }}>
                <Link href="#home-page" className='flex gap-1 items-center'>
                    <AiFillHome size="1.5rem"/>
                </Link>    
                </motion.span>
            </HoverCardTrigger>
            <HoverCardContent className='w-max px-4 py-1 bg-black shadow-custom text-white flex items-center justify-center'>
                <h1 className='text-sm'>Home</h1>
            </HoverCardContent>
        </HoverCard>

        <HoverCard>
            <HoverCardTrigger asChild>
                <motion.span
                whileHover={{scale:1.2,y:-3}}
                initial={{opacity:0,y:75}}
                animate={{opacity:1,y:0,
                    transition:{delay:.3}
                }}>
                <Link href="#tech-page"  className='flex gap-1 items-center'>
                    <GiTechnoHeart size="1.5rem"/>
                </Link>    
                </motion.span>
            </HoverCardTrigger>
            <HoverCardContent className='w-max px-4 py-1 bg-black shadow-custom text-white flex items-center justify-center'>
                    <h1 className='text-sm'>Technology</h1>
            </HoverCardContent>
        </HoverCard>

        <HoverCard>
            <HoverCardTrigger asChild>
            <motion.span
                whileHover={{scale:1.2,y:-3}}
                initial={{opacity:0,y:75}}
                animate={{opacity:1,y:0,
                    transition:{delay:.4}
                }}>
                <Link href="#project-page"  className='flex gap-1 items-center'>
                    <AiFillProject size="1.5rem"/>
                </Link>    
            </motion.span>
            </HoverCardTrigger>
            <HoverCardContent className='w-max px-4 py-1 bg-black shadow-custom text-white flex items-center justify-center'>
                    <h1 className='text-sm'>Projects</h1>
            </HoverCardContent>
        </HoverCard>
     
    </div>   
  )
}
