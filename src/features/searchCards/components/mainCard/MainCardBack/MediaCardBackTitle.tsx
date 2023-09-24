import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function MediaCardBackTitle({ children }: Props) {
   return (
      <div className="uppercase font-semibold font-title text-center leading-tight text-sm sm:text-base">
         {children}
      </div>
   );
}
