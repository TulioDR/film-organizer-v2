import { SavedMediaModel } from "@/models/MediaModel";
import { useState } from "react";

export default function useDeleteMode() {
   const [mediaToDelete, setMediaToDelete] = useState<SavedMediaModel[]>([]);
   const [isDeleteModeActive, setIsDeleteModeActive] = useState<boolean>(false);
   const startDeleteMode = () => {
      setIsDeleteModeActive(true);
   };
   const stopDeleteMode = () => {
      setIsDeleteModeActive(false);
      setMediaToDelete([]);
   };

   const onCardTap = (media: SavedMediaModel) => {
      const isSelected = mediaToDelete.includes(media);
      if (isSelected) {
         setMediaToDelete((old) => old.filter(({ id }) => id !== media.id));
      } else {
         setMediaToDelete((old) => [...old, media]);
      }
   };

   return {
      mediaToDelete,
      onCardTap,
      isDeleteModeActive,
      startDeleteMode,
      stopDeleteMode,
   };
}
