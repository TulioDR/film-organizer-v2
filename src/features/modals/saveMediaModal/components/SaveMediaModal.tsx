import { useDispatch, useSelector } from "react-redux";
import ModalButton from "@/components/Modals/ModalButton";

import ModalButtonsContainer from "@/components/Modals/ModalButtonsContainer";
import ModalContainer from "@/components/Modals/ModalContainer";
import ModalPortal from "@/components/Modals/ModalPortal";
import ModalTitle from "@/components/Modals/ModalTitle";

import ListToSave from "./ListToSave";
import { bookmarkActions } from "@/store/slices/bookmark-slice";
import StoreModel from "@/models/StoreModel";
import NoListsText from "./NoListsText";

export default function SaveMediaModal() {
   const { lists } = useSelector((state: StoreModel) => state.lists);
   const { mediaToSave, isSaveMediaOpen } = useSelector(
      (state: StoreModel) => state.bookmark
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
