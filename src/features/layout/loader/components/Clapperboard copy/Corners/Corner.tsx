import React from "react";

type Props = {
   hor?: true;
   ver?: true;
   className: string;
};

export default function Corner({ hor, ver, className }: Props) {
   return (
      <div
         className={`absolute bg-[#40382E]
         ${hor ? "w-6 h-1" : ""} 
         ${ver ? "w-1 h-6" : ""}
         ${className}`}
      />
   );
}
