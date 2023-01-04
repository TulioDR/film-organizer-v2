import { useEffect, useState } from "react";
import { getFirstMedia } from "../api/media";
import useListsContext from "../context/ListsContext";

export default function useIsMediaSaved(id: number, type: "movie" | "tv") {
   const [isMediaSaved, setIsMediaSaved] = useState<boolean>(false);

   const { refreshCard, currentMedia } = useListsContext();

   useEffect(() => {
      const getIsMediaSaved = async () => {
         const firstFounded = await getFirstMedia({
            media_id: id,
            media_type: type,
         });
         console.log(firstFounded);
         if (firstFounded) setIsMediaSaved(true);
         else setIsMediaSaved(false);
      };
      getIsMediaSaved();
   }, [id, type]);

   useEffect(() => {
      const getIsMediaSaved = async () => {
         if (currentMedia?.id !== id) return;
         const firstFounded = await getFirstMedia({
            media_id: id,
            media_type: type,
         });
         console.log(firstFounded);
         if (firstFounded) setIsMediaSaved(true);
         else setIsMediaSaved(false);
      };
      getIsMediaSaved();
   }, [refreshCard, id, type, currentMedia?.id]);

   return { isMediaSaved };
}
