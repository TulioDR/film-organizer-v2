import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ExpandButton from "./ExpandButton";
import OpenButton from "./OpenButton";
import FilterContainer from "./FilterContainer";
import SmallFilter from "./SmallFilter";
import LargeFilter from "./LargeFilter";

type Props = {
   title: string;
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MediaFilter({ title, isOpen, setIsOpen }: Props) {
   const toggleOpen = () => setIsOpen((prev) => !prev);

   const DURATION = 0.3;

   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => setIsMounted(true), []);

   const [isExpanded, setIsExpanded] = useState(false);
   const toggleExpand = () => setIsExpanded((prev) => !prev);

   useEffect(() => setIsExpanded(false), [isOpen]);

   const [showSmallFilter, setShowSmallFilter] = useState(false);
   const [showLargeFilter, setShowLargeFilter] = useState(false);

   const onAnimationStart = () => {
      setShowSmallFilter(false);
      setShowLargeFilter(false);
   };
   const onAnimationComplete = (e: any) => {
      if (e.height !== "100%") return;
      setShowSmallFilter(isOpen && !isExpanded);
      setShowLargeFilter(isOpen && isExpanded);
   };

   if (!isMounted) return <></>;
   return createPortal(
      <div className="fixed top-0 left-0 px-32 h-screen w-full pt-32 pb-4 pointer-events-none z-20">
         <div className="w-full h-full relative">
            <div className="absolute left-16 pl-2 top-0 h-16 flex items-center">
               <span className="text-6xl uppercase font-thin">{title}</span>
            </div>
            <FilterContainer
               isOpen={isOpen}
               isExpanded={isExpanded}
               DURATION={DURATION}
               onAnimationStart={onAnimationStart}
               onAnimationComplete={onAnimationComplete}
            >
               <div className="flex-1 h-full flex flex-col items-start">
                  <OpenButton onClick={toggleOpen} />
                  {showSmallFilter && <SmallFilter />}
                  {showLargeFilter && <LargeFilter />}
               </div>
               {isOpen && (
                  <ExpandButton
                     onClick={toggleExpand}
                     isExpanded={isExpanded}
                  />
               )}
            </FilterContainer>
         </div>
      </div>,
      document.body
   );
}
