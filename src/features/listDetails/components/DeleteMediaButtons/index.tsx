import { useState } from "react";
import { SavedMediaModel } from "@/models/MediaModel";
import { AnimatePresence, useAnimationControls } from "framer-motion";

import DeleteFormIcon from "./DeleteFormIcon";
import DeleteFormMessage from "./DeleteFormMessage";
import DeleteFormButton from "./DeleteFormButton";
import DeleteFormButtonsContainer from "./DeleteFormButtonsContainer";

type Props = {
   mediaToDelete: SavedMediaModel[];
   startDeleteMode: () => void;
   stopDeleteMode: () => void;
   openDeleteModal: () => void;
};

export default function DeleteMediaButtons({
   mediaToDelete,
   startDeleteMode,
   stopDeleteMode,
   openDeleteModal,
}: Props) {
   const textControls = useAnimationControls();
   const [showButtons, setShowButtons] = useState<boolean>(false);

   const openDeleteForm = async () => {
      startDeleteMode();
      await textControls.start({
         width: "auto",
         transition: { duration: 0.3 },
      });
      setShowButtons(true);
   };
   const closeDeleteForm = () => {
      stopDeleteMode();
      setShowButtons(false);
   };

   const onButtonsRemoval = () => {
      textControls.start({
         width: 0,
         transition: { duration: 0.3 },
      });
   };

   return (
      <div className="fixed bottom-10 right-10 rounded-lg bg-red-700">
         <div className="flex h-12 text-white">
            <DeleteFormIcon onClick={openDeleteForm} />
            <DeleteFormMessage textControls={textControls} />
         </div>
         <AnimatePresence onExitComplete={onButtonsRemoval}>
            {showButtons && (
               <DeleteFormButtonsContainer>
                  <DeleteFormButton onClick={closeDeleteForm}>
                     Close
                  </DeleteFormButton>
                  <DeleteFormButton
                     onClick={openDeleteModal}
                     disabled={mediaToDelete.length < 1}
                  >
                     Delete
                  </DeleteFormButton>
               </DeleteFormButtonsContainer>
            )}
         </AnimatePresence>
      </div>
   );
}
