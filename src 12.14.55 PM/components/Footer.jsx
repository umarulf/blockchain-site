import React from "react";





import logo2 from "../imgs/logo-2.png";
import twitter from "../imgs/twitter.svg";
import facebook from "../imgs/facebook.svg";
import instagram from "../imgs/instagram.svg";
import medium from "../imgs/medium.svg";
import github from "../imgs/github.svg";
import reddit from "../imgs/reddit.svg";
import vector from "../imgs/vector.svg";






 
const Footer = () => {
  return (
    <>
    
     
     <footer class="py-20 bg-slate-900">
        <div class="container text-white">
            <div
                class="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2  lg:grid-cols-3 lg:grid-rows-1 items-center justify-center justify-items-center gap-6">
                <div class=" ">
                    <img src={logo2} alt=""/>
                </div>
                <div class="flex items-center relative gap-3">
                    
                
                    <img className=" border-grep-200 p-3 border-2 rounded-full" src={twitter}  alt=""/>
                
                    <img className=" border-grep-200 p-3 border-2 rounded-full" src={facebook} alt=""/>
                
                    <img className=" border-grep-200 p-3 border-2 rounded-full" src={instagram} alt=""/>
                
                    <img className=" border-grep-200 p-3 border-2 rounded-full" src={medium} alt=""/>
                
                    <img className=" border-grep-200 p-3 border-2 rounded-full" src={github} alt=""/>
                
                    <img className=" border-grep-200 p-3 border-2 rounded-full" src={reddit} alt=""/>
                   
                    
                    
                    
                </div>
                <div class="">
                    <p>© 2021 Tokners. All rights reserved.</p>
                    <div className=" ml-32 flex">
                        <img src={vector} alt="" className="opacity-5"/>
                        <div className=" ml-1 opacity-5 flex items-center text-right underline text-white text-xs font-medium font-['Azo Sans'] leading-none tracking-tight">Design by Oleg Kulik</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
     

     
    </>
  );
};
 
export default Footer;