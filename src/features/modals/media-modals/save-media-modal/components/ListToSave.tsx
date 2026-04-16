import useListToSaveBookmark from "../hooks/useListToSaveBookmark";
import LoadingSpinner from "@/common/components/LoadingSpinner";
import { Media } from "@/common/models/Media";
import { MediaType } from "@/common/models/MediaType";
import Playlist from "@/common/models/Playlist";

interface Props {
   playlist: Playlist;
   media: Media;
   mediaType: MediaType;
}

export default function ListToSave({ playlist, media, mediaType }: Props) {
   const { isSaved, isLoading, saveToList, removeFromList } =
      useListToSaveBookmark(playlist, media, mediaType);

   return (
      <li
         onClick={isSaved ? removeFromList : saveToList}
         className={`h-12 flex items-center text-black dark:text-white
            hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black
            active:bg-black dark:active:bg-white active:text-white dark:active:text-black
            ${isLoading ? "pointer-events-none" : "cursor-pointer"}
         `}
      >
         <div className="h-full aspect-square grid place-content-center">
            {isLoading ? (
               <div className="w-6 aspect-square">
                  <LoadingSpinner />
               </div>
            ) : (
               <span className="material-symbols-outlined">
                  {isSaved ? "check_box" : "check_box_outline_blank"}
               </span>
            )}
         </div>
         <span className="text-xs sm:text-sm md:text-base">
            {playlist.name}
         </span>
      </li>
   );
}
