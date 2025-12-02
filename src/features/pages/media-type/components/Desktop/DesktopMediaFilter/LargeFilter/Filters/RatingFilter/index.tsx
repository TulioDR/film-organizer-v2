import React from "react";
import FilterCard from "../../FilterCard";

type Props = {};

export default function RatingFilter({}: Props) {
   return (
      <FilterCard name="Rating Range">
         <div className="w-full h-full flex items-center px-2">
            <div className="w-full flex flex-col">
               <div className="w-full flex justify-between h-5">
                  {Array.from({ length: 11 }).map((_, i) => (
                     <div key={i} className="w-px h-full bg-black"></div>
                  ))}
               </div>
               <input
                  id="range-slider"
                  type="range"
                  min={0}
                  max={10}
                  className="w-full h-1 bg-black appearance-none cursor-pointer range-lg focus:outline-none z-10"
               />
               <div className="w-full flex justify-between h-5">
                  {Array.from({ length: 11 }).map((_, i) => (
                     <div key={i} className="w-px h-full bg-black"></div>
                  ))}
               </div>
            </div>
         </div>
      </FilterCard>
   );
}
