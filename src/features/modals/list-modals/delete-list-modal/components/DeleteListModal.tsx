import { useState } from "react";

import useNotification from "@/features/layout/notification/hooks/useNotification";
import ModalTitle from "@/features/modals/modal-parts/components/ModalTitle";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import useListsRefresh from "@/common/hooks/useListsRefresh";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import { deletePlaylist } from "@/api/playlists";
import Playlist from "@/common/models/Playlist";
import MainButton from "@/common/components/MainButton";
import ModalAnimationContainer from "@/features/modals/modal-parts/components/ModalAnimationContainer";

type Props = {
   playlistToDelete: Playlist;
   close: () => void;
   isOpen: boolean;
};

export default function DeleteListModal({
   playlistToDelete,
   close,
   isOpen,
}: Props) {
   const { refreshLists } = useListsRefresh();
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const { showErrorNotification, showSuccessNotification } = useNotification();

   const deleteListFinally = async () => {
      setIsLoading(true);
      const { error } = await deletePlaylist(playlistToDelete.id);
      if (error) {
         showErrorNotification(error);
         setIsLoading(false);
      } else {
         showSuccessNotification("List deleted Successfully");
         refreshLists();
      }
      close();
   };

   return (
      <ModalPortal isOpen={isOpen}>
         <ModalAnimationContainer closeModal={close}>
            <ModalTitle>Delete List</ModalTitle>
            <div className="text-sm leading-relaxed text-text-2 font-normal w-96 text-black/50 dark:text-white/50">
               <div>
                  <span>Are you sure you want to delete the list </span>
                  <em className="text-black dark:text-white">
                     <strong>{`"${playlistToDelete.name}"`}</strong>
                  </em>
                  <span>?</span>
               </div>
               <div>
                  Note: Deleting a list is a permanent action and it cannot be
                  undone.
               </div>
            </div>
            <ModalButtonsContainer>
               <MainButton onClick={close} text="Cancel" />
               <MainButton
                  type="delete"
                  onClick={deleteListFinally}
                  isLoading={isLoading}
                  text="Delete"
               />
            </ModalButtonsContainer>
         </ModalAnimationContainer>
      </ModalPortal>
   );
}
