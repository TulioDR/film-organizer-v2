import React from "react";
import Reel from "./Reel";

type Props = {};

export default function ReelsBackground({}: Props) {
   return (
      <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden">
         <div className="absolute top-0 right-0 rotate-[50deg] translate-x-[40%] z-10">
            <Reel />
         </div>
         <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-[-30deg] opacity-70 scale-95">
            <div className="-translate-y-1/2">
               <Reel />
            </div>
         </div>
         <div className="absolute bottom-0 left-0 rotate-[30deg] -translate-x-1/3 z-10 scale-105">
            <Reel />
         </div>
      </div>
   );
}
