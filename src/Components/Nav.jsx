import React, { useState,useEffect,useRef } from "react";
import Navitems from "./Navitems";
import Logo from "../Assets/Black.png";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const navButtonRef = useRef(null);

  useEffect(() => {
    const ClickOutside = (event) => {
      if (navButtonRef.current && !navButtonRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', ClickOutside);

    return () => {
      document.removeEventListener('click',ClickOutside);
    };
  }, []);
  const handleToggle = () => {
    setOpen(prevState => !prevState);
  };
  const clipPath ={clipPath: 'polygon(49.94543% 0%, 49.146605% 0.56499168%, 47.908524% 1.8619327%, 46.53612% 3.2937721%, 45.334324% 4.2634587%, 44.449473% 4.6785326%, 43.75% 4.8902239%, 43.123985% 4.967017%, 42.459505% 4.9773959%, 32.434877% 4.9773959%, 22.41025% 4.9773959%, 12.385622% 4.9773959%, 2.3609941% 4.9773959%, 1.7494639% 5.0755373%, 0.9648305% 5.3952797%, 0.28803037% 5.9746007%, 0% 6.8514776%, 0% 29.608196%, 0% 52.364914%, 0% 75.121632%, 0% 97.87835%, 0.17916238% 98.658483%, 0.67451585% 99.313006%, 1.4228599% 99.763343%, 2.3609941% 99.930917%, 25.989505% 99.930917%, 49.618015% 99.930917%, 73.246526% 99.930917%, 96.875036% 99.930917%, 97.979739% 99.839309%, 98.960507% 99.515581%, 99.662509% 98.886379%, 99.930917% 97.87835%, 99.930917% 75.233185%, 99.930917% 52.588019%, 99.930917% 29.942854%, 99.930917% 7.2976888%, 99.75287% 6.3432143%, 99.283323% 5.6113835%, 98.619164% 5.1426321%, 97.857283% 4.9773959%, 87.768866% 4.9773959%, 77.680448% 4.9773959%, 67.592031% 4.9773959%, 57.503614% 4.9773959%, 56.936197% 4.9640164%, 56.17412% 4.8766449%, 55.305914% 4.6444314%, 54.420113% 4.1965263%, 53.323874% 3.214925%, 51.989005% 1.8085795%, 50.75102% 0.54707587%)'}
  return (
    <nav className="w-full flex h-20 justify-around items-center mt-5">
      <div>
        <img className=" w-32" src={Logo} alt="Name" />
      </div>
      <div className=" relative md:static">
        <div ref={navButtonRef} onClick={handleToggle} className="md:hidden flex items-center justify-center gap-x-[6px] cursor-pointer p-2">
          <div className=" w-[10px] h-[10px] rounded-full bg-black"></div>
          <div className=" w-[10px] h-[10px] rounded-full bg-black"></div>
          <div className=" w-[10px] h-[10px] rounded-full bg-black"></div>
        </div>
        <ol
          style={clipPath}
          className={`flex flex-col w-0 h-0 translate-x-[-35%] translate-y-[0%] md:flex-row absolute md:translate-x-0 md:translate-y-0 md:w-auto md:h-auto md:static text-xl md:gap-6 md:items-center transition-all duration-300 ${
            isOpen
              ? " p-24 md:p-0 justify-around items-center w-[123px] h-[250px] translate-x-[10px] translate-y-[10px] bg-black/[.05] md:bg-white"
              : null
          } `}
        >
          <Navitems visib = {isOpen?'visible':'invisible md:visible'} name="About" id="#about" />
          <Navitems visib = {isOpen?'visible':'invisible md:visible'} name="Skills" id="#skill" />
          <Navitems visib = {isOpen?'visible':'invisible md:visible'} name="Certificates" id="#certificate" />
          <Navitems visib = {isOpen?'visible':'invisible md:visible'} name="Projects" id="#projects" />
          <Navitems visib = {isOpen?'visible':'invisible md:visible'} name="Contact" id="#contact" />
        </ol>
        </div>
    </nav>
  );
};

export default Nav;
