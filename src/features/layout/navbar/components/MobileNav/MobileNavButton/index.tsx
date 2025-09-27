import GlassContainer from "@/common/components/GlassContainer";
import React from "react";

type Props = {
   onClick: () => void;
   icon: string;
};

export default function MobileNavButton({ onClick, icon }: Props) {
   return (
      <GlassContainer
         el="button"
         onClick={onClick}
         className="absolute top-0 right-0 flex items-center justify-center w-16 aspect-square z-50"
      >
         <span className="material-symbols-outlined">{icon}</span>
      </GlassContainer>
   );
}
