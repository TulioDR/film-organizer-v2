import { useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { getFirstMedia } from "../api/media";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";

export default function useIsMediaSaved(id: number, type: "movie" | "tv") {
   const [isMediaSaved, setIsMediaSaved] = useState<boolean>(false);
   const user = useUser();

   const { mediaToSave } = useSelector((state: StoreModel) => state.bookmark);

   useEffect(() => {
      const getIsMediaSaved = async () => {
         if (!user) {
            setIsMediaSaved(false);
            return;
         }
         if (mediaToSave && mediaToSave.media.id !== id) return;
         const foundedInAList = await getFirstMedia({
            media_id: id,
            media_type: type,
         });
         console.log("checking if media is saved");
         if (foundedInAList) setIsMediaSaved(true);
         else setIsMediaSaved(false);
      };
      getIsMediaSaved();
   }, [id, type, user, mediaToSave]);

   return { isMediaSaved };
}
