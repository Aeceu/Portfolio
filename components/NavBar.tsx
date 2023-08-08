'use client'
import {
AiFillGithub,
AiFillLinkedin,
AiFillFacebook} from 'react-icons/ai'
import { motion } from 'framer-motion'
import Appear from './animate/appear'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const links = [
    {
        url:"https://github.com/kaneki081",
        tag: <AiFillGithub size="1.6rem"/>,
        delay:.2
    },
    {
        url:"https://www.linkedin.com/in/jose-acebuche-4a5b851b5/",
        tag: <AiFillLinkedin size="1.6rem"/>,
        delay:.3   
    },
    {
        url:"https://www.facebook.com/Aeceuuu",
        tag: <AiFillFacebook size="1.6rem"/>,
        delay:.4   
    },  
]
export default function NavBar() {
  return (
    <nav
    className='sticky top-0 w-full p-4 flex justify-between  items-center  z-50
    dark:text-white text-slate-950 dark:bg-slate-950/70 bg-opacity-5 bg-white/70 '>
        <div className='flex gap-4'>
            {links.map((link,i)=>(
                <motion.span
                    whileHover={{color:'rgb(16 185 129)'}}
                    key={i}
                    initial={{opacity:0,y:-75}}
                    animate={{opacity:1,y:0,
                    transition:{delay:link.delay}
                    }}
                    className=''>
                    <Link href={link.url}>{link.tag}</Link>    
                </motion.span>
            ))} 
        </div>
        <div className='flex gap-4 items-center ' >
            <ThemeToggle/>
            <motion.button
                initial={{opacity:0,y:-75}}
                animate={{opacity:1,y:0}}
                transition={{delay:.1}}
                className='border-2 px-4 py-1 
                 border-emerald-500  hover:animate-up-down'>
                My Resume
            </motion.button>
        </div>
    </nav>
  )
}
