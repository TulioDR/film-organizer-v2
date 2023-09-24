import useBookmark from "@/hooks/useBookmark";
import useIsMediaSaved from "@/hooks/useIsMediaSaved";
import { MediaModel } from "@/models/MediaModel";

type Props = {
   mediaType: "tv" | "movie";
   media: MediaModel;
};

export default function MainCardBookmark({ mediaType, media }: Props) {
   const { handleBookmarkClick } = useBookmark(media, mediaType);
   const { isMediaSaved } = useIsMediaSaved(media.id, mediaType);
   return (
      <button
         onClick={handleBookmarkClick}
         className="h-full aspect-square bg-light-1 dark:bg-dark-1 text-dark-1 dark:text-light-1 rounded-xl grid place-content-center"
      >
         <span className="material-symbols-outlined">
            {isMediaSaved ? "bookmark" : "bookmark_border"}
         </span>
      </button>
   );
}
