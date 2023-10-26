import React from "react";

import img1 from "../imgs/1.png";

 
const SectionOne = () => {
  return (
    <>
     {/* SectionOne starts */}
     <section class="py-10 h-[calc(100vh_-_84px)] flex items-center justify-center mb-10">
        <div
            class="container flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-5 md:gap-10">
            <div>
                <span class=" text-blue-500 font-bold ">At Tokners are</span>
                <h2 class="font-bold text-2xl mb-5 leading-relaxed">
                    Reimagining social media through the power of the blockchain.
                </h2>
                <p class="text-lightBlack text-xs mb-5 md:mb-7 opacity-50 md:text-xl">
                    We are creating social media 3.0 with influencers, celebrities and creators being able to launch
                    their own digital currency by simply creating a profile with media content posted as Non fungible
                    Tokens that can be owned and traded on the Tokners network
                </p>
                <a class="  text-white bg-green-600 px-7 py-4 rounded-full"
                    href="#">Learn More</a>
            </div>
            <div>
                <img src={img1} alt=""/>
            </div>
        </div>
     </section>
     
     {/* SectionOne ends */}
    </>
  );
};
 
export default SectionOne;