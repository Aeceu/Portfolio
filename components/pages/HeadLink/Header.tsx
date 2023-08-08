import DelayOnReveal from '@/components/animate/DelayReveal'
import Link from 'next/link'
import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

export default function Header() {

  return (
    <div className=" flex flex-col items-center w-full text-center ">
        <DelayOnReveal className="text-3xl font-extrabold ">
          Hi, I am
        </DelayOnReveal>
        <DelayOnReveal className="flex text-8xl font-extrabold text-emerald-500 mb-4">
          Jose Acebuche
        </DelayOnReveal>
        <DelayOnReveal className="text-xl font-bold">
        Software Engineer from the Philippines | Full-stack Application & Website Developer
        </DelayOnReveal>
        <DelayOnReveal className="text-md w-3/4 ">
        Passionate about leveraging cutting-edge technologies and user-centered design principles to create innovative and impactful digital solutions for businesses and individuals alike.
        </DelayOnReveal>
        
        <DelayOnReveal className='flex gap-2 w-max  items-center border-2 mt-4 relative hover:animate-up-down hover:underline border-emerald-500 '>
          <Link href="#project-page" className='flex gap-2 px-4 py-2 items-center' >
              Get to know me
            {/* <AiOutlineArrowRight/> */}
          </Link>
        </DelayOnReveal>
      </div>
  )
}
