'use client'
import { useState,useEffect } from "react";
import {BiSolidSun,BiSolidMoon} from "react-icons/bi"
import DelayOnReveal from "@/components/animate/DelayReveal"

export default function ThemeToggle() {
  const [theme,setTheme] = useState("dark")

  const toggle = () =>{
    setTheme((prev => prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[theme])

  return (
    <DelayOnReveal>
        <div className="flex gap-2 items-center cursor-pointer hover:scale-125 hover:text-emerald-500 transition-all" onClick={toggle}>       
        {theme === 'dark' 
            ? <BiSolidMoon size="1.7em" />
            :  <BiSolidSun size="1.7em" />
        }
        </div>
    </DelayOnReveal>
  )
}
