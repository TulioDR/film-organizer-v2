import MainButton from "@/common/components/MainButton";
import Playlist from "@/common/models/Playlist";
import DeleteListModal from "@/features/modals/list-modals/delete-list-modal/components/DeleteListModal";
import { useState } from "react";
import { motion } from "framer-motion";

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
         <motion.div layout className="block">
            <MainButton
               square
               icon="delete"
               type="delete"
               onClick={openDeleteModal}
            />
         </motion.div>
         <DeleteListModal
            isOpen={isDeleteModalOpen}
            close={closeDeleteModal}
            playlistToDelete={playlistToDelete}
         />
      </>
   );
}
