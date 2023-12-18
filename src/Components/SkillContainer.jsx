import React from 'react'
// import img from ""

const SkillContainer = (props) => {
  
  return (
    <div className='flex flex-col p-5 h-80 w-[400px] md:w-[450px] border border-slate-500 rounded-xl'>
      <h1 className='text-2xl text-slate-600 mb-2'>{props.title}</h1>
      <div className='flex-1 flex flex-col'>
        <div className='flex justify-center items-center p-3 h-full w-full flex-wrap'>
          {props.data.map((skill,index) => {
            return <div key={index} className="flex flex-[50%] items-center"><div className='flex
            w-full items-center pl-8 gap-3 pt-2'><img className='w-8' src={skill.logo} alt={skill.name} /> <span>{skill.name}</span></div></div>
          })}
        </div>
      </div>
    </div>
  )
}

export default SkillContainer;
