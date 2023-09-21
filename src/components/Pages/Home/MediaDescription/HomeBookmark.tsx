import useBookmark from "@/hooks/useBookmark";
import useIsMediaSaved from "../../../hooks/useIsMediaSaved";

type Props = {
   movie: any;
};

export default function HomeBookmark({ movie }: Props) {
   const { handleBookmarkClick } = useBookmark(movie, "movie");
   const { isMediaSaved } = useIsMediaSaved(movie.id, "movie");

   return (
      <button
         onClick={handleBookmarkClick}
         className="h-full grid place-content-center aspect-square bg-white text-black"
      >
         <span className="material-symbols-outlined !text-3xl !2xl:text-5xl">
            {isMediaSaved ? "bookmark" : "bookmark_border"}
         </span>
      </button>
   );
}
