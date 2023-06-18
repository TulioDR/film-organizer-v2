import { SavedMediaModel } from "@/models/MediaModel";
import OpenDeleteModal from "./OpenDeleteModal";
import DeleteMediaMessage from "./DeleteMediaMessage";
import OpenDeleteMediaButton from "./OpenDeleteMediaButton";

type Props = {
   mediaToDelete: SavedMediaModel[];
   isDeleteOpen: boolean;
   onClick: () => void;
   openDeleteModal: () => void;
};

export default function DeleteMedia({
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
            <OpenDeleteModal
               isDeleteOpen={isDeleteOpen}
               mediaToDelete={mediaToDelete}
               onClick={openDeleteModal}
            />
         </div>
      </>
   );
}
