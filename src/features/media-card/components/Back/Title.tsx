import React from "react";

type Props = {
   title: string;
   year: Date;
};

export default function Title({ title, year }: Props) {
   return (
      <div className="text-black leading-tight font-semibold">
         <span className="uppercase text-base xl:text-xl leading-none">
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
