import React from 'react'

const Navitems = (props) => {
  return (
    <li className='hover:text-slate-700 navitem py-1 cursor-pointer hover:after:scale-100 after:scale-x-0 after:scale-y-[1] after:transform after:transition-transform relative after:bg-blue-500'>{props.name}</li>
  )
}

export default Navitems