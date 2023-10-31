import React from "react";
import bg from "../imgs/bg-1.png"
import logo from "../imgs/logo.png"

 
const Header = () => {
  return (
    <>
     
     <img class="absolute -z-10 right-0 top-0" src={bg} alt=""/>
    <header class="flex items-center justify-center h-[84px]">
        <div class="container mx-auto flex justify-between ">
            <div class="logo-holder w-32">
                <img src={logo} alt=""/>
            </div>
           
            <nav class=" flex md:flex-row md:gap-10 items-center justify-between text-white flex-col ">
                <ul class="">
                    <li class="text-sm md:inline-block block mx-1 uppercase"><a class="underline" href="#">our team</a></li>
                    <li class="text-sm md:inline-block block mx-1 uppercase"><a class="underline" href="#">tokens</a></li>
                    <li class="text-sm md:inline-block block mx-1 uppercase"><a class="underline" href="#">connect wallet</a></li>
                    <li class="text-sm md:inline-block block mx-1 uppercase"><a class="underline" href="#">lightpaper</a></li>
                </ul>
                <ul class="">
                    <li class="text-sm md:inline-block block mx-1 uppercase"><a class="underline" href="#">sign in</a></li>
                    <li
                        class="main-link py-2 px-5 rounded-full bg-white text-black   ">
                        <a class="underline" href="#">sign up</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    {/* header ends */}

            
 
    

    </>
  );
};
 
export default Header;