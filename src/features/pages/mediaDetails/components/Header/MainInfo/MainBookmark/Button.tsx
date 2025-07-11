import React from "react";
import { motion } from "framer-motion";
import GlassContainer from "@/components/GlassContainer";

import LoadingSpinner from "@/components/LoadingSpinner";

import useBookmarkClick from "@/features/bookmark/hooks/useBookmarkClick";
import useIsMediaSaved from "@/features/bookmark/hooks/useIsMediaSaved";
type Props = {
   media: any;
   mediaType: "movie" | "tv";
};

export default function Button({ mediaType, media }: Props) {
   const transition = {
      layout: { duration: 0.3 },
   };

   const { handleBookmarkClick } = useBookmarkClick(media, mediaType);
   const { isMediaSaved, isLoading } = useIsMediaSaved(media.id, mediaType);

   return (
      <motion.div
         layoutId="details-bookmark"
         transition={transition}
         className="w-full h-full relative z-20"
      >
         <GlassContainer
            el="button"
            onClick={handleBookmarkClick}
            className={`hover:bg-white hover:text-black h-full aspect-square flex items-center justify-center p-2 ${
               isLoading ? "pointer-events-none" : ""
            }`}
         >
            {isLoading ? (
               <span className="w-3/4">
                  <LoadingSpinner white />
               </span>
            ) : (
               <span
                  style={{
                     fontVariationSettings: isMediaSaved
                        ? `"FILL" 1`
                        : undefined,
                  }}
                  className="material-symbols-outlined !text-3xl sm:!text-4xl"
               >
                  bookmark
               </span>
            )}
         </GlassContainer>
      </motion.div>
   );
}
