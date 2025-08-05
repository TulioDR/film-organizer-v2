import { getSavedMedia } from "@/api/media";
import { SavedMedia } from "@/common/models/Media";
import { useState, useEffect } from "react";

export default function useMediaData(list_id: string) {
   const [media, setMedia] = useState<SavedMedia[] | null>(null);

   const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
   const refresh = () => setIsRefreshing((prev) => !prev);

   useEffect(() => {
      const getMediaOnRefresh = async () => {
         const { data } = await getSavedMedia(list_id);
         setMedia(data);
      };
      getMediaOnRefresh();
   }, [list_id, isRefreshing]);

   return { media, refresh };
}
