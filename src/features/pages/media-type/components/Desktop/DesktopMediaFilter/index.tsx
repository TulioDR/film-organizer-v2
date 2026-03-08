import React, { useEffect, useState } from "react";
import ExpandButton from "./ExpandButton";
import OpenButton from "./OpenButton";
import CompactFilter from "./CompactFilter";
import { MediaFilterProvider } from "../../../context/MediaFilterContext";
import ExpandedFilter from "./ExpandedFilter";
import ExpandedPreview from "./ExpandedFilter/ExpandedPreview";
import CompactPreview from "./CompactFilter/CompactPreview";
import { animate, usePresence, motion, AnimatePresence } from "framer-motion";

type Props = {
   title: string;
   isOpen: boolean;
   toggleIsOpen: () => void;
   isExpanded: boolean;
   toggleIsExpanded: () => void;
   mediaType: "movie" | "tv";
};

export default function DesktopMediaFilter({
   title,
   isOpen,
   toggleIsOpen,
   isExpanded,
   toggleIsExpanded,
   mediaType,
}: Props) {
   const [showSmallContent, setShowSmallContent] = useState(false);
   const [showLargeContent, setShowLargeContent] = useState(false);
   const CONTAINER_CLASS = "animated-filter-container";

   const [isPresent, safeToRemove] = usePresence();

   useEffect(() => {
      const CONTAINER = `.${CONTAINER_CLASS}`;
      setShowSmallContent(false);
      setShowLargeContent(false);
      if (!isPresent) {
         const exitAnimation = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            await animate(
               CONTAINER,
               { width: "64px", height: "64px", opacity: 0 },
               { duration: 0.2 },
            );
            safeToRemove();
         };
         exitAnimation();
         return;
      }
      const startAnimation = async () => {
         await new Promise((resolve) => setTimeout(resolve, 50));
         const dims = !isOpen
            ? { width: "64px", height: "64px" }
            : isExpanded
              ? { width: "100%", height: "100%" }
              : { width: "410px", height: "100%" };

         await animate(CONTAINER, dims, { duration: 0.2 });
         if (!isOpen) return;
         isExpanded ? setShowLargeContent(true) : setShowSmallContent(true);
      };
      startAnimation();
   }, [isOpen, isExpanded, animate, CONTAINER_CLASS, isPresent]);

   return (
      <div className="fixed top-0 left-0 px-32 h-screen w-full pt-44 pb-4 pointer-events-none z-20">
         <div className="w-full h-full relative">
            <div className="absolute left-16 pl-2 top-0 h-16 flex items-center z-20 overflow-hidden">
               <AnimatePresence mode="wait" propagate>
                  <motion.div
                     key={title}
                     initial={{ y: "100%" }}
                     animate={{ y: "0%" }}
                     exit={{ y: "-100%" }}
                     transition={{ duration: 0.4 }}
                     className="h-full flex items-center"
                  >
                     <span className="text-6xl uppercase font-thin">
                        {title}
                     </span>
                  </motion.div>
               </AnimatePresence>
            </div>
            <MediaFilterProvider mediaType={mediaType}>
               <motion.div
                  initial={{ width: "64px", height: "64px", opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`relative pointer-events-auto ${CONTAINER_CLASS}`}
               >
                  <OpenButton onClick={toggleIsOpen} isOpen={isOpen} />
                  <div className="w-full h-full flex bg-primary-light dark:bg-primary-dark border border-border-light dark:border-border-dark rounded-lg overflow-hidden">
                     {isOpen && (
                        <>
                           <div className="flex-1 h-full flex flex-col overflow-hidden relative">
                              <div className="h-16 border-b border-border-light dark:border-border-dark -translate-y-px" />
                              <div className="flex-1 w-full overflow-hidden">
                                 {showSmallContent && <CompactFilter />}
                                 {showLargeContent && <ExpandedFilter />}
                              </div>
                              <div className="h-24 bg-accent w-full">
                                 {showSmallContent && <CompactPreview />}
                                 {showLargeContent && <ExpandedPreview />}
                              </div>
                           </div>
                           <ExpandButton
                              onClick={toggleIsExpanded}
                              isExpanded={isExpanded}
                           />
                        </>
                     )}
                  </div>
               </motion.div>
            </MediaFilterProvider>
         </div>
      </div>
   );
}
