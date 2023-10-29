import useBookmark from "@/hooks/useBookmark";
import useIsMediaSaved from "@/hooks/useIsMediaSaved";

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
         <span
            style={isMediaSaved ? { fontVariationSettings: `"FILL" 1` } : {}}
            className="material-symbols-outlined !text-3xl !2xl:text-5xl"
         >
            bookmark
         </span>
      </button>
   );
}
