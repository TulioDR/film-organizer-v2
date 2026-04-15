import { useEffect, useState } from "react";
import ExpandButton from "./ExpandButton";
import OpenButton from "./OpenButton";
import { usePresence } from "framer-motion";
import FilterTitle from "./FilterTitle";
import Responsive from "@/common/components/Responsive";
import { XL_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import FiltersLayout from "./FiltersLayout";
import MediaFilterLayoutContainer from "./MediaFilterLayoutContainer";
import MediaFiltersContainer from "./MediaFiltersContainer";
import PageTitle from "@/common/components/PageTitle";
import { MediaFilterProvider } from "../../context/MediaFilterContext";

type Props = {
   isOpen: boolean;
   toggleIsOpen: () => void;
   mediaType: "movie" | "tv";
   setIsOpen: (isOpen: boolean) => void;
};

export default function MediaFilter({
   isOpen,
   toggleIsOpen,
   mediaType,
   setIsOpen,
}: Props) {
   const [isPresent, safeToRemove] = usePresence();
   const [showSmallContent, setShowSmallContent] = useState(false);
   const [showLargeContent, setShowLargeContent] = useState(false);

   const [isExpanded, setIsExpanded] = useState(false);
   const toggleIsExpanded = () => setIsExpanded((prev) => !prev);
   useEffect(() => setIsExpanded(false), [isOpen]);

   const title = mediaType === "movie" ? "Movies" : "Series";

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
      <MediaFilterProvider mediaType={mediaType}>
         <MediaFiltersContainer>
            <div className="flex absolute top-0 left-0 gap-1 h-12 xl:h-16">
               <OpenButton onClick={toggleIsOpen} isOpen={isOpen} />
               <PageTitle title={title} />
            </div>
            <MediaFilterLayoutContainer isOpen={isOpen} isExpanded={isExpanded}>
               {isOpen && (
                  <>
                     <div className="flex-1 h-full flex flex-col overflow-hidden relative">
                        <div className="h-12 xl:h-16 border-b border-border-light dark:border-border-dark -translate-y-px" />
                        {/* <FiltersLayout
                        isExpanded={isExpanded}
                        showLargeContent={showLargeContent}
                        showSmallContent={showSmallContent}
                     /> */}
                     </div>
                     <Responsive minWidth={XL_MEDIA_QUERY}>
                        <ExpandButton
                           onClick={toggleIsExpanded}
                           isExpanded={isExpanded}
                        />
                     </Responsive>
                  </>
               )}
            </MediaFilterLayoutContainer>
         </MediaFiltersContainer>
      </MediaFilterProvider>
   );
}
