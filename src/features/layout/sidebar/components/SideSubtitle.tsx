import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function SideSubtitle({ children }: Props) {
   return (
      <div className="text-xs uppercase text-text-2 w-10 text-center">
         {children}
      </div>
   );
}
