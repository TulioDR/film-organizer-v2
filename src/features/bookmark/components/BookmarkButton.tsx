import LoadingSpinner from "@/components/LoadingSpinner";

import { MediaModel } from "@/models/MediaModel";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import useBookmark from "../hooks/useBookmark";
import useIsMediaSaved from "../hooks/useIsMediaSaved";

type Props = {
   mediaType: "tv" | "movie";
   media: MediaModel;
   useLoading?: true;
   big?: true;
};

export default function BookmarkButton({
   media,
   mediaType,
   useLoading,
   big,
}: Props) {
   const { handleBookmarkClick } = useBookmark(media, mediaType);
   const { isMediaSaved, isLoading } = useIsMediaSaved(media.id, mediaType);
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   return (
      <button
         onClick={handleBookmarkClick}
         style={{ backgroundColor: themeColor }}
         className={`aspect-square flex items-center justify-center text-white ${
            big ? "h-12" : "h-10"
         }`}
      >
         {useLoading && isLoading ? (
            <div className="w-3/4">
               <LoadingSpinner white />
            </div>
         ) : (
            <span
               style={{ fontVariationSettings: isMediaSaved ? `"FILL" 1` : "" }}
               className={`material-symbols-outlined ${
                  big ? "!text-4xl" : "!text-3xl"
               }`}
            >
               bookmark
            </span>
         )}
      </button>
   );
}
