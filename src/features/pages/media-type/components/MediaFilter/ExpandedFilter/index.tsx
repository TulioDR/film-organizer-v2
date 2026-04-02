import React from "react";

// Filters
import MediaTypeFilter from "../../MediaFilters/Filters/MediaTypeFilter";
import SortByFilter from "../../MediaFilters/Filters/SortByFilter";
import RatingFilter from "../../MediaFilters/Filters/RatingFilter";
import GenresFilter from "../../MediaFilters/Filters/GenresFilter";
import ReleaseDateFilter from "../../MediaFilters/Filters/ReleaseDateFilter";
import OriginalLanguageFilter from "../../MediaFilters/Filters/OriginalLanguageFilter";
import OriginCountryFilter from "../../MediaFilters/Filters/OriginCountryFilter";
import DurationFilter from "../../MediaFilters/Filters/DurationFilter";
import FiltersContainer from "./FiltersContainer";

type Props = {};

export default function ExpandedFilter({}: Props) {
   return (
      <div className="w-full h-full flex flex-col overflow-hidden">
         <FiltersContainer>
            <div className="grid grid-cols-3 gap-4">
               <MediaTypeFilter />
               <SortByFilter />
               <RatingFilter />
            </div>
            <div className="grid grid-cols-2 gap-4">
               <GenresFilter />
               <GenresFilter exclude />
            </div>
            <div className="grid grid-cols-3 gap-4">
               <ReleaseDateFilter />
               <DurationFilter />
            </div>
            <div className="grid grid-cols-2 gap-4">
               <OriginalLanguageFilter />
               <OriginCountryFilter />
            </div>
         </FiltersContainer>
      </div>
   );
}
