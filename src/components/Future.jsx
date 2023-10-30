import React from "react";


import bg3 from "../imgs/bg-3.png";
import imgs6 from "../imgs/6.png";



 
const Future = () => {
  return (
    <>
     
     
     <section class="relative py-5 md:py-40">
        <img class="absolute w-full h-full -z-[8] right-0 bottom-0 hidden md:block" src={bg3} alt=""/>
        <div class="ml-20 container flex flex-col-reverse md:flex-row">
            <div class="flex flex-col gap-3 basis-1/2">
                <h2 class="font-bold text-2xl ">Tokners is coming</h2>
                <p class="text-xs font-bold ">Cryptocurrency adoption is at less than 1% of the global world population
                    with some
                    countries
                    and entities actively fighting against its mass adoption and the smartest developers and nerds
                    holding the fort.</p>
                <p class="text-lightBlack opacity-60 text-xs">Bitcoin was the first, and it has since grown to thousands
                    of tokens launched all
                    aiming to fix one problem or the other with some quite simply FOMOing the moment. Our goal is
                    to bring mass adoption to the cryptocurrency space by dumbing it down. How far down? So
                    down that even a celebrity can explain it in simple words to their followers and have them
                    download an app, buy into the social currency of their favourite person and watch their
                    investment as is with other cryptocurrency project.</p>
                <p class="text-lightBlack opacity-60 text-xs">We are trying to do to this space what
                    investment apps did for the "nonexistent retail investors". We are gamefying digital currency,
                    bringing in popular faces instead of hard to understand projects to make it the norm and
                    inadvertently being the "gateway drug" for a lot of people to finally give this space a real look.
                </p>
                <p class="text-xs font-bold">A new digital economy is coming. People would be just as powerful as
                    countries and creators
                    would be paid beyond the peanuts that conventional social media platforms can offer. </p>
                <p class="text-lightBlack opacity-60 text-xs">There
                    would be new markets and advertisers with little to offer would not find home there. Like Kanye
                    said, "Personalities would become the new currency, and services would be built on top of them".
                    Well, Kanye didn't exactly say that, but it sounds like something we hope he would say.
                </p>
                <p class="text-lightBlack opacity-60 text-xs">Currency is digital, it has been that way for a while now,
                    but this time there would be no
                    dead
                    presidents on the money, there would people like you on the money, and you would own it
                    because it would make the most sense in the world.</p>
            </div>
            <div
                class=" basis-1/2 relative before:absolute before:w-[75%] before:h-[65%] before:-z-[8] flex items-center justify-center before:rounded-3xl before:shadow-md   ">
                <img class="z-10 " src={imgs6} alt=""/>
            </div>
        </div>
    </section>


     

     
    </>
  );
};
 
export default Future;
