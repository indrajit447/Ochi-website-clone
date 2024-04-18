import { motion, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap/all';



const Featured = () => {
 const cards=[ useAnimation(),useAnimation()];
  const handlehover=(index)=>{
     cards[index].start({y:"0"})
  }
  const handlehoverEnd=(index)=>{
     cards[index].start({y:"100%"})
  }
 
  return (
    <div className=' w-full py-20 '>
      <div className=' w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl tracking-tight font-["Neue_Montreal"]'>Features</h1>
      </div>
      <div className=' px-20'>

        <div className='cards flex gap-10 mt-10'>
          <motion.div 
          onHoverStart={()=>handlehover(0)} 
          onHoverEnd={()=>handlehoverEnd(0)}
           className='cardcontainer  w-1/2 h-[75vh] relative'>
            <h1 className='absolute flex  text-[#CDEA68] overflow-hidden z-[9] text-8xl leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 '>
            {"FYDE".split('').map((item,index)=>(
             <motion.span 
             initial={{y:"100%"}}
             animate={cards[0]}
             transition={{ease:[0.22, 1, 0.36, 1] , delay:index*.05}}
             className=' inline-block '>{item}
             </motion.span>
          
          ))}
            </h1>
            <div className='card w-full h-full bg-green-500 rounded-xl overflow-hidden'>
              <img className=' w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </ motion.div>

          <motion.div 
          onHoverStart={()=>handlehover(1)} 
          onHoverEnd={()=>handlehoverEnd(1)}
          className='cardcontainer  relative w-1/2 h-[75vh]  '>
          <h1 className='absolute  flex overflow-hidden text-[#CDEA68] z-[9] text-8xl leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 '>
          {"VISE".split('').map((item,index)=>(
             <motion.span 
             initial={{y:"100%"}}
             animate={cards[1]}
             transition={{ease:[0.22, 1, 0.36, 1] , delay:index*.05}}
             className=' inline-block '>{item}
             </motion.span>
          
          ))}
          </h1>
            <div className='card w-full h-full bg-green-500 rounded-xl overflow-hidden '>
              <img className=' w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </motion.div>
        </div>

      </div>

    </div>
  )
}

export default Featured
