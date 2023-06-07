import useListsRefresh from "@/hooks/useListsRefresh";
import { deleteList } from "../../../api/lists";
import ListModel from "../../../models/listModel";
import ModalButton from "../ModalButton";
import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalContainer from "../ModalContainer";
import ModalPortal from "../ModalPortal";
import ModalTitle from "../ModalTitle";

type Props = {
   isOpen: boolean;
   listToDelete: ListModel | null;
   close: () => void;
};

export default function DeleteListModal({
   isOpen,
   listToDelete,
   close,
}: Props) {
   const { refreshLists } = useListsRefresh();

   const deleteListFinally = async () => {
      const deletedList = await deleteList(listToDelete!.id);
      console.log(deletedList);
      refreshLists();
      close();
   };
   return (
      <ModalPortal isOpen={isOpen}>
         <ModalContainer close={close}>
            <ModalTitle>Delete List</ModalTitle>
            <div className="text-sm leading-relaxed text-dark-text-normal font-normal w-96">
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
               <ModalButton onClick={deleteListFinally} red>
                  Delete
               </ModalButton>
            </ModalButtonsContainer>
         </ModalContainer>
      </ModalPortal>
   );
}
