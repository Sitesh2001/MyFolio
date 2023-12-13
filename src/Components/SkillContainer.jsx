import React from 'react'
import { SiHtml5 } from "react-icons/si";

const SkillContainer = () => {
  return (
    <div className='flex flex-col p-5 h-80 w-[400px] border border-slate-500 rounded-xl'>
        <h1 className='text-2xl text-slate-600'>Frontend Development</h1>
        <div className='flex-1 flex flex-col pt-10'>
           <div className='flex justify-around items-center p-3'>
           <div className=' w-20 h-8 flex gap-4 items-center flex-row'> <SiHtml5 /> <span>HTML5</span></div>
           <div className=' w-20 h-8 flex gap-4 items-center flex-row'> <SiHtml5 /> <span>CSS</span></div>
           </div>
           <div className='flex justify-around items-center p-3'>
           <div className=' w-20 h-8 flex gap-4 items-center flex-row'> <SiHtml5 /> <span>HTML5</span></div>
           <div className=' w-20 h-8 flex gap-4 items-center flex-row'> <SiHtml5 /> <span>CSS</span></div>
           </div>
        </div>
    </div>
  )
}

export default SkillContainer