
import { motion } from 'framer-motion'
import React from 'react'


const Marquee = () => {
  return (
    
    <div data-scroll data-scroll-speed=".1" data-scroll-section  className=' w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
        <div className='text border-t-2  border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden pr-20'>

        <motion.h1 
        initial={{x:"0"}}
         animate={{x:"-100%"}} 
         transition={{repeat:Infinity,ease:"linear",duration:10}}
         className=' text-[12vw] leading-none pt-10  font-["Founder_Grotesk"] uppercase'>We are Ochi</motion.h1>
        <motion.h1
         initial={{x:"0"}}
          animate={{x:"-100%"}} 
          transition={{repeat:Infinity,ease:"linear",duration:10}}
        
        className='text-[12vw] leading-none pt-10  font-["Founder_Grotesk"] uppercase'>We are Ochi</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee
