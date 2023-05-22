import useListsContext from "../../../context/ListsContext";
import ModalButton from "../ModalButton";
import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalContainer from "../ModalContainer";
import ModalPortal from "../ModalPortal";
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
      <ModalPortal isOpen={isSaveMediaOpen}>
         <ModalContainer close={closeSaveMediaModal}>
            <ModalTitle>Save to...</ModalTitle>
            <div className="w-56 border-y border-dark-text-soft">
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
                     You need to create Lists first to start saving Movies and
                     TV Series in them
                  </div>
               )}
            </div>

            <ModalButtonsContainer>
               <ModalButton onClick={closeSaveMediaModal}>Close</ModalButton>
            </ModalButtonsContainer>
         </ModalContainer>
      </ModalPortal>
   );
}
