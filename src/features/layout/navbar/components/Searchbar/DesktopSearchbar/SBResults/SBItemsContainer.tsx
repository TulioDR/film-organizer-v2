import ReactLenis from "lenis/react";
import React, { useEffect } from "react";

type Props = {
   children: React.ReactNode;
   resultsLength: number;
   setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function SBItemsContainer({
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
      <ReactLenis className="w-full h-full overflow-hidden">
         <ul className="w-full grid grid-cols-2 gap-y-2 py-4">{children}</ul>
      </ReactLenis>
   );
}
