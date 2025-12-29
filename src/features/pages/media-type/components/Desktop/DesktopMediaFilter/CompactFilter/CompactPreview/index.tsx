import React from "react";
import PreviewButton from "./PreviewButton";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import { useRouter } from "next/router";
import useMediaSearch from "@/features/pages/media-type/hooks/useMediaSearch";

type Props = {};

export default function CompactPreview({}: Props) {
   const { dispatch } = useMediaFilterContext();

   const handleReset = () => {
      dispatch({ type: "RESET_FILTERS" });
   };

   const { handleSearchButton } = useMediaSearch();

   return (
      <div className="w-full h-full flex p-4 gap-2">
         <div className="flex-1 flex flex-col gap-2">
            <PreviewButton icon="shuffle" text="Shuffle" onClick={() => {}} />
            <PreviewButton icon="refresh" text="Reset" onClick={handleReset} />
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
