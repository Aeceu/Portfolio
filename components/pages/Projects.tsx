import React from 'react'
import DelayOnReveal from '../animate/DelayReveal'
import Divider from '../animate/divider'

export default function Projectspage() {
  return (
    <div id="project-page" className="relative min-h-screen flex flex-col items-center p-4 gap-8">
         <div className='w-full flex items-center justify-end'>
          <DelayOnReveal
            delay={.2}
            className="relative pr-4 flex text-8xl font-extrabold text-emerald-500 mb-4 dark:[text-shadow:5px_5px_0_rgb(255_255_255_)] [text-shadow:5px_5px_0_rgb(2_6_23_)] z-50 bg-white dark:bg-slate-950">
            Projects
          </DelayOnReveal>       
          <Divider/>
      </div>
    </div>
  )
}
