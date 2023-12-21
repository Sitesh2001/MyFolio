import React from 'react'
import { FiLink } from "react-icons/fi";
import { FiLink2 } from "react-icons/fi";

const ProjectBox = (p) => {
  return (
    <div style={{background:"url('/Images/eCommerce.jpg')",backgroundSize:"100% 100%", backgroundPosition:"center"}} className="w-[300px] h-[250px] flex justify-center items-center cursor-pointer group">
            <div className='flex relative group justify-center items-center w-0 h-0 invisible group-hover:visible group-hover:w-full group-hover:h-full bg-white/20 backdrop-blur-[2px] backdrop-saturate-50 transition-width transition-height duration-500'>
              <div className=' absolute w-9 h-9 border-t-2 border-l-2 border-slate-500 top-6 left-6'></div>
               <div className='invisible group-hover:visible flex flex-col gap-2 items-center justify-center'>
                <h1 className=' uppercase text-xl font-semibold '>{p.name}</h1>
                <p className=' uppercase text-sm text-slate-700 font-semibold'>{p.subname}</p>
                <div className='flex gap-4'><span title='GitHub' className='text-2xl cursor-pointer hover:text-sky-600'><FiLink2 /></span><span title='Details*' className='text-2xl cursor-pointer hover:text-sky-600'><FiLink /></span></div>
               </div>
               <div className='absolute w-9 h-9 border-b-2 border-r-2 border-slate-500 bottom-6 right-6'></div>
            </div>
    </div>
  )
}

export default ProjectBox