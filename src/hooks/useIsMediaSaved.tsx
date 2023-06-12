import { useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { getFirstMedia } from "../api/media";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";

export default function useIsMediaSaved(id: number, type: "movie" | "tv") {
   const [isMediaSaved, setIsMediaSaved] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   const user = useUser();

   const { mediaToSave, isSaveMediaOpen } = useSelector(
      (state: StoreModel) => state.bookmark
   );

   useEffect(() => {
      const getIsMediaSaved = async () => {
         if (!user) {
            setIsMediaSaved(false);
            return;
         }
         if (isSaveMediaOpen) return;
         if (mediaToSave && mediaToSave.media.id !== id) return;
         console.log("checking if media is saved");
         setIsLoading(true);
         const foundInAList = await getFirstMedia({
            media_id: id,
            media_type: type,
         });
         setIsLoading(false);
         if (foundInAList) setIsMediaSaved(true);
         else setIsMediaSaved(false);
      };
      getIsMediaSaved();
   }, [id, type, user, mediaToSave, isSaveMediaOpen]);

   return { isMediaSaved, isLoading };
}
