import { useEffect, useState } from "react";
import { getIsMediaSaved } from "@/api/media";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/nextjs";
import useNotification from "@/hooks/useNotification";

export default function useIsMediaSaved(id: number, type: "movie" | "tv") {
   const [isMediaSaved, setIsMediaSaved] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { handleError } = useNotification();

   const [errorData, setErrorData] = useState<any>(null);

   useEffect(() => {
      if (!errorData) return;
      handleError(errorData);
   }, [errorData, handleError]);

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
         const { data, error } = await getIsMediaSaved({
            media_id: id,
            media_type: type,
         });
         setIsLoading(false);
         if (error) {
            setErrorData(error);
         } else {
            if (data.length) setIsMediaSaved(true);
            else setIsMediaSaved(false);
         }
      };
      isMediaIsSavedEffect();
   }, [id, type, user, mediaToSave, isSaveMediaOpen]);

   return { isMediaSaved, isLoading };
}
