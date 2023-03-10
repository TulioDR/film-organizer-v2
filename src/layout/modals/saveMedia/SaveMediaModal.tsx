import useListsContext from "../../../context/ListsContext";
import ModalButton from "../ModalButton";
import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalContainer from "../ModalContainer";
import ModalTitle from "../ModalTitle";

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
         <ModalTitle>Save to...</ModalTitle>
         <div className="w-56 border-y border-light-text-soft dark:border-dark-text-soft">
            {lists.length > 0 ? (
               lists.map((list) => (
                  <ListToSave
                     key={list.id}
                     list={list}
                     media={currentMedia}
                     mediaType={currentType}
                  />
               ))
            ) : (
               <div className="text-sm text-center my-5">
                  You need to create Lists first to start saving Movies and TV
                  Series in them
               </div>
            )}
         </div>

         <ModalButtonsContainer>
            <ModalButton onClick={closeSaveMediaModal}>Close</ModalButton>
         </ModalButtonsContainer>
      </ModalContainer>
   );
}
