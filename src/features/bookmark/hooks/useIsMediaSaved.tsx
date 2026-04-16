import { useEffect, useState } from "react";
import { getIsMediaSaved } from "@/api/media";
import { useUser } from "@clerk/nextjs";
import useNotification from "@/features/layout/notification/hooks/useNotification";
import { MediaType } from "@/common/models/MediaType";

export default function useIsMediaSaved(
   id: number,
   mediaType: MediaType,
   isSaveMediaOpen: boolean,
) {
   const [isMediaSaved, setIsMediaSaved] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { showErrorNotification } = useNotification();

   const [errorData, setErrorData] = useState<any>(null);

   useEffect(() => {
      if (!errorData) return;
      showErrorNotification(errorData);
   }, [errorData, showErrorNotification]);

   const { user } = useUser();

   useEffect(() => {
      const isMediaIsSavedEffect = async () => {
         if (isSaveMediaOpen) return;
         if (!user) {
            setIsMediaSaved(false);
            return;
         }
         setIsLoading(true);
         const { data, error } = await getIsMediaSaved(id, mediaType);
         setIsLoading(false);
         if (error) {
            setErrorData(error);
         } else {
            setIsMediaSaved(data.isSaved);
         }
      };
      isMediaIsSavedEffect();
   }, [id, mediaType, user, isSaveMediaOpen]);

   return { isMediaSaved, isLoading };
}
