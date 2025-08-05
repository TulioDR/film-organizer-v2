import { useDispatch, useSelector } from "react-redux";

import ListToSave from "./ListToSave";
import { bookmarkActions } from "@/store/slices/bookmark-slice";
import NoListsText from "./NoListsText";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import ModalContainer from "@/features/modals/modal-parts/components/ModalContainer";
import ModalTitle from "@/features/modals/modal-parts/components/ModalTitle";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import ModalButton from "@/features/modals/modal-parts/components/ModalButton";
import Store from "@/common/models/Store";

export default function SaveMediaModal() {
   const { lists } = useSelector((state: Store) => state.lists);
   const { mediaToSave, isSaveMediaOpen } = useSelector(
      (state: Store) => state.bookmark
   );

   const dispatch = useDispatch();
   const closeModal = () => {
      dispatch(bookmarkActions.closeSaveMediaModal());
   };

   if (!mediaToSave) return <></>;
   if (!lists) return <></>;
   return (
      <ModalPortal isOpen={isSaveMediaOpen}>
         <ModalContainer closeModal={closeModal}>
            <ModalTitle>Save to...</ModalTitle>
            <div className="w-56 border-y border-light-2 dark:border-dark-2">
               {lists.length === 0 && <NoListsText />}
               {lists.length > 0 &&
                  lists.map((list) => (
                     <ListToSave
                        key={list.id}
                        list={list}
                        media={mediaToSave.media}
                        mediaType={mediaToSave.mediaType}
                     />
                  ))}
            </div>

            <ModalButtonsContainer>
               <ModalButton onClick={closeModal}>Close</ModalButton>
            </ModalButtonsContainer>
         </ModalContainer>
      </ModalPortal>
   );
}
