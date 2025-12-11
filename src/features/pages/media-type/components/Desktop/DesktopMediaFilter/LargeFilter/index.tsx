import React from "react";
import { motion } from "framer-motion";
import ReactLenis from "lenis/react";

// Filters
import MediaTypeFilter from "../../../MediaFilters/Filters/MediaTypeFilter";
import SortByFilter from "../../../MediaFilters/Filters/SortByFilter";
import RatingFilter from "../../../MediaFilters/Filters/RatingFilter";
import GenresFilter from "../../../MediaFilters/Filters/GenresFilter";
import ReleaseYearFilter from "../../../MediaFilters/Filters/ReleaseYearFilter";
import OriginalLanguageFilter from "../../../MediaFilters/Filters/OriginalLanguageFilter";
import OriginCountryFilter from "../../../MediaFilters/Filters/OriginCountryFilter";
import DurationFilter from "../../../MediaFilters/Filters/DurationFilter";

type Props = {};

export default function LargeFilter({}: Props) {
   return (
      <ReactLenis className="w-full h-full overflow-hidden p-4">
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full"
         >
            <div className="grid gap-4">
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
                  <ReleaseYearFilter />
                  <DurationFilter />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <OriginalLanguageFilter />
                  <OriginCountryFilter />
               </div>
            </div>
         </motion.div>
      </ReactLenis>
   );
}
