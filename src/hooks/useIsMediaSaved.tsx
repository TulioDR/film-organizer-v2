import { useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { getFirstMedia } from "../api/media";

export default function useIsMediaSaved(id: number, type: "movie" | "tv") {
   const [isMediaSaved, setIsMediaSaved] = useState<boolean>(false);
   const user = useUser();

   useEffect(() => {
      const getIsMediaSaved = async () => {
         if (!user) {
            setIsMediaSaved(false);
            return;
         }
         // if (currentMedia && currentMedia?.id !== id) return;
         const firstFounded = await getFirstMedia({
            media_id: id,
            media_type: type,
         });
         console.log("checking if media is saved");
         if (firstFounded) setIsMediaSaved(true);
         else setIsMediaSaved(false);
      };
      getIsMediaSaved();
   }, [id, type, user]);

   return { isMediaSaved };
}
