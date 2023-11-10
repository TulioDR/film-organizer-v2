import { useEffect, useState } from "react";
import { createMedia, deleteMedia, getIsMediaSavedInList } from "@/api/media";
import useNotification from "@/features/notification/hooks/useNotification";
import ListModel from "@/models/ListModel";
import { MediaModel } from "@/models/MediaModel";
import { MediaTypeModel } from "@/models/MediaTypeModel";
import { v4 as uuid } from "uuid";

export default function useListToSaveBookmark(
   list: ListModel,
   media: MediaModel,
   mediaType: MediaTypeModel
) {
   const { handleError } = useNotification();
   const [isSaved, setIsSaved] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [errorData, setErrorData] = useState<any>(null);

   useEffect(() => {
      if (!errorData) return;
      handleError(errorData);
   }, [errorData, handleError]);

   useEffect(() => {
      const checkIfSavedInList = async () => {
         const { error, data } = await getIsMediaSavedInList({
            list_id: list.id,
            media_id: media.id,
            media_type: mediaType,
         });
         setIsLoading(false);
         if (error) {
            setErrorData(error);
         } else {
            if (data.length) setIsSaved(true);
            else setIsSaved(false);
         }
      };
      checkIfSavedInList();
   }, [mediaType, media, list]);

   const saveToList = async () => {
      setIsLoading(true);
      const { error } = await createMedia({
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
      setIsLoading(false);
      if (error) handleError(error);
      else setIsSaved(true);
   };

   const removeFromList = async () => {
      setIsLoading(true);
      const { error } = await deleteMedia({
         list_id: list.id,
         media_id: media.id,
         media_type: mediaType,
      });
      setIsLoading(false);
      if (error) handleError(error);
      else setIsSaved(false);
   };

   return { isSaved, isLoading, saveToList, removeFromList };
}
