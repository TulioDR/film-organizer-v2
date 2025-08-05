import { useEffect, useState } from "react";
import { getIsMediaSaved } from "@/api/media";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/nextjs";
import useNotification from "@/features/layout/notification/hooks/useNotification";
import Store from "@/common/models/Store";
import { MediaType } from "@/common/models/MediaType";

export default function useIsMediaSaved(id: number, mediaType: MediaType) {
   const [isMediaSaved, setIsMediaSaved] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { showErrorNotification } = useNotification();

   const [errorData, setErrorData] = useState<any>(null);

   useEffect(() => {
      if (!errorData) return;
      showErrorNotification(errorData);
   }, [errorData, showErrorNotification]);

   const { user } = useUser();

   const { mediaToSave, isSaveMediaOpen } = useSelector(
      (state: Store) => state.bookmark
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
         const { data, error } = await getIsMediaSaved(id, mediaType);
         setIsLoading(false);
         if (error) {
            setErrorData(error);
         } else {
            if (data.length) setIsMediaSaved(true);
            else setIsMediaSaved(false);
         }
      };
      isMediaIsSavedEffect();
   }, [id, mediaType, user, mediaToSave, isSaveMediaOpen]);

   return { isMediaSaved, isLoading };
}
