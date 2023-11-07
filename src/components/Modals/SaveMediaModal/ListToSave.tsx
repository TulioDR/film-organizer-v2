import { useEffect, useState } from "react";
import { createMedia, deleteMedia, getIsMediaInList } from "../../../api/media";
import useNotification from "@/hooks/useNotification";
import { v4 as uuid } from "uuid";
import LoadingSpinner from "@/components/LoadingSpinner";
import { MediaModel } from "@/models/MediaModel";

interface ListProps {
   list: any;
   media: MediaModel;
   mediaType: "movie" | "tv";
}

export default function ListToSave({ list, media, mediaType }: ListProps) {
   const [isSaved, setIsSaved] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const { setAndCloseNotification, getErrorMessage } = useNotification();

   const [refreshEffect, setRefreshEffect] = useState<boolean>(true);
   const refresh = () => setRefreshEffect((prev) => !prev);

   const saveToList = async () => {
      setIsLoading(true);
      const createdMedia = await createMedia({
         id: uuid(),
         media_id: media.id,
         media_title: media.title || media.name,
         media_poster: media.poster_path,
         media_backdrop: media.backdrop_path,
         media_overview: media.overview,
         media_release_date: media.first_air_date || media.release_date,
         media_type: mediaType,
         list_id: list.id,
      });
      if (createdMedia.error) {
         const message = getErrorMessage(createdMedia.error.code);
         const success = false;
         setAndCloseNotification(message, success);
      } else {
         refresh();
      }
   };

   const removeFromList = async () => {
      setIsLoading(true);
      const deletedMedia = await deleteMedia({
         list_id: list.id,
         media_id: media.id,
         media_type: mediaType,
      });
      if (deletedMedia.error) {
         const message = getErrorMessage(deletedMedia.error.code);
         const success = false;
         setAndCloseNotification(message, success);
      } else {
         refresh();
      }
   };

   useEffect(() => {
      const checkIfSaved = async () => {
         const { error, data } = await getIsMediaInList({
            list_id: list.id,
            media_id: media.id,
            media_type: mediaType,
         });
         console.log(data);

         if (error) {
            const message = getErrorMessage(error.code);
            const success = false;
            setAndCloseNotification(message, success);
         } else {
            if (data.length) setIsSaved(true);
            else setIsSaved(false);
         }
         setIsLoading(false);
      };
      checkIfSaved();
   }, [
      media.id,
      list.id,
      mediaType,
      refreshEffect,
      getErrorMessage,
      setAndCloseNotification,
   ]);

   return (
      <li
         onClick={isSaved ? removeFromList : saveToList}
         className={`h-9 flex items-center hover:bg-secondary-light dark:hover:bg-secondary-dark text-text-2 ${
            isLoading ? "pointer-events-none" : "cursor-pointer"
         }`}
      >
         <div className="h-full aspect-square grid place-content-center">
            {isLoading ? (
               <LoadingSpinner />
            ) : (
               <span className="material-symbols-outlined">
                  {isSaved ? "check_box" : "check_box_outline_blank"}
               </span>
            )}
         </div>
         <span className="text-sm">{list.name}</span>
      </li>
   );
}
