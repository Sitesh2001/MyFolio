import React from "react";
import { SubHeading } from "./SubHeading";
import { CertificateBox } from "./CertificateBox";
import data from "../Data/Data.json";


export const Certificates = () => {
  return (
    <div className="flex flex-col w-full h-auto items-center justify-center mt-20">
      <SubHeading p="See the" h1="Training and certificates" />
      {
        data.Certificates.map((data, index)=>{
          return( 
           <CertificateBox i = {index} key={index} title={data.title} logo = {data.logo} brand = {data.brand} year = {data.year} skills = {data.skills} link = {data.link}/>
        )})
      }
    </div>
  );
};
