'use client'
import { motion,useAnimation,useInView } from "framer-motion";
import {useRef, useEffect} from 'react';

export default function Divider() {
  const ref = useRef(null)
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
    }else{
      mainControls.start("hidden")
    }
  },[isInView])


  return (
    <motion.span
          ref={ref}
          variants={{
            hidden:{width: 0},
            visible:{
              width: "95%", 
              transition: { duration: .5 }}
          }}
          initial='hidden'
          animate={mainControls}
          className="w-[95%] border-[1px] rounded-full border-zinc-500/70 absolute "
        />
  )
}
