import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function SideSubtitle({ children }: Props) {
   return (
      <div className="ml-5 text-xs uppercase my-3 text-light-text-soft dark:text-dark-text-soft">
         {children}
      </div>
   );
}
