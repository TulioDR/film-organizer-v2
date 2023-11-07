import { SavedMediaModel } from "@/models/MediaModel";
import { useAnimationControls } from "framer-motion";
import { useState } from "react";

export default function useDeleteMode() {
   const [mediaToDelete, setMediaToDelete] = useState<SavedMediaModel[]>([]);
   const [isDeleteModeActive, setIsDeleteModeActive] = useState<boolean>(false);
   const [showButtons, setShowButtons] = useState<boolean>(false);
   const textControls = useAnimationControls();

   const startDeleteMode = async () => {
      setIsDeleteModeActive(true);
      await textControls.start({
         width: "auto",
         transition: { duration: 0.3 },
      });
      setShowButtons(true);
   };
   const stopDeleteMode = () => {
      setShowButtons(false);
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
      showButtons,
      textControls,
   };
}
