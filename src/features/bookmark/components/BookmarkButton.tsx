import React from "react";
import useBookmarkClick from "../hooks/useBookmarkClick";
import useIsMediaSaved from "../hooks/useIsMediaSaved";
import LoadingSpinner from "@/common/components/LoadingSpinner";
import { Media } from "@/common/models/Media";
import { MediaDetailsModel } from "@/features/pages/media-id/models/MediaDetailsModel";
import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   media: Media | MediaDetailsModel;
   type: "tv" | "movie";
   className?: string;
};

export default function BookmarkButton({ media, type, className = "" }: Props) {
   const { handleBookmarkClick } = useBookmarkClick(media, type);
   const { isMediaSaved, isLoading } = useIsMediaSaved(media.id, type);

   return (
      <button
         onMouseDown={(e) => e.stopPropagation()}
         onClick={handleBookmarkClick}
         style={{ borderRadius: STANDARD_RADIUS }}
         className={`aspect-square h-full p-px block
            bg-border-light dark:bg-border-dark 
            hover:bg-black dark:hover:bg-white 
            active:bg-black dark:active:bg-white
            ${className} 
            ${isLoading ? "pointer-events-none" : ""}
         `}
      >
         <div
            style={{ borderRadius: STANDARD_RADIUS - 1 }}
            className="w-full h-full flex items-center justify-center bg-white dark:bg-black"
         >
            {isLoading ? (
               <div className="w-3/4">
                  <LoadingSpinner />
               </div>
            ) : (
               <span
                  style={{
                     fontVariationSettings: isMediaSaved
                        ? `"FILL" 1`
                        : undefined,
                  }}
                  className="material-symbols-outlined"
               >
                  bookmark
               </span>
            )}
         </div>
      </button>
   );
}
