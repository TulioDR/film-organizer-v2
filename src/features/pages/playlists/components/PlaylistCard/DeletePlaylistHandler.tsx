import MainButton from "@/common/components/MainButton";
import Playlist from "@/common/models/Playlist";
import DeleteListModal from "@/features/modals/list-modals/delete-list-modal/components/DeleteListModal";
import { useState } from "react";

type Props = {
   playlistToDelete: Playlist;
};

export default function DeletePlaylistHandler({ playlistToDelete }: Props) {
   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const openDeleteModal = () => {
      setIsDeleteModalOpen(true);
   };

   const closeDeleteModal = () => {
      setIsDeleteModalOpen(false);
   };
   return (
      <>
         <MainButton
            square
            icon="delete"
            type="delete"
            onClick={openDeleteModal}
         />
         <DeleteListModal
            isOpen={isDeleteModalOpen}
            close={closeDeleteModal}
            playlistToDelete={playlistToDelete}
         />
      </>
   );
}
