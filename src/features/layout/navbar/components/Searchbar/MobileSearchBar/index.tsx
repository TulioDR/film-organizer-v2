import React from "react";

type Props = {};

export default function MobileSearchBar({}: Props) {
   return (
      <div className="w-full h-full flex flex-col">
         <div className="h-16 w-full pl-16">
            <div className="flex-1 px-2 py-2 h-full">
               <input className="w-full h-full bg-white rounded-md shadow-md px-2 text-xs" />
            </div>
         </div>
         <div className="w-full flex-1 overflow-hidden"></div>
      </div>
   );
}
