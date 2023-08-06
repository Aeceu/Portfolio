'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Appear from '../animate/appear'
import DelayOnReveal from '../animate/DelayReveal';

export default function Techpage() {
  return (
    <div id="tech-page" className='w-full min-h-screen flex items-center justify-center bg-rose-600'>
        <div className="p-8 w-max  text-black">
          <DelayOnReveal
            delay={.2}
            className="text-8xl font-extrabold">
            Technology
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
