import React from 'react'

const Cards = () => {
  return (
    <div className=' w-full h-screen bg-zinc-200 items-center px-32 flex gap-5'>
        <div className='Cardcontainer h-[50vh] w-1/2'>
          <div className='card relative w-full  rounded-xl h-full flex items-center justify-center bg-[#004d23]'>
            <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className=' absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full '>&copy;2019-2022</button>
          </div>
        </div>
        <div className='Cardcontainer flex gap-5 h-[50vh] w-1/2'>
          <div className=' relative card w-full flex items-center justify-center rounded-xl h-full bg-[#192826]'>
            <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
           <button className=' absolute px-5 py-1 border-2  left-10 bottom-10 rounded-full '>RATING 5.0 ON CLUTCH</button>
          </div>
          <div className=' relative card w-full flex items-center justify-center  rounded-xl h-full bg-[#192826]'>
          <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
           <button className=' absolute px-5 py-2 border-2 bottom-10 rounded-full '>BUISNESS BOOTCAMP ALUMNI</button>
          </div>
        </div>
        </div>
        
      
   
  )
}

export default Cards
