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
import FilterPreview from "./FilterPreview";

type Props = {};

export default function LargeFilter({}: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.2 }}
         className="w-full h-full flex flex-col overflow-hidden"
      >
         <div className="flex-1 w-full overflow-hidden pr-4">
            <ReactLenis className="w-full h-full overflow-y-scroll">
               <div className="grid gap-4 mb-4 px-4 pt-4 w-full">
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
               </div>
            </ReactLenis>
         </div>
         <FilterPreview />
      </motion.div>
   );
}
