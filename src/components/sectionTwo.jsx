import React from "react";

import logoshape from "../imgs/logo-shape.png";

import img2 from "../imgs/2.png";

import img3 from "../imgs/3.png";

import bg2 from "../imgs/bg-2.png";



 
const SectionTwo = () => {
  return (
    <>
     {/* SectionTwo starts */}
     
     <section class="text-center relative grid h-fit gap-20">
        <img class="hidden lg:block absolute -z-[1000] left-0 bottom-[-100px] w-full object-cover" src={bg2}
            alt=""/>
        <div
            class="container grid grid-cols-1 grid-rows-2 gap-10 md:grid-cols-2 md:grid-rows-1 md:gap-0 items-center justify-items-center">
            <div
                class="group  bg-slate-100 p-8 flex flex-col items-center justify-between gap-0 h-[490px] w-[75%] overflow-hidden rounded-2xl shadow-md transition-all duration-300">
                <div>
                    <h2 class="font-bold text-2xl">For <span class="underline text-green">Creators</span></h2>
                    <p class="my-4 xt-lightBlack text-xs opacity-50">Creators can gain independence through a
                        decentralised digital currency system that
                        is
                        dependent on growing and engaging with the community and also their star power. They own
                        10-15% of the total value of the tokens minted.
                    </p>
                </div>
                <div class="w-40">
                    <img class=" "
                        src={img3} alt=""/>
                </div>
            </div>
            <div
                class="group  bg-slate-100 p-8 flex flex-col items-center justify-between gap-0 h-[490px] w-[75%] overflow-hidden rounded-2xl shadow-md transition-all duration-300">
                <div>
                    <h2 class="font-bold text-2xl">For <span class="underline text-blue">Hodlers</span></h2>
                    <p class="my-4 xt-lightBlack text-xs opacity-50">Holding social tokens allows the individual to gain
                        access to benefits including
                        unreleased
                        content, private communities, direct access to celebrity, early-access to tickets and more as
                        well
                        as the ability to trade with other communities in order to gain access to more creator content
                        with
                        early token buyers being the biggest winners as the value of the token increases with more
                        buyers.
                    </p>
                </div>
                <div class="w-40">
                    <img class=" "
                        src={img2} alt=""/>
                </div>
            </div>
        </div>
        <div class="container text-start flex flex-col items-center md:flex-row md:items-start justify-center gap-10">
            <div class="flex gap-5 items-center px-5">
                <img src={logoshape} alt=""/>
                <h2 class="text-blue text-2xl xl:text-white font-extrabold">What makes us different?</h2>
            </div>
            <div class="flex flex-col gap-5 basis-1/2 px-5">
                <p class="font-medium xl:text-white">We would only
                    launch tokens with the express
                    permission of the creators.</p>
                <p class="opacity-50  text-white">
                    There are several thousand celebrities and creators on twitter, tiktok, Instagram and YouTube with
                    followings in the millions who we would be actively engaging before we go viral.
                </p>
                <p class="opacity-50 text-white">
                    We would get them on our
                    platform and they would see the opportunity to create a fan driven digital economy where their
                    digital content can be traded as NFTs and their most loyal fans can have the monetary value of their
                    creator's currency increase significantly as they promote their digital currency across their
                    channels while our native token holders benefit from the Tokners popularity.
                </p>
            </div>
        </div>
     </section>
     
     {/* SectionTwo ends */}
    </>
  );
};
 
export default SectionTwo;















