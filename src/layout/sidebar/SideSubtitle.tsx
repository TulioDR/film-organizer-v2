import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function SideSubtitle({ children }: Props) {
   return (
      <div className="ml-10 text-xs uppercase text-dark-text-soft">
         {children}
      </div>
   );
}
