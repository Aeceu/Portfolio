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
        tag: <AiFillGithub size="1.7rem"/>,
        delay:.2
    },
    {
        url:"https://www.linkedin.com/in/jose-acebuche-4a5b851b5/",
        tag: <AiFillLinkedin size="1.7rem"/>,
        delay:.3   
    },
    {
        url:"https://www.facebook.com/Aeceuuu",
        tag: <AiFillFacebook size="1.7rem"/>,
        delay:.4   
    },  
]
export default function NavBar() {
  return (
    <nav
    className='w-3/4 py-5 px-4 flex justify-between items-center fixed top-0 z-50
       bg-black text-white dark:text-black dark:bg-white shadow-custom dark:shadow-light'>
        <div className='flex gap-2'>
            {links.map((link,i)=>(
                <motion.span
                    key={i}
                    whileHover={{scale:1.2,y:-3}}
                    initial={{opacity:0,y:-75}}
                    animate={{opacity:1,y:0,
                    transition:{delay:link.delay}
                    }}>
                    <Link href={link.url}>{link.tag}</Link>    
                </motion.span>
            ))} 
        </div>
        <div className='flex gap-2 items-center ' >
            <ThemeToggle/>
            <motion.button
                initial={{opacity:0,y:-75}}
                animate={{opacity:1,y:0}}
                transition={{delay:.1}}
                className='border-2 px-4 py-1 
                dark:border-black border-white hover:animate-up-down'>
                My Resume
            </motion.button>
        </div>
    </nav>
  )
}
