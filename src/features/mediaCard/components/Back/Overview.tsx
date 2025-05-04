import React from "react";

type Props = {
   overview: string;
};

export default function Overview({ overview }: Props) {
   return (
      <div className="hidden sm:block text-xs 2xl:text-sm text-gray-300 leading-tight relative flex-1 overflow-hidden">
         <p>{overview}</p>
         <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-black to-transparent" />
      </div>
   );
}
