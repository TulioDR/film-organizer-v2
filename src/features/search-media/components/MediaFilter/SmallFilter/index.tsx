import React from "react";

type Props = {};

export default function SmallFilter({}: Props) {
   return (
      <div className="w-full flex-1 p-4">
         <div className="w-full h-full grid gap-4 grid-cols-2 grid-rows-6">
            {Array.from({ length: 11 }).map((_, index) => (
               <div
                  key={index}
                  className={`bg-background-light dark:bg-background-dark rounded-md ${
                     index === 0 ? "col-span-2" : ""
                  }`}
               ></div>
            ))}
         </div>
      </div>
   );
}
