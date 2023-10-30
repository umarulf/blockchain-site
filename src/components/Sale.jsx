import React from "react";



import bg4 from "../imgs/bg-4.png";
import img4 from "../imgs/4.png";
import img5 from "../imgs/5.png";



 
const Sale = () => {
  return (
    <>
     
     
    <section class="relative py-5 md:py-40 mt-40">
        <img class="absolute -z-[9] right-0 bottom-0 hidden md:block w-full object-cover" src={bg4} alt=""/>
        <div class="ml-20 container">
            <h2 class="text-white text-center mb-5 font-bold text-3xl">Presale Details</h2>
            <div
                class="holder grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-5 pb-10">
                <div
                    class="card relative z-10 h-[340px] bg-white p-4 text-center flex flex-col items-center justify-center gap-3 rounded-3xl shadow-xl  ">
                    <span
                        class="text-shadow z-[-1] opacity-25 absolute top-1/4 -translate-y-1/2 text-8xl text-white">01</span>
                    <div>
                        <h4 class="text-2xl font-bold opacity-75 leading-loose tracking-wider">phase One</h4>
                        <p class="text-xl font-bold opacity-75 leading-loose">0/04/2021 - 16/04/2021</p>
                    </div>
                    <div>
                        <p class="leading-relaxed font-bold mb-3 text-xl">1 BNB = 100000 Tokners</p>
                        <p class="leading-relaxed font-bold">Soft cap: 5000 BNB</p>
                        <p class="leading-relaxed font-bold">Hard cap: 10000 BNB</p>
                    </div>
                </div>
                <div
                    class="card relative z-10 h-[340px] bg-white p-4 text-center flex flex-col items-center justify-center gap-3 rounded-3xl shadow-xl lg:translate-y-10  ">
                    <img class="absolute -z-[9] right-0 -bottom-[15px] md:bottom-[-30px] w-[30%] md:block"
                        src={img4} alt=""/>
                    <span
                        class="text-shadow z-[-1] opacity-25 absolute top-1/4 -translate-y-1/2 text-8xl text-white">02</span>
                    <div>
                        <h4 class="text-2xl font-bold opacity-75 leading-loose tracking-wider">phase Two</h4>
                        <p class="text-xl font-bold opacity-75 leading-loose">0/04/2021 - 16/04/2021</p>
                    </div>
                    <div>
                        <p class="leading-relaxed font-bold mb-3 text-xl">1 BNB = 100000 Tokners</p>
                        <p class="leading-relaxed font-bold">Soft cap: 5000 BNB</p>
                        <p class="leading-relaxed font-bold">Hard cap: 10000 BNB</p>
                    </div>
                    <img class="absolute -z-[9] -left-4 -bottom-[15px] md:bottom-[-30px] w-[30%] md:block"
                        src={img5} alt=""/>
                </div>
                <div
                    class="card relative z-10 h-[340px] bg-white p-4 text-center flex flex-col items-center justify-center gap-3 rounded-3xl shadow-xl ">
                    <span
                        class="text-shadow z-[-1] opacity-25 absolute top-1/4 -translate-y-1/2 text-8xl text-white">03</span>
                    <div>
                        <h4 class="text-2xl font-bold opacity-75 leading-loose tracking-wider">phase Three</h4>
                        <p class="text-xl font-bold opacity-75 leading-loose">0/04/2021 - 16/04/2021</p>
                    </div>
                    <div>
                        <p class="leading-relaxed font-bold mb-3 text-xl">1 BNB = 100000 Tokners</p>
                        <p class="leading-relaxed font-bold">Soft cap: 5000 BNB</p>
                        <p class="leading-relaxed font-bold">Hard cap: 10000 BNB</p>
                    </div>
                </div>
            </div>
            <div class="py-10 mt-10 flex flex-col gap-2 text-center text-blue md:text-white">
                <h2 class="font-bold text-3xl">How to buy</h2>
                <p class="text-blue md:text-white">First Connect your Metamask or TrustWallet to the "Connect Wallet" on
                    the Homepage.</p>
                <i class="text-blue md:text-white fa-solid fa-sort-down"></i>
                <p class="text-blue md:text-white ">Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale
                    wallet</p>
                <i class="text-blue md:text-white fa-solid fa-sort-down"></i>
                <p class="text-blue md:text-white ">Then after you will received your $Tokners to your address within
                    24hours. </p>
            </div>
        </div>
    </section>

     

     
    </>
  );
};
 
export default Sale;