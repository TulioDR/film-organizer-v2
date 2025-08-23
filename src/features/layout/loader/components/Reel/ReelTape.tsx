import React from "react";

type Props = {
   className: string;
};

export default function ReelTape({ className }: Props) {
   return (
      <div
         className={`w-[200%] aspect-square rounded-full bg-[#8A7553] absolute ${className}`}
      />
   );
}
