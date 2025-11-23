import React, { useState } from "react";
import { motion } from "framer-motion";
import FilterCard from "./FilterCard";
import GenresFilter from "./Filters/GenresFilter";
import ReactLenis from "lenis/react";
import MediaTypeFilter from "./Filters/MediaTypeFilter";
import SortByFilter from "./Filters/SortByFilter";
import ReleaseYearFilter from "./Filters/ReleaseYearFilter";
import OriginalLanguageFilter from "./Filters/OriginalLanguageFilter";
import OriginCountryFilter from "./Filters/OriginCountryFilter";
import RatingFilter from "./Filters/RatingFilter";

type Props = {};

export default function LargeFilter({}: Props) {
   const [mediaType, setMediaType] = useState<"movie" | "tv">("movie");

   return (
      <ReactLenis className="w-full h-full overflow-hidden p-8">
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full"
         >
            <div className="grid grid-cols-2 xl:grid-cols-3 xl:grid-rows-4 gap-8">
               <MediaTypeFilter
                  isMovie={mediaType === "movie"}
                  setMediaType={setMediaType}
               />
               <SortByFilter />
               <ReleaseYearFilter />
               <GenresFilter isMovie={mediaType === "movie"} />
               <GenresFilter isMovie={mediaType === "movie"} exclude />
               <RatingFilter />
               <OriginalLanguageFilter />
               <OriginCountryFilter />
               <FilterCard name="Duration range">Hello</FilterCard>
            </div>
         </motion.div>
      </ReactLenis>
   );
}
