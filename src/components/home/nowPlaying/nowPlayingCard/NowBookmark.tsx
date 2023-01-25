import useListsContext from "../../../../context/ListsContext";
import useIsMediaSaved from "../../../../hooks/useIsMediaSaved";

type Props = {
   movie: any;
};

export default function NowBookmark({ movie }: Props) {
   const { openBookmark } = useListsContext();
   const { isMediaSaved } = useIsMediaSaved(movie.id, "movie");
   return (
      <button
         onClick={() => openBookmark("movie", movie)}
         className="w-6 grid place-content-center"
      >
         <span className="material-icons text-5xl">
            {isMediaSaved ? "bookmark" : "bookmark_border"}
         </span>
      </button>
   );
}
