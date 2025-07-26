import React from "react";

type Props = {};

export default function MediaTypePage({}: Props) {
   return (
      <div className=" w-full h-[100svh] pt-44 px-32 pb-8">
         <div className="w-full h-full grid grid-cols-4 grid-rows-2">
            <div className="col-span-2 bg-gradient-to-r from-gray-400 to-gray-200"></div>
            <div className="bg-gradient-to-r from-sky-700 to-sky-500"></div>
            <div className="bg-gradient-to-t row-span-2 from-stone-700 to-stone-500"></div>
            <div className="bg-gradient-to-r from-gray-300 to-gray-100"></div>
            <div className="bg-gradient-to-r col-span-2 from-red-900 to-red-700"></div>
         </div>
      </div>
   );
}
