import React, { useState } from "react";
import { motion } from "framer-motion";
import FilterCard from "./FilterCard";
import GenresFilter from "./Filters/GenresFilter";
import ReactLenis from "lenis/react";
import MediaTypeFilter from "./Filters/MediaTypeFilter";

type Props = {
   DURATION: number;
};

export default function FilterModal({ DURATION }: Props) {
   const [showContent, setShowContent] = useState(false);

   const onLayoutAnimationComplete = () => setShowContent(true);

   const [mediaType, setMediaType] = useState<"movie" | "tv">("movie");

   return (
      <div className="fixed top-0 left-0 w-screen h-screen px-24 py-24 z-50 pointer-events-none">
         <div className="w-full h-full">
            <motion.div
               transition={{ duration: DURATION }}
               style={{
                  borderRadius: 8,
               }}
               layoutId="filter"
               onLayoutAnimationComplete={onLayoutAnimationComplete}
               className="bg-white dark:bg-black border-border-width border-border-light dark:border-border-dark w-full h-full pointer-events-auto"
            >
               {showContent && (
                  <ReactLenis className="w-full h-full overflow-hidden p-8">
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full"
                     >
                        <div className="text-4xl font-black mb-4">Filters</div>
                        <div className="grid grid-cols-3 gap-8">
                           <MediaTypeFilter
                              isMovie={mediaType === "movie"}
                              setMediaType={setMediaType}
                           />
                           <FilterCard name="Sort by">Hello</FilterCard>
                           <FilterCard name="Year of release">Hello</FilterCard>
                           <GenresFilter isMovie={mediaType === "movie"} />
                           <FilterCard
                              name="Max Rating"
                              message="Can select only one"
                           >
                              Hello
                           </FilterCard>
                           <GenresFilter
                              isMovie={mediaType === "movie"}
                              exclude
                           />

                           <FilterCard
                              name="Min Rating"
                              message="Can select only one"
                           >
                              Hello
                           </FilterCard>
                           <FilterCard name="Original language">
                              Hello
                           </FilterCard>
                           <FilterCard wide name="Max duration">
                              Hello
                           </FilterCard>
                           <FilterCard name="Origin country">Hello</FilterCard>
                           <FilterCard wide name="Min duration">
                              Hello
                           </FilterCard>
                        </div>
                     </motion.div>
                  </ReactLenis>
               )}
            </motion.div>
         </div>
      </div>
   );
}
