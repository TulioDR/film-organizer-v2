import React from "react";
import CompactPreview from "./CompactFilter/CompactPreview";
import CompactFilter from "./CompactFilter";
import ExpandedFilter from "./ExpandedFilter";
import ExpandedPreview from "./ExpandedFilter/ExpandedPreview";

type Props = {
   isExpanded: boolean;
   showLargeContent: boolean;
   showSmallContent: boolean;
};

export default function FiltersLayout({
   isExpanded,
   showLargeContent,
   showSmallContent,
}: Props) {
   return (
      <div className="flex-1 h-full flex flex-col overflow-hidden relative">
         <div className="h-12 xl:h-16 border-b border-border-light dark:border-border-dark -translate-y-px" />
         <div className="flex-1 w-full overflow-hidden">
            {isExpanded && showLargeContent && <ExpandedFilter />}
            {!isExpanded && showSmallContent && <CompactFilter />}
         </div>
         <div className="h-14 xl:h-16 bg-accent w-full ">
            {isExpanded && showLargeContent && <ExpandedPreview />}
            {!isExpanded && showSmallContent && <CompactPreview />}
         </div>
      </div>
   );
}
