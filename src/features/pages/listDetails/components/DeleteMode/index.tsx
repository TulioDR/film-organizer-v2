import { SavedMediaModel } from "@/models/MediaModel";
import { AnimatePresence, AnimationControls } from "framer-motion";

import DeleteFormIcon from "./DeleteFormIcon";
import DeleteFormMessage from "./DeleteFormMessage";
import DeleteFormButton from "./DeleteFormButton";
import DeleteFormButtonsContainer from "./DeleteFormButtonsContainer";

type Props = {
   mediaToDelete: SavedMediaModel[];
   startDeleteMode: () => void;
   stopDeleteMode: () => void;
   openDeleteModal: () => void;
   showButtons: boolean;
   textControls: AnimationControls;
};

export default function DeleteMode({
   mediaToDelete,
   startDeleteMode,
   stopDeleteMode,
   openDeleteModal,
   showButtons,
   textControls,
}: Props) {
   const onButtonsRemoval = () => {
      textControls.start({
         width: 0,
         transition: { duration: 0.3 },
      });
   };

   return (
      <div className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 rounded-lg bg-red-700">
         <div className="flex h-12 text-white">
            <DeleteFormIcon onClick={startDeleteMode} />
            <DeleteFormMessage textControls={textControls} />
         </div>
         <AnimatePresence onExitComplete={onButtonsRemoval}>
            {showButtons && (
               <DeleteFormButtonsContainer>
                  <DeleteFormButton onClick={stopDeleteMode}>
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
