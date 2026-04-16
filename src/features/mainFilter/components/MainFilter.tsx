import MainFilterContainer from "./MainFilterContainer";

import { useEffect, useState } from "react";
import ExpandButton from "./ExpandButton";
import OpenButton from "./OpenButton";
import { usePresence } from "framer-motion";
import Responsive from "@/common/components/Responsive";
import { XL_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import MainFilterLayoutContainer from "./MainFilterLayoutContainer";
import FilterTitle from "./FilterTitle";

type Props = {
   expandedContent?: React.ReactNode;
   compactContent: React.ReactNode;
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   title: string;
};

export default function MainFilter({
   expandedContent,
   compactContent,
   isOpen,
   setIsOpen,
   title,
}: Props) {
   const [isPresent, safeToRemove] = usePresence();
   const [showSmallContent, setShowSmallContent] = useState(false);
   const [showLargeContent, setShowLargeContent] = useState(false);

   const [isExpanded, setIsExpanded] = useState(false);
   const toggleIsExpanded = () => setIsExpanded((prev) => !prev);
   useEffect(() => setIsExpanded(false), [isOpen]);

   const toggleIsOpen = () => setIsOpen((prev) => !prev);

   useEffect(() => {
      setShowSmallContent(false);
      setShowLargeContent(false);
      const wait = () => new Promise((resolve) => setTimeout(resolve, 200));
      const runAnimations = async () => {
         if (isPresent) {
            if (!isOpen) return;
            await wait();
            isExpanded ? setShowLargeContent(true) : setShowSmallContent(true);
         } else {
            setIsOpen(false);
            await wait();
            safeToRemove();
         }
      };
      runAnimations();
   }, [isOpen, isExpanded, isPresent]);

   return (
      <MainFilterContainer>
         <div className="flex absolute top-0 left-0 gap-1 h-12 xl:h-16">
            <OpenButton onClick={toggleIsOpen} isOpen={isOpen} />
            <FilterTitle title={title} />
         </div>
         <MainFilterLayoutContainer isOpen={isOpen} isExpanded={isExpanded}>
            {isOpen && (
               <>
                  <div className="flex-1 h-full flex flex-col overflow-hidden relative">
                     <div className="h-12 xl:h-16 border-b border-border-light dark:border-border-dark -translate-y-px" />
                     <div className="flex-1 w-full overflow-hidden">
                        {isExpanded && showLargeContent && expandedContent}
                        {!isExpanded && showSmallContent && compactContent}
                     </div>
                  </div>
                  {expandedContent && (
                     <Responsive minWidth={XL_MEDIA_QUERY}>
                        <ExpandButton
                           onClick={toggleIsExpanded}
                           isExpanded={isExpanded}
                        />
                     </Responsive>
                  )}
               </>
            )}
         </MainFilterLayoutContainer>
      </MainFilterContainer>
   );
}
