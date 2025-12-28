import React from "react";
import { motion } from "framer-motion";
import ReactLenis from "lenis/react";

// Filters
import MediaTypeFilter from "../../../MediaFilters/Filters/MediaTypeFilter";
import SortByFilter from "../../../MediaFilters/Filters/SortByFilter";
import RatingFilter from "../../../MediaFilters/Filters/RatingFilter";
import GenresFilter from "../../../MediaFilters/Filters/GenresFilter";
import ReleaseDateFilter from "../../../MediaFilters/Filters/ReleaseDateFilter";
import OriginalLanguageFilter from "../../../MediaFilters/Filters/OriginalLanguageFilter";
import OriginCountryFilter from "../../../MediaFilters/Filters/OriginCountryFilter";
import DurationFilter from "../../../MediaFilters/Filters/DurationFilter";

type Props = {};

export default function CompactFilter({}: Props) {
   return (
      <div className="h-full w-full pr-2 overflow-hidden">
         <ReactLenis className="w-full h-full overflow-y-auto pl-4 py-4 pr-2">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.2 }}
               className="w-full h-full grid grid-cols-1 gap-4"
            >
               <MediaTypeFilter />
               <SortByFilter />
               <RatingFilter />
               <GenresFilter small />
               <GenresFilter small exclude />
               <ReleaseDateFilter small />
               <DurationFilter />
               <OriginalLanguageFilter />
               <OriginCountryFilter />
            </motion.div>
         </ReactLenis>
      </div>
   );
}
