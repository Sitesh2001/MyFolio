import React from "react";
import Navitems from "./Navitems";
import Logo from "../Assets/Black.png";

const Nav = () => {
    
  return (
    <nav className="w-full flex h-20 justify-around items-center mt-5">
      <div>
        <img className=" w-36" src={Logo} alt="" />
      </div>
      <div>
        <ol className="md:flex hidden text-xl md:gap-6 h-full items-center">
          <Navitems name = "About"/>
          <Navitems name = "Skills"/>
          <Navitems name = "Certificates"/>
          <Navitems name = "Projects"/>
          <Navitems name = "Contact"/>
        </ol>
      </div>
      <div className="md:hidden">
        <a href="home.html" className="text-4xl">
          &#8801;
        </a>
      </div>
    </nav>
  );
};

export default Nav;
