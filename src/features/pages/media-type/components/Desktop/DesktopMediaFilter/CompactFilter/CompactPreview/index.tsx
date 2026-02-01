import React from "react";
import PreviewButton from "./PreviewButton";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import useMediaSearch from "@/features/pages/media-type/hooks/useMediaSearch";

type Props = {};

export default function CompactPreview({}: Props) {
   const { handleSearchButton } = useMediaSearch();
   const { dispatch } = useMediaFilterContext();
   const handleReset = () => {
      dispatch({ type: "RESET_FILTERS" });
   };

   return (
      <div className="w-full h-full flex p-3 gap-2">
         <PreviewButton
            vertical
            icon="refresh"
            text="Reset"
            onClick={handleReset}
            square
         />
         <PreviewButton
            vertical
            icon="search"
            text="Search"
            onClick={handleSearchButton}
         />
      </div>
   );
}
