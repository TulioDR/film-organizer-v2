import React from "react";

type Props = {
   title: string;
   year: Date;
};

export default function BackTitle({ title, year }: Props) {
   return (
      <div className="w-full flex-1 overflow-hidden text-black dark:text-white leading-tight font-semibold">
         <span className="uppercase text-base xl:text-3xl min-[1400px]:text-2xl min-[1700px]:text-3xl leading-none">
            {title}
         </span>
         {year && (
            <span className="text-xs sm:text-sm">
               {` (${new Date(year).getFullYear()})`}
            </span>
         )}
      </div>
   );
}
