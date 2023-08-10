'use client'
import React from 'react'
import DelayOnReveal from '../animate/DelayReveal';
import TechLogos from '../TechLogos';
import Divider from '../animate/divider';


export default function Techpage() {
  return (
    <div id="tech-page" className='relative min-h-screen flex flex-col items-center p-4 gap-8'>
      <div className='w-full flex items-center justify-center'>
        <DelayOnReveal
          delay={.2}
          className="relative pr-4 flex text-8xl font-extrabold text-emerald-500 mb-4 dark:[text-shadow:5px_5px_0_rgb(255_255_255_)] [text-shadow:5px_5px_0_rgb(2_6_23_)] z-50 bg-white dark:bg-slate-950">
          Technologies
        </DelayOnReveal>       
        <Divider/>
      </div>
      
      <div className=' flex justify-between items-center px-8 gap-8'>
        <TechLogos/>
        <div className=''>
          <div>
            <h1 className='flex items-center gap-2 font-bold text-emerald-500 text-md'>
              Tech
            <span className='w-full border-[1px] rounded-full border-zinc-500/70 '/>
            </h1>
            <DelayOnReveal>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut hic similique dolorum voluptate necessitatibus explicabo laborum. Quod delectus nihil ex error deserunt iste ut expedita laudantium voluptatibus debitis? Illo.
            </DelayOnReveal>
          </div>
          <div>
            <h1 className='flex items-center gap-2 font-bold text-emerald-500 text-md'>
              Experience
            <span className='w-full border-[1px] rounded-full border-zinc-500/70 '/>
            </h1>
            <DelayOnReveal>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut hic similique dolorum voluptate necessitatibus explicabo laborum. Quod delectus nihil ex error deserunt iste ut expedita laudantium voluptatibus debitis? Illo.
            </DelayOnReveal>
          </div>
          <div>
            <h1 className='flex items-center gap-2 font-bold text-emerald-500 text-md'>
              Percentage
            <span className='w-full border-[1px] rounded-full border-zinc-500/70 '/>
            </h1>
            <DelayOnReveal>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat molestias eum distinctio laborum, placeat sequi earum cupiditate provident vero quas repellat id praesentium a perferendis corporis! Minima, nisi sed.
            </DelayOnReveal>
          </div>
        </div>  
      </div>
    </div>
  )
}

