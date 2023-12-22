import React from 'react'
import { FaMedal } from "react-icons/fa6";

export const TextContainer = (props) => {
  return (
    <div className='bg-white border border-gray-300 rounded-xl p-6 w-[230px] shadow-md hover:shadow-lg'>
      <div className='text-yellow-500 mb-4'>
        <FaMedal className='text-4xl' />
      </div>
      <h1 className='text-2xl font-semibold mb-2 capitalize'>{props.name}</h1>
      <time className='text-gray-600 text-sm mb-4'>{props.year}</time>
      <h2 className='text-lg font-medium text-gray-800 capitalize'>{props.designation}</h2>
    </div>
  )
}
