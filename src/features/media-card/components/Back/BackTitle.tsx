import React from "react";

type Props = {
   title: string;
   year: Date;
};

export default function BackTitle({ title, year }: Props) {
   return (
      <div className="overflow-hidden flex-1 w-full p-4">
         <div className="w-full h-full flex items-center justify-center">
            <div className="text-black dark:text-white leading-tight font-semibold">
               <span className="uppercase text-base xl:text-xl 2xl:text-2xl leading-none">
                  {title}
               </span>
               {year && (
                  <span className="text-xs sm:text-sm">
                     {` (${new Date(year).getFullYear()})`}
                  </span>
               )}
            </div>
         </div>
      </div>
   );
}
