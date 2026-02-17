import React from "react";
import ReelHole from "./ReelHole";
import ReelTape from "./ReelTape";

type Props = {
   spin?: boolean;
};

export default function Reel({ spin }: Props) {
   return (
      <div
         className={`rounded-full bg-accent border border-border-light dark:border-border-dark aspect-square h-full w-full flex items-center justify-center outline outline-4 dark:outline-black outline-white ${
            spin ? "animate-spin" : ""
         }`}
      >
         <div className="w-[85%] aspect-square grid grid-rows-3">
            <div className="flex justify-center">
               <ReelHole>
                  <ReelTape className="top-1/2 left-1/2 -translate-x-1/2" />
               </ReelHole>
            </div>
            <div className="flex justify-between">
               <ReelHole>
                  <ReelTape className="top-1/2 -translate-y-1/2 left-1/2" />
               </ReelHole>
               <div className="flex-1 h-full flex items-center justify-center">
                  <div className="w-1/5 aspect-square rounded-full bg-accent brightness-50"></div>
               </div>
               <ReelHole>
                  <ReelTape className="top-1/2 -translate-y-1/2 right-1/2" />
               </ReelHole>
            </div>
            <div className="flex justify-center">
               <ReelHole>
                  <ReelTape className="bottom-1/2 left-1/2 -translate-x-1/2" />
               </ReelHole>
            </div>
         </div>
      </div>
   );
}
