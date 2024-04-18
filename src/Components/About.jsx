import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className=' w-full  flex border-t-[1px] mt-20 p-10 border-[#a1b562]'>
      <div className='w-1/2'>
        <h1 className='text-7xl'>Our approach:</h1>
        <button className=' px-10 py-6 flex gap-10 items-center bg-zinc-900 mt-10 rounded-full text-white'>Read More
        <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
        </button>
        </div>
        <div className='w-1/2 h-[60vh] bg-[#5d3e2b] rounded-3xl'>
          <img  className=' w-full rounded-3xl 'src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default About
