import { useEffect, useState } from "react";
import { createMedia, deleteMedia, getIsMediaSavedInList } from "@/api/media";
import useNotification from "@/features/layout/notification/hooks/useNotification";
import { MediaType } from "@/common/models/MediaType";
import { Media } from "@/common/models/Media";
import Playlist from "@/common/models/Playlist";

export default function useListToSaveBookmark(
   playlist: Playlist,
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
            playlist_id: playlist.id,
            media_id: media.id,
            media_type: mediaType,
         });
         setIsLoading(false);
         if (error) {
            setErrorData(error);
         } else {
            setIsSaved(!!data?.length);
         }
      };
      if (playlist?.id && media?.id) {
         checkIfSavedInList();
      }
   }, [mediaType, media, playlist]);

   const saveToList = async () => {
      setIsLoading(true);

      const { error } = await createMedia({
         media_id: Number(media.id),
         title: media.title || media.name,
         poster_path: media.poster_path,
         backdrop_path: media.backdrop_path,
         overview: media.overview,
         release_date: media.first_air_date || media.release_date,
         media_type: mediaType,
         playlist_id: playlist.id, // This is for the junction table
      });

      setIsLoading(false);
      if (error) {
         showErrorNotification(error);
      } else {
         setIsSaved(true);
      }
   };

   const removeFromList = async () => {
      setIsLoading(true);
      const { error } = await deleteMedia({
         playlist_id: playlist.id,
         media_id: Number(media.id),
         media_type: mediaType,
      });

      setIsLoading(false);
      if (error) {
         showErrorNotification(error);
      } else {
         setIsSaved(false);
      }
   };

   return { isSaved, isLoading, saveToList, removeFromList };
}
