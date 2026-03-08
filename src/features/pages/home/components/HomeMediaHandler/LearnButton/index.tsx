import React from "react";

type Props = {};

export default function LearnButton({}: Props) {
   return (
      <button className="w-full aspect-square rounded-full border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center justify-center">
         <div className="uppercase text-2xl 2xl:text-3xl font-light">
            <div className="relative w-min opacity-60">
               Learn
               <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></div>
            </div>
            <div className="relative w-min">
               More
               <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></div>
            </div>
         </div>
      </button>
   );
}
