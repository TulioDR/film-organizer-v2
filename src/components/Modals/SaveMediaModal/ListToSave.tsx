import { useEffect, useState } from "react";
import { createMedia, deleteMedia, getIsMediaInList } from "../../../api/media";
import { SpinnerCircularFixed } from "spinners-react";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import useNotification from "@/hooks/useNotification";
import { v4 as uuid } from "uuid";

interface ListProps {
   list: any;
   media: any;
   mediaType: "movie" | "tv";
}

export default function ListToSave({ list, media, mediaType }: ListProps) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

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
               <SpinnerCircularFixed
                  size={24}
                  thickness={100}
                  speed={100}
                  color={themeColor}
                  secondaryColor="gray"
               />
            ) : (
               <span className="material-icons">
                  {isSaved ? "check_box" : "check_box_outline_blank"}
               </span>
            )}
         </div>
         <span className="text-sm">{list.name}</span>
      </li>
   );
}
