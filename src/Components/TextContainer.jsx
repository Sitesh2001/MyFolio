import React from 'react'
import { FaMedal } from "react-icons/fa6";

export const TextContainer = (props) => {
  return (
    <div className='border flex flex-col items-center justify-center border-slate-600 rounded-3xl p-5 w-[230px]'>
        <div><FaMedal /></div>
        <h1 className='text-3xl font-bold'>{props.name}</h1>
        <time>{props.year}</time>
        <h2>{props.designation}</h2>
    </div>
  )
}
