import React from "react";

type Props = {
   isSelected: boolean;
   icon: string;
};

export default function Icon({ isSelected, icon }: Props) {
   return (
      <span
         style={isSelected ? { fontVariationSettings: `"FILL" 1` } : {}}
         className={`material-symbols-outlined !text-center !flex-shrink-0 !text-xl !relative ${
            isSelected ? "text-white" : ""
         }`}
      >
         {icon}
      </span>
   );
}
