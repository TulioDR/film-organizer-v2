import React from "react";

type Props = {
   dropdown?: true;
   icon: string;
};

export default function SidebarIcon({ dropdown, icon }: Props) {
   return (
      <span
         className={`material-symbols-outlined !relative ${
            dropdown ? "!text-xl" : ""
         }`}
      >
         {icon}
      </span>
   );
}
