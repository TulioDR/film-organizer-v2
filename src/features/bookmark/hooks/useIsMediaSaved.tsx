import { useEffect, useState } from "react";
import { getIsMediaSaved } from "@/api/media";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/nextjs";

export default function useIsMediaSaved(id: number, type: "movie" | "tv") {
   const [isMediaSaved, setIsMediaSaved] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { user } = useUser();

   const { mediaToSave, isSaveMediaOpen } = useSelector(
      (state: StoreModel) => state.bookmark
   );

   useEffect(() => {
      const isMediaIsSavedEffect = async () => {
         if (!user) {
            setIsMediaSaved(false);
            return;
         }
         if (isSaveMediaOpen) return;
         if (mediaToSave && mediaToSave.media.id !== id) return;
         setIsLoading(true);
         const { data } = await getIsMediaSaved({
            media_id: id,
            media_type: type,
         });
         setIsLoading(false);
         if (data) setIsMediaSaved(true);
         else setIsMediaSaved(false);
      };
      isMediaIsSavedEffect();
   }, [id, type, user, mediaToSave, isSaveMediaOpen]);

   return { isMediaSaved, isLoading };
}
