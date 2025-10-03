import GlassContainer from "@/common/components/GlassContainer";
import React from "react";
import MobileMenuButtonContainer from "./MobileMenuButtonContainer";

type Props = {
   onClick: () => void;
   icon: string;
   position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
   isAnimating: boolean;
};

export default function MobileMenuButton({
   onClick,
   icon,
   position,
   isAnimating,
}: Props) {
   return (
      <MobileMenuButtonContainer position={position} isAnimating={isAnimating}>
         <GlassContainer
            el="button"
            onClick={onClick}
            className="flex items-center justify-center w-16 aspect-square"
         >
            <span className="material-symbols-outlined">{icon}</span>
         </GlassContainer>
      </MobileMenuButtonContainer>
   );
}
