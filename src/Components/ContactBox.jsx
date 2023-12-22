import React from "react";

const ContactBox = (props) => {
  return (
    <div className="flex items-center gap-2">
      <img className="h-10 w-10" src={props.logo} alt={props.name} />
      <a href={props.url}  target="__blank" className=" hover:border-b border-slate-500 cursor-pointer hover:text-slate-600" >{props.name}</a>
    </div>
  );
};

export default ContactBox;
