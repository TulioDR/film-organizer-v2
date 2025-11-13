import GlassContainer from "@/common/components/GlassContainer";
import React, { useState } from "react";

type Props = {
   onClick: () => void;
   DURATION: number;
};

export default function FilterOpenButton({ onClick, DURATION }: Props) {
   const [showIcon, setShowIcon] = useState(true);

   const onLayoutAnimationComplete = () => setShowIcon(true);
   const onLayoutAnimationStart = () => setShowIcon(false);

   return (
      <GlassContainer
         layoutId="filter"
         el="button"
         transition={{ duration: DURATION }}
         style={{ borderRadius: 8 }}
         onClick={onClick}
         onLayoutAnimationStart={onLayoutAnimationStart}
         onLayoutAnimationComplete={onLayoutAnimationComplete}
         className="h-full aspect-square flex items-center justify-center group"
      >
         {showIcon && (
            <div className="group-hover:scale-150 duration-100 flex items-center justify-center">
               <span className="material-symbols-outlined">filter_alt</span>
            </div>
         )}
      </GlassContainer>
   );
}
