import React from 'react'

export const SkillItems = (p) => {
  return (
    <div className='flex justify-around items-center p-3'>
        <div className=' w-20 h-8 flex gap-4 items-center flex-row'> {p.icon}  <span>{p.name}</span></div>
        <div className=' w-20 h-8 flex gap-4 items-center flex-row'> {p.icon} <span>{p.name}</span></div>
    </div>
  )
}
