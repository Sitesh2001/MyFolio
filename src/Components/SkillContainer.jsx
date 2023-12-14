import React from 'react'
import { SkillItems } from './SkillItems';

const SkillContainer = (p) => {
  return (
    <div className='flex flex-col p-5 min-w-fit w-[400px] border border-slate-500 rounded-xl'>
        <h1 className='text-2xl text-slate-600'>Frontend Development</h1>
        <div className='flex-1 flex flex-col pt-10'>
           <SkillItems icon = {p.icon} name = {p.skill} />
        </div>
    </div>
  )
}

export default SkillContainer