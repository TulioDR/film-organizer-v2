import { deleteList } from "../../actions/lists";
import ListModel from "../../models/listModel";
import ModalButton from "../modals/ModalButton";
import ModalContainer from "../modals/ModalContainer";
import ModalTItle from "../modals/ModalTItle";

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
   const deleteListFinally = () => {
      deleteList(listToDelete!.id);
      close();
   };
   return (
      <ModalContainer isOpen={isOpen} close={close}>
         <ModalTItle>Delete List</ModalTItle>
         <div className="text-sm leading-relaxed text-light-text-normal dark:text-dark-text-normal font-normal w-96">
            <p>
               <span>Are you sure you want to delete the list "</span>
               <em className="text-light-text-hard dark:text-dark-text-hard">
                  <strong>{listToDelete?.name}</strong>
               </em>
               <span>"?</span>
            </p>
            <p>
               Note: Deleting a list is a permanent action and it cannot be
               undone.
            </p>
         </div>
         <div className="w-full flex justify-end space-x-2 mt-5">
            <ModalButton onClick={close}>Cancel</ModalButton>
            <ModalButton onClick={deleteListFinally} red>
               Delete
            </ModalButton>
         </div>
      </ModalContainer>
   );
}
