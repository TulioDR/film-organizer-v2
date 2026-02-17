import React from "react";

type Props = {
   top?: true;
};

export default function Stick({ top }: Props) {
   return (
      <div
         className={`w-full flex-1 bg-[#D0B07C] flex justify-evenly 
            ${top ? "-rotate-[10deg] origin-bottom-left" : ""}
         `}
      >
         {Array.from({ length: 4 }).map((_, index) => (
            <div
               key={index}
               className={`h-full aspect-[2/3] bg-[#8A7553] ${
                  top ? "skew-x-[48deg]" : "-skew-x-[48deg]"
               }`}
            ></div>
         ))}
      </div>
   );
}
