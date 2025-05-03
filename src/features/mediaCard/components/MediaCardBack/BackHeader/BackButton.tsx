import GlassContainer from "@/components/GlassContainer";
import React from "react";

type Props = {
   onClick: () => void;
};

export default function BackButton({ onClick }: Props) {
   return (
      <GlassContainer
         className="flex items-center justify-center rounded-md h-12 aspect-square absolute top-4 left-4 z-10 hover:bg-white hover:text-black"
         onClick={onClick}
         type="button"
         el="button"
      >
         <span className="material-symbols-outlined">close</span>
      </GlassContainer>
   );
}
