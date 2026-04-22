// Filters
import MediaTypeFilter from "../../MediaFilters/Filters/MediaTypeFilter";
import SortByFilter from "../../MediaFilters/Filters/SortByFilter";
import RatingFilter from "../../MediaFilters/Filters/RatingFilter";
import GenresFilter from "../../MediaFilters/Filters/GenresFilter";
import ReleaseDateFilter from "../../MediaFilters/Filters/ReleaseDateFilter";
import OriginalLanguageFilter from "../../MediaFilters/Filters/OriginalLanguageFilter";
import OriginCountryFilter from "../../MediaFilters/Filters/OriginCountryFilter";
import DurationFilter from "../../MediaFilters/Filters/DurationFilter";
import CompactPreview from "./CompactPreview";
import { useCustomLenis } from "@/common/hooks/useCustomLenis";

type Props = {};

export default function CompactFilter({}: Props) {
   const { scrollWrapperRef } = useCustomLenis();

   return (
      <div className="w-full h-full overflow-hidden flex flex-col">
         <div className="flex-1 w-full overflow-hidden">
            <div className="h-full w-full overflow-hidden">
               <div
                  ref={scrollWrapperRef}
                  className="w-full h-full overflow-y-auto p-2 xl:p-4"
               >
                  <div className="w-full h-full grid grid-cols-1 gap-2">
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
               </div>
            </div>
         </div>
         <div className="h-14 xl:h-16 bg-accent w-full ">
            <CompactPreview />
         </div>
      </div>
   );
}
