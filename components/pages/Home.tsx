'use client'
import React from 'react'
import Appear from '../animate/appear'
import Header from './HeadLink/Header'
import Image from 'next/image'

export default function Homepage() {
  return (
    <div  id="home-page" className='w-4/5 min-h-screen flex gap-3 items-center justify-center '>
      <Header/>
      <span className='w-1 h-[200px] rounded-full border-2 dark:border-white border-black'></span>
      <Appear delay={.4} className='w-1/2 h-[300px] flex items-center justify-center
      dark:shadow-light shadow-custom dark:bg-white bg-black'>
        <Image
        src="/image.svg"
        width={200}
        height={200}
        className='border-2  rounded-full dark:border-black border-white'
        alt='image'/>
      </Appear>
    </div>
  )
}
