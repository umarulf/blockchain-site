import React from "react";


import plane from "../imgs/areplane.png";



 
const Plan = () => {
  return (
    <>

     
     <section class="mt-20 py-20 relative md:mb-10">
        <img class="absolute -z-[1000] right-0 top-0 w-44" src={plane} alt=""/>
        <div class="container">
            <div
                class="w-full grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-5">
                <div class="card ml-10" >
                    <div
                        class="mb-10 border-4 border-x-0 border-t-0 border-dotted rounded-bl-[30%] py-[23px] px-[17px]">
                        <span class="text-green-600 font-bold">Q1</span>
                        <p
                            class="font-bold text-xl mb-3 relative ">
                            2021</p>
                    </div>
                    <p class="text-lightBlack opacity-60 text-sm"><span class="mr-4 text-blue-500 text-sm">01</span>Team
                        set-up</p>
                    <p class="text-lightBlack opacity-60 text-sm"><span class="mr-4 text-blue-500 text-sm">02</span>Launch
                        of
                        informational website</p>
                </div>
                <div class="card ml-10">
                    <div
                        class="mb-10 border-4 border-x-0 border-t-0 border-dotted rounded-bl-[30%] py-[23px] px-[17px]">
                        <span class="text-green-600 font-bold">Q2</span>
                        <p
                            class="font-bold text-xl mb-3 relative ">
                            2021</p>
                    </div>
                    <p class="text-lightBlack opacity-60 text-sm"><span class="mr-4 text-blue-500 text-sm">01</span>Presale
                        and exchange listings</p>
                    <p class="text-lightBlack opacity-60 text-sm"><span
                            class="mr-4 text-blue-500 text-sm">02</span>Blockchain development and launch</p>
                    <p class="text-lightBlack opacity-60 text-sm"><span class="mr-4 text-blue-500 text-sm">03</span>Launch
                        of our MVP</p>
                    <p class="text-lightBlack opacity-60 text-sm"><span
                            class="mr-4 text-blue-500 text-sm">04</span>Influencer agency partnerships</p>
                    <p class="text-lightBlack opacity-60 text-sm"><span
                            class="mr-4 text-blue-500 text-sm">05</span>Marketing and promotion</p>
                </div>
                <div class="card ml-10">
                    <div
                        class="mb-10 border-4 border-x-0 border-t-0 border-dotted rounded-bl-[30%] py-[23px] px-[17px]">
                        <span class="text-green-600 font-bold">Q3</span>
                        <p
                            class="font-bold text-xl mb-3 relative ">
                            2021</p>
                    </div>
                    <p class="text-lightBlack opacity-60 text-sm"><span class="mr-4 text-blue-500 text-sm">01</span>Creator
                        and Influencer partnerships</p>
                    <p class="text-lightBlack opacity-60 text-sm"><span class="mr-4 text-blue-500 text-sm">02</span>creator
                        communities on our platform</p>
                    <p class="text-lightBlack opacity-60 text-sm"><span class="mr-4 text-blue-500 text-sm">03</span>More
                        Marketing and promotion</p>
                </div>
                <div class="card ml-10">
                    <div
                        class="mb-10 border-4 border-x-0 border-t-0 border-dotted rounded-bl-[30%] py-[23px] px-[17px]">
                        <span class="text-green-600 font-bold">Q4</span>
                        <p
                            class="font-bold text-xl mb-3 relative ">
                            2021</p>
                    </div>
                    <p class="text-lightBlack opacity-60 text-sm"><span
                            class="mr-4 text-blue-500 text-sm">01</span>Mainstream partnerships</p>
                    <p class="text-lightBlack opacity-60 text-sm"><span class="mr-4 text-blue-500 text-sm">02</span>500
                        active creator communities</p>
                    <p class="text-lightBlack opacity-60 text-sm"><span class="mr-4 text-blue-500 text-sm">03</span>2Million
                        active community members</p>
                    <p class="text-lightBlack opacity-60 text-sm"><span class="mr-4 text-blue-500 text-sm">03</span>More
                        Marketing and promotion</p>
                </div>
            </div>
        </div>
    </section>


     

     
    </>
  );
};
 
export default Plan;














