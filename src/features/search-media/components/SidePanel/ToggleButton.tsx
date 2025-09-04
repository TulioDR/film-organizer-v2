import GlassContainer from "@/common/components/GlassContainer";
import React from "react";

type Props = {
   onClick: () => void;
   isOpen: boolean;
   icon: string;
   showBorder: boolean;
};

export default function ToggleButton({
   onClick,
   isOpen,
   icon,
   showBorder,
}: Props) {
   return (
      <div className="absolute top-1/2 -translate-y-1/2 lg:right-4 xl:right-8 pointer-events-auto">
         <GlassContainer
            el="button"
            onClick={onClick}
            className={`w-16 aspect-square flex items-center justify-center hover:bg-gray-200 hover:text-black 
               ${isOpen ? "text-black bg-gray-200 " : "text-white"}
               ${showBorder ? "rounded-l-none border-l-0" : ""}
            `}
         >
            <span className="material-symbols-outlined">{icon}</span>
         </GlassContainer>
      </div>
   );
}
