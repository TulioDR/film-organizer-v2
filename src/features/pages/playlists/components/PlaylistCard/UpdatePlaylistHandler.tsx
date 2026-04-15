import MainButton from "@/common/components/MainButton";
import Playlist from "@/common/models/Playlist";
import CreateOrUpdateListModal from "@/features/modals/list-modals/create-or-update-playlist-modal/components/CreateOrUpdateListModal";
import React from "react";
import { motion } from "framer-motion";

type Props = {
   playlist: Playlist;
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
         <CreateOrUpdateListModal
            isOpen={isUpdateOpen}
            close={closeUpdateModal}
            playlist={playlist}
         />
      </>
   );
}
