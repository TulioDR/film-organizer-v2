import { SavedMediaModel } from "@/models/MediaModel";
import DeleteMediaMessage from "./DeleteMediaMessage";
import OpenDeleteMediaButton from "./OpenDeleteMediaButton";
import OpenDeleteModalButton from "./OpenDeleteModalButton";

type Props = {
   mediaToDelete: SavedMediaModel[];
   isDeleteOpen: boolean;
   onClick: () => void;
   openDeleteModal: () => void;
};

export default function DeleteMediaButtons({
   isDeleteOpen,
   onClick,
   mediaToDelete,
   openDeleteModal,
}: Props) {
   return (
      <>
         <div className="fixed bottom-10 right-10 rounded-lg bg-red-700 text-white flex items-center">
            <DeleteMediaMessage isDeleteOpen={isDeleteOpen} />
            <OpenDeleteMediaButton
               onClick={onClick}
               isDeleteOpen={isDeleteOpen}
            />
         </div>
         <div className="fixed bottom-10 select-none">
            <OpenDeleteModalButton
               isDeleteOpen={isDeleteOpen}
               mediaToDelete={mediaToDelete}
               onClick={openDeleteModal}
            />
         </div>
      </>
   );
}
