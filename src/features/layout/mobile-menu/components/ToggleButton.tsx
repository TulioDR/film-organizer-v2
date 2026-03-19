import GlassContainer from "@/common/components/GlassContainer";
import React from "react";

type Props = {
   onClick: () => void;
   icon?: string;
};

export default function ToggleButton({ onClick, icon }: Props) {
   return (
      <GlassContainer
         el="button"
         onClick={onClick}
         className="flex items-center justify-center w-12 aspect-square"
      >
         <span className="material-symbols-outlined">{icon}</span>
      </GlassContainer>
   );
}
