import React from "react";
import MediaTypeFilter from "../../MediaFilters/Filters/MediaTypeFilter";
import SortByFilter from "../../MediaFilters/Filters/SortByFilter";
import RatingFilter from "../../MediaFilters/Filters/RatingFilter";
import GenresFilter from "../../MediaFilters/Filters/GenresFilter";
import ReleaseDateFilter from "../../MediaFilters/Filters/ReleaseDateFilter";
import DurationFilter from "../../MediaFilters/Filters/DurationFilter";
import OriginalLanguageFilter from "../../MediaFilters/Filters/OriginalLanguageFilter";
import OriginCountryFilter from "../../MediaFilters/Filters/OriginCountryFilter";
import PreviewButton from "../../Desktop/DesktopMediaFilter/CompactFilter/CompactPreview/PreviewButton";
import useMediaFilterContext from "../../../context/MediaFilterContext";
import useMediaSearch from "../../../hooks/useMediaSearch";
import MobilePreview from "./MobilePreview";

type Props = {};

export default function MobileMediaFilter({}: Props) {
   const { dispatch } = useMediaFilterContext();

   const handleReset = () => {
      dispatch({ type: "RESET_FILTERS" });
   };

   const { handleSearchButton } = useMediaSearch();

   return (
      <div className="w-full h-full overflow-hidden flex flex-col">
         <div className="flex flex-col gap-4 flex-1 overflow-y-scroll p-4">
            <MediaTypeFilter />
            <SortByFilter />
            <RatingFilter />
            <GenresFilter small />
            <GenresFilter small exclude />
            <ReleaseDateFilter small />
            <DurationFilter />
            <OriginalLanguageFilter />
            <OriginCountryFilter />
         </div>
         <div className="w-full flex flex-col bg-accent">
            <MobilePreview />
            <div className="w-full h-16 flex pl-16">
               <div className="h-full w-full p-2 flex gap-2">
                  <PreviewButton
                     icon="refresh"
                     text="Reset"
                     onClick={handleReset}
                  />
                  <PreviewButton
                     icon="search"
                     text="Search"
                     onClick={handleSearchButton}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
