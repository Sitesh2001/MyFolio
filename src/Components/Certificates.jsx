import React from "react";
import { SubHeading } from "./SubHeading";
import { CertificateBox } from "./CertificateBox";
import data from "../Data/Data.json";
import Navigation from "./Navigation";

export const Certificates = () => {
  return (
    <>
     <Navigation/>
    <div id="certificate" className="flex flex-col w-full h-auto items-center justify-center gap-y-3 mt-14 md:mt-20">
      <SubHeading p="See My" h1="Training and certificates" />
      {
        data.Certificates.map((data, index)=>{
          return( 
           <CertificateBox i = {index} key={index} title={data.title} logo = {data.logo} brand = {data.brand} year = {data.year} cursor = {data.cursor} skills = {data.skills} link = {data.link}/>
        )})
      }
    </div>
    </>
  );
};
