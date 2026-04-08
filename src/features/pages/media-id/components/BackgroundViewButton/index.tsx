import React from "react";
import GlassContainer from "@/common/components/GlassContainer";
type Props = {
   hideUi: boolean;
   onClick: () => void;
};

export default function BackgroundViewButton({ hideUi, onClick }: Props) {
   return (
      <GlassContainer
         onClick={onClick}
         noHide
         el="button"
         className="fixed bottom-4 right-8 w-16 aspect-square flex items-center justify-center hover:bg-white hover:text-black"
      >
         <span className="material-symbols-outlined">
            {hideUi ? "visibility" : "visibility_off"}
         </span>
      </GlassContainer>
   );
}
