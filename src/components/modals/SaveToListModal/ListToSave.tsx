import { useEffect, useState } from "react";
import {
   createMedia,
   deleteUniqueMedia,
   getUniqueMedia,
} from "../../../actions/media";
import useRefresh from "../../../hooks/useRefresh";

interface ListProps {
   list: any;
   media: any;
   mediaType: "movie" | "tv";
}

export default function ListToSave({ list, media, mediaType }: ListProps) {
   const [isSaved, setIsSaved] = useState<boolean>(false);

   const { search, refresh } = useRefresh();

   const saveToList = async () => {
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
      const deletedMedia = await deleteUniqueMedia({
         media_id: media.id,
         media_type: mediaType,
         listId: list.id,
      });
      console.log(deletedMedia);
      refresh();
   };

   useEffect(() => {
      const getIsSaved = async () => {
         const isMediaSaved = await getUniqueMedia({
            media_id: media.id,
            media_type: mediaType,
            listId: list.id,
         });
         if (isMediaSaved) setIsSaved(true);
         else setIsSaved(false);
      };
      getIsSaved();
   }, [search]);

   return (
      <li
         onClick={isSaved ? removeFromList : saveToList}
         className="h-9 flex items-center cursor-pointer hover:bg-gray-light dark:hover:bg-gray-dark"
      >
         <span className="material-icons mx-2">
            {isSaved ? "check_box" : "check_box_outline_blank"}
         </span>
         <span className="text-sm">{list.name}</span>
      </li>
   );
}
