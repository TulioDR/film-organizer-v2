import { useEffect, useState } from "react";
import {
   createMedia,
   deleteUniqueMedia,
   getUniqueMedia,
} from "../../../api/media";
import { SpinnerCircularFixed } from "spinners-react";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";

interface ListProps {
   list: any;
   media: any;
   mediaType: "movie" | "tv";
}

export default function ListToSave({ list, media, mediaType }: ListProps) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   const [isSaved, setIsSaved] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   const [refreshEffect, setRefreshEffect] = useState<boolean>(true);
   const refresh = () => setRefreshEffect((prev) => !prev);

   const saveToList = async () => {
      setIsLoading(true);
      const createdMedia = await createMedia({
         media_id: media.id,
         name: media.title || media.name,
         poster_path: media.poster_path,
         media_type: mediaType,
         listId: list.id,
      });
      console.log(createdMedia);
      refresh();
   };

   const removeFromList = async () => {
      setIsLoading(true);
      const deletedMedia = await deleteUniqueMedia({
         media_id: media.id,
         media_type: mediaType,
         listId: list.id,
      });
      console.log(deletedMedia);
      refresh();
   };

   useEffect(() => {
      const checkIfSaved = async () => {
         const isMediaSaved = await getUniqueMedia({
            media_id: media.id,
            media_type: mediaType,
            listId: list.id,
         });
         if (isMediaSaved) setIsSaved(true);
         else setIsSaved(false);
         setIsLoading(false);
      };
      checkIfSaved();
   }, [media.id, list.id, mediaType, refreshEffect]);

   return (
      <li
         onClick={isSaved ? removeFromList : saveToList}
         className={`h-9 flex items-center hover:bg-secondary text-dark-text-normal ${
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
