import useBookmark from "@/hooks/useBookmark";

type Props = {
   media: any;
   mediaType: "movie" | "tv";
   isMediaSaved: boolean;
};

export default function Bookmark({ media, mediaType, isMediaSaved }: Props) {
   const { handleBookmarkClick } = useBookmark(media, mediaType);
   return (
      <button
         onClick={handleBookmarkClick}
         className="h-full grid place-content-center"
      >
         <span className="material-icons !text-4xl">
            {isMediaSaved ? "bookmark" : "bookmark_border"}
         </span>
      </button>
   );
}
