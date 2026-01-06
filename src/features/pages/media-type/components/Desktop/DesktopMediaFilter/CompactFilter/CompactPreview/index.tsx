import React from "react";
import PreviewButton from "./PreviewButton";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import useMediaSearch from "@/features/pages/media-type/hooks/useMediaSearch";

type Props = {};

export default function CompactPreview({}: Props) {
   const { handleSearchButton } = useMediaSearch();
   const { dispatch, toggleTemplates } = useMediaFilterContext();
   const handleReset = () => {
      dispatch({ type: "RESET_FILTERS" });
   };

   return (
      <div className="w-full h-full flex p-4 gap-2">
         <div className="flex-1 flex flex-col gap-2">
            <PreviewButton icon="refresh" text="Reset" onClick={handleReset} />
            <PreviewButton
               icon="dashboard_customize"
               text="Templates"
               onClick={toggleTemplates}
            />
         </div>
         <PreviewButton
            icon="search"
            text="Search"
            square
            onClick={handleSearchButton}
         />
      </div>
   );
}
