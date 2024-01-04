import React, {useState} from "react";

export const CertificateBox = (props) => {
  
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };
  return (
    <div className={`md:w-[742.5px] flex ${props.i % 2 === 0? 'flex-row':'flex-row-reverse'}`}>
    <div className={`flex justify-center xs:m-[3px] gap-x-2 md:basis-[50.6%] md:justify-start ${props.i % 2 !== 0? 'flex-row':'md:flex-row-reverse'}`}>
        <div className="flex xs:hidden flex-col items-center">
            <div className="w-4 h-4 border rounded-full border-slate-300"></div>
            <div className="h-full border-[1.5px] w-0 mt-1 border-slate-300"></div>
        </div>
        <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
         className="flex flex-col gap-3 xs:p-[14px] xs:pb-5 xs:max-h-[210px] xs:w-[298px] max-h-[180px] w-[355px] transition-all duration-500 ease-in-out p-5 hover:max-h-[210px] cursor-pointer shadow-custom rounded-md border-lg group">
      <div className="flex gap-3 items-center">
        <div className="h-full">
          <img className="w-[60px] h-[70px]" src={props.logo} alt="Internshala" />
        </div>
        <div>
          <h1 className="text-xl xs:text-lg font-semibold">{props.title}</h1>
          <h2 className=" text-black">{props.brand}</h2>
          <span className=" text-slate-900">{props.year}</span>
        </div>
      </div>
      <article className="flex xs:gap-2 gap-3">
        {props.skills.map((url)=>{
          return <div key={url.name} className="border xs:px-2 xs:gap-1 rounded-lg flex gap-2 items-center px-4 py-1">
            <img width="20" src={url.logo} alt={url.name} />
            <span className="text-sm text-slate-700 capitalize">{url.name}</span>
          </div>
        })}
      </article>
      <div
       className={`transition-opacity xs:static xs:opacity-100  ${isHovered ? 'duration-[1.5s]':'duration-[.1s]'} opacity-0 group-hover:opacity-100 mt-2`} >
        <a
          href={props.link}
          target="__blank"
            className={`${props.cursor} py-2.5 mt-5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-slate-50 hover:text-blue-700`}
        >
          Certificate
        </a>
      </div>
    </div>
    </div>
    </div>
  );
};
