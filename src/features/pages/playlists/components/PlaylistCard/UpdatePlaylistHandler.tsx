import MainButton from "@/common/components/MainButton";
import Playlist from "@/common/models/Playlist";
import CreateOrUpdateListModal from "@/features/modals/list-modals/create-or-update-playlist-modal/components/CreateOrUpdateListModal";
import React from "react";

type Props = {
   playlist: Playlist;
};

export default function UpdatePlaylistHandler({ playlist }: Props) {
   const [isUpdateOpen, setIsUpdateOpen] = React.useState(false);
   const openUpdateModal = () => setIsUpdateOpen(true);
   const closeUpdateModal = () => setIsUpdateOpen(false);

   return (
      <>
         <MainButton square icon="edit" onClick={openUpdateModal} />
         <CreateOrUpdateListModal
            isOpen={isUpdateOpen}
            close={closeUpdateModal}
            playlist={playlist}
         />
      </>
   );
}
