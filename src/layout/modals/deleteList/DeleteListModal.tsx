import { deleteList } from "../../../api/lists";
import useListsContext from "../../../context/ListsContext";
import ListModel from "../../../models/listModel";
import ModalButton from "../ModalButton";
import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalContainer from "../ModalContainer";
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
   const { refresh } = useListsContext();

   const deleteListFinally = async () => {
      const deletedList = await deleteList(listToDelete!.id);
      console.log(deletedList);
      refresh();
      close();
   };
   return (
      <ModalContainer isOpen={isOpen} close={close}>
         <ModalTitle>Delete List</ModalTitle>
         <div className="text-sm leading-relaxed text-light-text-normal dark:text-dark-text-normal font-normal w-96">
            <div>
               <span>Are you sure you want to delete the list </span>
               <em className="text-light-text-hard dark:text-dark-text-hard">
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
   );
}
