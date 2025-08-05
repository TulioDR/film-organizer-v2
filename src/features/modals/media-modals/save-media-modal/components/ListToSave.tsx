import useListToSaveBookmark from "../hooks/useListToSaveBookmark";
import LoadingSpinner from "@/common/components/LoadingSpinner";
import List from "@/common/models/List";
import { Media } from "@/common/models/Media";
import { MediaType } from "@/common/models/MediaType";

interface Props {
   list: List;
   media: Media;
   mediaType: MediaType;
}

export default function ListToSave({ list, media, mediaType }: Props) {
   const { isSaved, isLoading, saveToList, removeFromList } =
      useListToSaveBookmark(list, media, mediaType);

   return (
      <li
         onClick={isSaved ? removeFromList : saveToList}
         className={`h-10 flex items-center hover:bg-secondary-light dark:hover:bg-secondary-dark text-text-2 ${
            isLoading ? "pointer-events-none" : "cursor-pointer"
         }`}
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
         <span className="text-xs sm:text-sm md:text-base">{list.name}</span>
      </li>
   );
}
