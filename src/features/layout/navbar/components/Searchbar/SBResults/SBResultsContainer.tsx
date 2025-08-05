import GlassContainer from "@/common/components/GlassContainer";
import React, { useEffect } from "react";

type Props = {
   children: React.ReactNode;
   resultsLength: number;
   setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function SBResultsContainer({
   children,
   resultsLength,
   setCurrentIndex,
}: Props) {
   const handleKey = (e: KeyboardEvent) => {
      if (!resultsLength) return;
      const arrowUp = e.key === "ArrowUp";
      const arrowDown = e.key === "ArrowDown";
      if (!arrowUp && !arrowDown) return;
      e.preventDefault();

      if (arrowUp) {
         setCurrentIndex((current) => {
            if (current === 0) return null;
            if (current === null) return resultsLength - 1;
            return current - 1;
         });
      }
      if (arrowDown) {
         setCurrentIndex((current) => {
            if (current === resultsLength - 1) return null;
            if (current === null) return 0;
            return current + 1;
         });
      }
   };

   useEffect(() => {
      document.addEventListener("keydown", handleKey);
      return () => {
         document.removeEventListener("keydown", handleKey);
      };
   });

   return (
      <ul className="absolute top-full left-0 w-full">
         <GlassContainer className="relative py-4 border-t-0 rounded-t-none overflow-hidden flex flex-col gap-1">
            {children}
         </GlassContainer>
      </ul>
   );
}
