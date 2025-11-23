import GlassContainer from "@/common/components/GlassContainer";
import React from "react";

type Props = {
   onClick: () => void;
   isMovie: boolean;
};

export default function ToggleTypeButton({ onClick, isMovie }: Props) {
   return (
      <GlassContainer
         el="button"
         onMouseDown={(e) => e.preventDefault()}
         onClick={onClick}
         className="h-full overflow-hidden aspect-square relative text-white"
      >
         <div
            className={`w-[200%] h-full flex absolute duration-300 left-0 top-0 ${
               isMovie ? "" : "-translate-x-1/2"
            } `}
         >
            <div className="h-full flex-1 flex items-center justify-center">
               <span className="material-symbols-outlined">movie</span>
            </div>
            <div className="h-full flex-1 flex items-center justify-center">
               <span className="material-symbols-outlined">tv</span>
            </div>
         </div>
         <div className="z-10 absolute bottom-1 left-0 w-full h-1 flex justify-center gap-2">
            <div
               className={`h-full aspect-square rounded-full ${
                  isMovie ? "bg-white" : "bg-white/50"
               }`}
            />
            <div
               className={`h-full aspect-square rounded-full ${
                  !isMovie ? "bg-white" : "bg-white/50"
               }`}
            />
         </div>
      </GlassContainer>
   );
}
