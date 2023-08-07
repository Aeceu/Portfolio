import DelayOnReveal from '@/components/animate/DelayReveal'
import Link from 'next/link'
import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

export default function Header() {

  return (
    <div className="w-max">
        <DelayOnReveal className="text-3xl  ">
          Hi, I am
        </DelayOnReveal>
        <DelayOnReveal className="flex text-8xl font-extrabold">
          <h1>Jose Acebuche</h1>
        </DelayOnReveal>
        <DelayOnReveal className="text-lg font-extrabold w-max ">
        Software Engineer from the Philippines | Full-stack Application & Website Developer
        </DelayOnReveal>
        <DelayOnReveal className="text-md  ">
        Passionate about leveraging cutting-edge technologies and user-centered design principles to create innovative and impactful digital solutions for businesses and individuals alike.
        </DelayOnReveal>
        
        <DelayOnReveal className='flex gap-2 w-max  items-center border-2 mt-4 relative hover:animate-up-down hover:underline dark:border-white border-black '>
          <Link href="#project-page" className='flex gap-2 px-4 py-2 items-center' >
              Get to know me
            <AiOutlineArrowRight/>
          </Link>
        </DelayOnReveal>
      </div>
  )
}
