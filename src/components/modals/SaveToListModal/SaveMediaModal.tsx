import useListsContext from "../../../context/ListsContext";
import ModalButton from "../ModalButton";
import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalContainer from "../ModalContainer";
import ModalTItle from "../ModalTItle";
import ListToSave from "./ListToSave";

export default function SaveMediaModal() {
   const {
      isSaveMediaOpen,
      closeSaveMediaModal,
      lists,
      currentMedia,
      currentType,
   } = useListsContext();

   return (
      <ModalContainer isOpen={isSaveMediaOpen} close={closeSaveMediaModal}>
         <ModalTItle>Save to...</ModalTItle>
         <ul className="w-56 border-y border-light-text-soft dark:border-dark-text-soft">
            {lists.map((list) => (
               <ListToSave
                  key={list.id}
                  list={list}
                  media={currentMedia}
                  mediaType={currentType}
               />
            ))}
         </ul>
         <ModalButtonsContainer>
            <ModalButton onClick={closeSaveMediaModal}>Close</ModalButton>
         </ModalButtonsContainer>
      </ModalContainer>
   );
}
