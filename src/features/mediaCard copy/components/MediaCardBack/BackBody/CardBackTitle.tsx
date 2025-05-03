import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function CardBackTitle({ children }: Props) {
   return (
      <div className="uppercase font-semibold font-title text-center leading-tight text-xs sm:text-sm md:text-base">
         {children}
      </div>
   );
}
