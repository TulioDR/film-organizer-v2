import React from "react";

type Props = {
   overview: string;
};

export default function Overview({ overview }: Props) {
   return (
      <div className="hidden sm:block text-xs text-gray-700 leading-tight relative flex-1 overflow-hidden">
         <p>{overview}</p>
         <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-white to-transparent" />
      </div>
   );
}
