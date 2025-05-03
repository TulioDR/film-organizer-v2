import React from "react";

type Props = {
   title: string;
   overview: string;
   releaseDate: Date;
};

export default function BackBody({ title, overview, releaseDate }: Props) {
   return (
      <div className="overflow-hidden flex flex-col gap-2 flex-1 relative">
         <div className="text-white leading-tight font-semibold">
            <span className="uppercase text-base ">{title}</span>
            {releaseDate && (
               <span className="text-xs sm:text-sm">
                  {` (${new Date(releaseDate).getFullYear()})`}
               </span>
            )}
         </div>
         <p className="hidden sm:block text-xs 2xl:text-sm text-gray-300 leading-tight relative flex-1 overflow-hidden">
            {overview}
            <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-black to-transparent" />
         </p>
      </div>
   );
}
