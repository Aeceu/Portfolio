'use client'
import React from 'react'
import Appear from '../animate/appear'
import Header from './HeadLink/Header'
import Image from 'next/image'

export default function Homepage() {
  return (
    <div  id="home-page" 
    className='relative w-full min-h-screen flex gap-3 items-center'>
      {/* bg gradient */}
      <div className='dark:bg-slate-900  w-[1000px] h-[200px] absolute rounded-full
      translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] filter blur-3xl'></div>
      <Header/>
      {/* <span className='w-1 h-[200px] rounded-full border-2 dark:border-white border-black'></span>
      <Appear delay={.4} className='w-1/2 h-[300px] flex items-center justify-center
      dark:shadow-light shadow-custom dark:bg-white bg-black'>
        <Image
        src="/image.svg"
        width={200}
        height={200}
        className='border-2  rounded-full dark:border-black border-white'
        alt='image'/>
      </Appear> */}
    </div>
  )
}
