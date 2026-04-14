import { useEffect, useState } from "react";
import { createMedia, deleteMedia, getIsMediaSavedInList } from "@/api/media";
import { v4 as uuid } from "uuid";
import useNotification from "@/features/layout/notification/hooks/useNotification";
import List from "@/common/models/Playlist";
import { MediaType } from "@/common/models/MediaType";
import { Media } from "@/common/models/Media";

export default function useListToSaveBookmark(
   list: List,
   media: Media,
   mediaType: MediaType,
) {
   const { showErrorNotification } = useNotification();
   const [isSaved, setIsSaved] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [errorData, setErrorData] = useState<any>(null);

   useEffect(() => {
      if (!errorData) return;
      showErrorNotification(errorData);
   }, [errorData, showErrorNotification]);

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
      if (error) showErrorNotification(error);
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
      if (error) showErrorNotification(error);
      else setIsSaved(false);
   };

   return { isSaved, isLoading, saveToList, removeFromList };
}
