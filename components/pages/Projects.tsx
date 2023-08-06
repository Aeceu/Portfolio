'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Appear from '../animate/appear'
import DelayOnReveal from '../animate/DelayReveal'


export default function Projectspage() {
  return (
    <div id="project-page" className='w-full min-h-screen flex items-center justify-center bg-orange-600'>
        <div className="p-8 w-max  text-black">
          <DelayOnReveal
            delay={.2}
            className="text-8xl font-extrabold">
            Projects
          </DelayOnReveal>
          <DelayOnReveal
            delay={.3}
            className="text-xl">
            I am a Full Stack Developer 🚀
          </DelayOnReveal>
          <DelayOnReveal
            delay={.4}
            className="text-lg">
            Full time developer in Typescript, Next-JS, TailwindCSS
          </DelayOnReveal>
        </div>
    </div>
  )
}
