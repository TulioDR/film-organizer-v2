import GlassContainer from "@/common/components/GlassContainer";
import React from "react";

type Props = {
   onClick: () => void;
   isOpen: boolean;
   currentPage: number;
   total: number;
};

export default function MainMenuButton({
   onClick,
   isOpen,
   currentPage,
   total,
}: Props) {
   return (
      <GlassContainer
         el="button"
         onClick={onClick}
         className="h-full aspect-square flex gap-0.5 items-center justify-center text-xs"
      >
         {isOpen ? (
            <span className="material-symbols-outlined">close</span>
         ) : (
            <>
               <span className="font-bold">{currentPage}</span>
               <span>/</span>
               <span>{total}</span>
            </>
         )}
      </GlassContainer>
   );
}
