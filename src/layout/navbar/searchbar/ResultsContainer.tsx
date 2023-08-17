import React, { useEffect } from "react";

type Props = {
   children: React.ReactNode;
   showResults: boolean;
   results: any[];
   setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function ResultsContainer({
   children,
   showResults,
   results,
   setCurrentIndex,
}: Props) {
   const handleKey = (e: KeyboardEvent) => {
      if (!showResults) return;
      if (!results.length) return;
      const arrowUp = e.key === "ArrowUp";
      const arrowDown = e.key === "ArrowDown";
      if (!arrowUp && !arrowDown) return;
      e.preventDefault();

      if (arrowUp) {
         setCurrentIndex((current) => {
            if (current === 0) return null;
            if (current === null) return results.length - 1;
            return current - 1;
         });
      }
      if (arrowDown) {
         setCurrentIndex((current) => {
            if (current === results.length - 1) return null;
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
      <ul className="absolute top-full left-0 w-full pl-4">
         <div className="relative py-3 bg-secondary-light dark:bg-secondary-dark shadow-lg rounded-b-lg overflow-hidden">
            {children}
         </div>
      </ul>
   );
}
