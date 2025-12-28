import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ExpandButton from "./ExpandButton";
import OpenButton from "./OpenButton";
import FilterContainer from "./FilterContainer";
import CompactFilter from "./CompactFilter";
import { MediaFilterProvider } from "../../../context/MediaFilterContext";
import ExpandedFilter from "./ExpandedFilter";
import ExpandedPreview from "./ExpandedFilter/ExpandedPreview";
import CompactPreview from "./CompactFilter/CompactPreview";

type Props = {
   title: string;
   isOpen: boolean;
   toggleIsOpen: () => void;
   isExpanded: boolean;
   toggleIsExpanded: () => void;
};

export default function DesktopMediaFilter({
   title,
   isOpen,
   toggleIsOpen,
   isExpanded,
   toggleIsExpanded,
}: Props) {
   const DURATION = 0.3;

   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => setIsMounted(true), []);

   const [showSmallFilter, setShowSmallFilter] = useState(false);
   const [showLargeFilter, setShowLargeFilter] = useState(false);

   useEffect(() => {
      setShowSmallFilter(false);
      setShowLargeFilter(false);
   }, [isExpanded, isOpen]);
   const onAnimationComplete = (e: any) => {
      if (e.height !== "100%") return;
      console.log("running complete");
      setShowSmallFilter(isOpen && !isExpanded);
      setShowLargeFilter(isOpen && isExpanded);
   };

   const showCompact = showSmallFilter && isOpen && !isExpanded;
   const showExpanded = showLargeFilter && isOpen && isExpanded;

   if (!isMounted) return <></>;
   return createPortal(
      <div className="fixed top-0 left-0 px-32 h-screen w-full pt-32 pb-4 pointer-events-none z-20">
         <div className="w-full h-full relative">
            <div className="absolute left-16 pl-2 top-0 h-16 flex items-center">
               <span className="text-6xl uppercase font-thin">{title}</span>
            </div>
            <MediaFilterProvider>
               <FilterContainer
                  isOpen={isOpen}
                  isExpanded={isExpanded}
                  DURATION={DURATION}
                  onAnimationComplete={onAnimationComplete}
               >
                  <div className="flex-1 h-full flex flex-col overflow-hidden">
                     <div className="h-16 border-b border-border-light dark:border-border-dark flex justify-between">
                        <OpenButton onClick={toggleIsOpen} />
                     </div>
                     <div className="flex-1 w-full overflow-hidden">
                        {showCompact && <CompactFilter />}
                        {showExpanded && <ExpandedFilter />}
                     </div>
                     <div className="h-28 bg-accent w-full">
                        {showCompact && <CompactPreview />}
                        {showExpanded && <ExpandedPreview />}
                     </div>
                  </div>
                  {isOpen && (
                     <ExpandButton
                        onClick={toggleIsExpanded}
                        isExpanded={isExpanded}
                     />
                  )}
               </FilterContainer>
            </MediaFilterProvider>
         </div>
      </div>,
      document.body
   );
}
