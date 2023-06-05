import useBookmark from "@/hooks/useBookmark";
import useIsMediaSaved from "../../../hooks/useIsMediaSaved";

type Props = {
   movie: any;
};

export default function HomeBookmark({ movie }: Props) {
   const { isMediaSaved } = useIsMediaSaved(movie.id, "movie");

   const { handleBookmarkClick } = useBookmark(movie, "movie");
   return (
      <button
         onClick={handleBookmarkClick}
         className="h-full grid place-content-center aspect-square bg-white text-black"
      >
         <span className="material-icons !text-3xl !2xl:text-5xl">
            {isMediaSaved ? "bookmark" : "bookmark_border"}
         </span>
      </button>
   );
}
