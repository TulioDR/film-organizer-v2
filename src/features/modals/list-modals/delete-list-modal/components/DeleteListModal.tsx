import { useState } from "react";

import { deleteList } from "@/api/lists";
import useNotification from "@/features/layout/notification/hooks/useNotification";
import ModalContainer from "@/features/modals/modal-parts/components/ModalContainer";
import ModalTitle from "@/features/modals/modal-parts/components/ModalTitle";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import ModalButton from "@/features/modals/modal-parts/components/ModalButton";
import useListsRefresh from "@/common/hooks/useListsRefresh";
import List from "@/common/models/List";

type Props = {
   listToDelete: List | null;
   close: () => void;
};

export default function DeleteListModal({ listToDelete, close }: Props) {
   const { refreshLists } = useListsRefresh();

   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { showErrorNotification, showSuccessNotification } = useNotification();

   const deleteListFinally = async () => {
      setIsLoading(true);
      const { error } = await deleteList(listToDelete!.id);
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
      <ModalContainer closeModal={close}>
         <ModalTitle>Delete List</ModalTitle>
         <div className="text-sm leading-relaxed text-text-2 font-normal w-96">
            <div>
               <span>Are you sure you want to delete the list </span>
               <em className="text-white">
                  <strong>{`"${listToDelete?.name}"`}</strong>
               </em>
               <span>?</span>
            </div>
            <div>
               Note: Deleting a list is a permanent action and it cannot be
               undone.
            </div>
         </div>
         <ModalButtonsContainer>
            <ModalButton onClick={close}>Cancel</ModalButton>
            <ModalButton onClick={deleteListFinally} isLoading={isLoading} red>
               Delete
            </ModalButton>
         </ModalButtonsContainer>
      </ModalContainer>
   );
}
