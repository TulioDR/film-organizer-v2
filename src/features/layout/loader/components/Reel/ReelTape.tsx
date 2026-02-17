import React from "react";

type Props = {
   className: string;
};

export default function ReelTape({ className }: Props) {
   return (
      <div
         className={`w-[200%] aspect-square rounded-full bg-accent brightness-50 absolute ${className}`}
      />
   );
}
