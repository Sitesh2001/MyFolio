import React, {useState} from "react";
import Hamburger from "hamburger-react";
import Navitems from "./Navitems";
import Logo from "../Assets/Black.png";

const Nav = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className="w-full flex h-20 justify-around items-center mt-5">
      <div>
        <img className=" w-36" src={Logo} alt="Name" />
      </div>
      <div>
        <ol className={`md:flex text-xl md:gap-6 h-full items-center ${isOpen?'flex flex-col':'hidden'} `}>
          <Navitems name = "About" id = "#about" />
          <Navitems name = "Skills" id = "#skill" />
          <Navitems name = "Certificates" id = "#certificate" />
          <Navitems name = "Projects" id = "#projects"/>
          <Navitems name = "Contact" id = "#contact"/>
        </ol>
        <div className="md:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      </div>
    </nav>
  );
};

export default Nav;
