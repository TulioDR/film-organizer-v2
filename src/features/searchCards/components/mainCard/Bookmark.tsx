import useListsContext from "../../../../context/ListsContext";

type Props = {
   media: any;
   mediaType: "movie" | "tv";
   isMediaSaved: boolean;
};

export default function Bookmark({ media, mediaType, isMediaSaved }: Props) {
   const { useBookmark } = useListsContext();
   return (
      <button
         onClick={() => useBookmark(mediaType, media)}
         className="h-full grid place-content-center"
      >
         <span className="material-icons text-5xl">
            {isMediaSaved ? "bookmark" : "bookmark_border"}
         </span>
      </button>
   );
}
