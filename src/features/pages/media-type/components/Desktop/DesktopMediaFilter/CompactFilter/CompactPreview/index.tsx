import React from "react";

type Props = {};

export default function CompactPreview({}: Props) {
   return (
      <div className="w-full h-full flex p-4 gap-2">
         <div className="flex-1 flex flex-col gap-2">
            <div className="bg-black flex-1 w-full rounded flex gap-1 items-center justify-center">
               <span className="material-symbols-outlined">shuffle</span>
               <span className="text-sm">Shuffle</span>
            </div>
            <div className="bg-black flex-1 w-full rounded flex gap-1 items-center justify-center">
               <span className="material-symbols-outlined">refresh</span>
               <span className="text-sm">Reset</span>
            </div>
         </div>
         <button className="h-full aspect-square bg-black rounded flex flex-col items-center justify-center gap-1">
            <span className="material-symbols-outlined">search</span>
            <span className="text-sm">Search</span>
         </button>
      </div>
   );
}
