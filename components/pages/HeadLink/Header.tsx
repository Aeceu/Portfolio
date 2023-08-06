import DelayOnReveal from '@/components/animate/DelayReveal'
import Link from 'next/link'
import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

export default function Header() {

  return (
    <div className="p-8 w-max ">
        <DelayOnReveal className="text-4xl  ">
          Hi, I am
        </DelayOnReveal>
        <DelayOnReveal className="text-8xl font-extrabold">
          Jose Acebuche
        </DelayOnReveal>
        <DelayOnReveal className="text-xl  ">
          Full Stack Developer  🚀, 
        </DelayOnReveal>
        
        <div className='flex gap-2 w-max  items-center border-2 mt-4 relative hover:animate-up-down hover:underline dark:border-white border-black '>
          <Link href="#project-page" className='flex gap-2 px-4 py-2 items-center' >
              Get to know me
            <AiOutlineArrowRight/>
          </Link>
        </div>
      </div>
  )
}
