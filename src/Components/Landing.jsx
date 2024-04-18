import { motion } from 'framer-motion';
import React from 'react'
import {FaArrowUpLong} from "react-icons/fa6";
import { GiDuration } from 'react-icons/gi';

const Landing = () => {
  return (
    <div  data-scroll data-scroll-speed="-.3" data-scroll-section className=' w-full h-screen  bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We create","Eye-Opening","Presentation"].map((item,index)=>{
                return <div className="masker">
                  <div className='w-fit flex items-end overflow-hidden'>
                    {index===1 && 
                    (<motion.div 
                    initial={{width:0}} 
                    animate={{width:"9vw"}} 
                    transition={{ease:[0.76, 0, 0.24, 1],duration:1}}className=' mr-[1vw] w-[6vw]  rounded-md h-[4.2vw] relative -top-[0.3vw] bg-red-400'></motion.div>)}
                <h1 className=" flex items-center  uppercase text-[5.5vw] leading-[.9] font-semibold font-['Founders Grotesk cond-Lt'] font-medium">{item}</h1>
                  </div>
            </div>
            })}
            
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex items-center justify-between py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
         <p className=' text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
        <div className='start flex item-center gap-5'>


        <div className='px-4  py-2 border-[1px] font-light text-sm uppercase border-zinc-500 rounded-full'>Start the project</div>
        <div className='w-10 h-10 border-[2px] flex items-center justify-center border-zinc-500 rounded-full'>
       <span className=' rotate-[45deg]'>

          <FaArrowUpLong/>
       </span>
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Landing
