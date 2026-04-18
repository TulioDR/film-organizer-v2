import MainButton from "@/common/components/MainButton";
import { PlaylistWithItems } from "@/common/models/Playlist";
import CreateOrUpdateListModal from "@/features/modals/list-modals/create-or-update-playlist-modal/components/CreateOrUpdateListModal";
import React from "react";
import { motion } from "framer-motion";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";

type Props = {
   playlist: PlaylistWithItems;
};

export default function UpdatePlaylistHandler({ playlist }: Props) {
   const [isUpdateOpen, setIsUpdateOpen] = React.useState(false);
   const openUpdateModal = () => setIsUpdateOpen(true);
   const closeUpdateModal = () => setIsUpdateOpen(false);

   return (
      <>
         <motion.div layout className="block">
            <MainButton square icon="edit" onClick={openUpdateModal} />
         </motion.div>
         <ModalPortal isOpen={isUpdateOpen}>
            <CreateOrUpdateListModal
               close={closeUpdateModal}
               playlist={playlist}
            />
         </ModalPortal>
      </>
   );
}
