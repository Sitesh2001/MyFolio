import React, {useState} from "react";

export const CertificateBox = (props) => {
  
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(false);
    // Additional logic when mouse enters
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
    // Additional logic when mouse leaves
  };
  return (
    <div className="flex flex-row-reverse mb-1">
        <div className="flex flex-col items-center">
            <div className="w-4 h-4 border rounded-full"></div>
            <div className="h-full border-[1.5px] w-0 mt-1"></div>
        </div>
        <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
         className="flex flex-col gap-3 transition-all duration-500 ease-in-out max-h-[182px] hover:max-h-[210px] cursor-pointer shadow-custom m-2 rounded-md p-8 border-lg group">
      <div className="flex flex-wrap gap-3 items-center">
        <div className="h-full">
          <img className="w-[60px] h-[70px]" src={props.logo} alt="Internshala" />
        </div>
        <div className="">
          <h1 className="text-xl font-semibold">{props.title}</h1>
          <h2 className=" text-black">{props.brand}</h2>
          <span className=" text-slate-900">{props.year}</span>
        </div>
      </div>
      <article className="flex flex-wrap gap-3">
        {props.skills.map((url)=>{
          return <div key={url.name} className="border rounded-lg flex gap-2 items-center px-4 py-1">
            <img width="20" src={url.logo} alt={url.name} />
            <span className="text-sm text-slate-700 capitalize">{url.name}</span>
          </div>
        })}
      </article>
      <div
       className={`transition-opacity ${isHovered ? 'duration-[1.5s]':'duration-[.1s]'} opacity-0 group-hover:opacity-100 mt-2`}>
        <a
          href={props.link}
          target="__blank"
          className="py-2.5 mt-5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-500 hover:bg-gray-100 hover:text-blue-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Certificate
        </a>
      </div>
    </div>
    </div>
  );
};
