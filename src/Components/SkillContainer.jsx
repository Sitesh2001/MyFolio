import React from 'react'
// import img from ""

const SkillContainer = (props) => {
  
  return (
    <div className='flex flex-col xs:p-3 p-5 xs:mx-1 xs:w-[335px] w-[400px] md:w-[440px] border border-slate-500 rounded-xl'>
      <h1 className='text-2xl text-slate-600 mb-2'>{props.title}</h1>
      <div className='flex-1 flex flex-col'>
        <div className='flex justify-center items-center xs:p-0 p-3 pt-4 gap-y-2 h-full w-full flex-wrap'>
          {props.data.map((skill,index) => {
            return <div key={index} className="flex flex-[50%] items-center"><div className='flex
             items-center xs:pl-2 pl-4 gap-3 md:pl-10 pt-2'><img className={`w-8 ${skill.name === 'React.JS' || skill.name ==='ReactNative'?'animate-spin animate-duration-[2s]':''}`} src={skill.logo} alt={skill.name} /> <span>{skill.name}</span></div></div>
          })}
        </div>
      </div>
    </div>
  )
}

export default SkillContainer;
