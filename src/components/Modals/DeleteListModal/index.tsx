import useListsRefresh from "@/hooks/useListsRefresh";
import { deleteList } from "../../../api/lists";

import ModalButton from "../ModalButton";
import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalContainer from "../ModalContainer";
import ModalTitle from "../ModalTitle";
import { useState } from "react";
import LoadingButton from "../LoadingButton";
import useNotification from "@/features/notification/hooks/useNotification";
import ListModel from "@/models/ListModel";

type Props = {
   listToDelete: ListModel | null;
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
            <ModalButton onClick={deleteListFinally} red disabled={isLoading}>
               <LoadingButton isLoading={isLoading}>Delete</LoadingButton>
            </ModalButton>
         </ModalButtonsContainer>
      </ModalContainer>
   );
}
