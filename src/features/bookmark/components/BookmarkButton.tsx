import LoadingSpinner from "@/components/LoadingSpinner";

import { MediaModel } from "@/models/MediaModel";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import useIsMediaSaved from "../hooks/useIsMediaSaved";
import useBookmarkClick from "../hooks/useBookmarkClick";

type Props = {
   type: "tv" | "movie";
   media: MediaModel;
   useLoading?: true;
   big?: true;
};

export default function BookmarkButton({
   media,
   type,
   useLoading,
   big,
}: Props) {
   const { handleBookmarkClick } = useBookmarkClick(media, type);
   const { isMediaSaved, isLoading } = useIsMediaSaved(media.id, type);
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   return (
      <button
         onClick={handleBookmarkClick}
         style={{ backgroundColor: themeColor }}
         className={`aspect-square flex items-center justify-center text-white rounded-lg
         ${big ? "h-10 sm:h-12" : "h-10"}`}
      >
         {useLoading && isLoading ? (
            <div className="w-3/4">
               <LoadingSpinner white />
            </div>
         ) : (
            <span
               style={{ fontVariationSettings: isMediaSaved ? `"FILL" 1` : "" }}
               className={`material-symbols-outlined ${
                  big ? "!text-3xl sm:!text-4xl" : "!text-3xl"
               }`}
            >
               bookmark
            </span>
         )}
      </button>
   );
}
