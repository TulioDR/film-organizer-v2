import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function SideSubtitle({ children }: Props) {
   return (
      <div className="text-sm uppercase w-full text-text-2 font-title tracking-widest truncate">
         {children}
      </div>
   );
}
