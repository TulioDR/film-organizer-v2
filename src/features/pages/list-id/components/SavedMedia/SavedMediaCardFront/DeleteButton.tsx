import { deleteMedia } from "@/api/media";
import LoadingSpinner from "@/common/components/LoadingSpinner";
import { SavedMedia } from "@/common/models/Media";
import useBackground from "@/features/layout/background/hooks/useBackground";
import useNotification from "@/features/layout/notification/hooks/useNotification";
import { useState } from "react";

type Props = {
   refresh: () => void;
   listId: string;
   media: SavedMedia;
};

export default function DeleteButton({ refresh, listId, media }: Props) {
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { showErrorNotification } = useNotification();
   const { removeBackground } = useBackground();

   const handleClick = async () => {
      setIsLoading(true);
      const { error } = await deleteMedia({
         list_id: listId,
         media_id: media.media_id,
         media_type: media.media_type,
      });
      if (error) {
         showErrorNotification(error);
         setIsLoading(false);
      } else {
         refresh();
         removeBackground();
      }
   };
   return (
      <button
         onClick={handleClick}
         className="aspect-square h-10 bg-red-700 text-white grid place-content-center rounded-lg"
      >
         {isLoading ? (
            <div className="w-full h-full p-2">
               <LoadingSpinner white />
            </div>
         ) : (
            <span className="material-symbols-outlined">delete</span>
         )}
      </button>
   );
}
