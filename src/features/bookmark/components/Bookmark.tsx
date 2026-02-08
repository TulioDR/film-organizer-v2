import React from "react";
import useBookmarkClick from "../hooks/useBookmarkClick";
import useIsMediaSaved from "../hooks/useIsMediaSaved";
import { MediaDetailsModel } from "@/features/pages/mediaDetails/models/MediaDetailsModel";
import LoadingSpinner from "@/common/components/LoadingSpinner";
import { Media } from "@/common/models/Media";

type Props = {
   media: Media | MediaDetailsModel;
   type: "tv" | "movie";
   className?: string;
};

export default function Bookmark({ media, type, className = "" }: Props) {
   const { handleBookmarkClick } = useBookmarkClick(media, type);
   const { isMediaSaved, isLoading } = useIsMediaSaved(media.id, type);
   return (
      <button
         onMouseDown={(e) => e.stopPropagation()}
         onClick={handleBookmarkClick}
         className={`w-full h-full flex items-center justify-center 
            ${className} 
            ${isLoading ? "pointer-events-none" : ""}
         `}
      >
         {isLoading ? (
            <div className="w-3/4">
               <LoadingSpinner white />
            </div>
         ) : (
            <span
               style={{
                  fontVariationSettings: isMediaSaved ? `"FILL" 1` : undefined,
               }}
               className="material-symbols-outlined !text-2xl"
            >
               bookmark
            </span>
         )}
      </button>
   );
}
