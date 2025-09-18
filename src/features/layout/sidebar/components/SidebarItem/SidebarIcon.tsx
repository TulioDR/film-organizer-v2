import React from "react";

type Props = {
   dropdown?: true;
   icon: string;
   isSelected: boolean;
};

export default function SidebarIcon({ dropdown, icon, isSelected }: Props) {
   return (
      <span
         className={`material-symbols-outlined !relative z-10 pointer-events-none 
            ${dropdown ? "!text-xl" : ""}
            ${isSelected ? "text-white" : "mix-blend-difference"}
         `}
      >
         {icon}
      </span>
   );
}
