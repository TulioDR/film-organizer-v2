import { useDispatch, useSelector } from "react-redux";
import ModalButton from "../ModalButton";
import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalContainer from "../ModalContainer";
import ModalPortal from "../ModalPortal";
import ModalTitle from "../ModalTitle";

import ListToSave from "./ListToSave";
import { bookmarkActions } from "@/store/slices/bookmark-slice";
import StoreModel from "@/models/StoreModel";

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
   return (
      <ModalPortal isOpen={isSaveMediaOpen}>
         <ModalContainer close={closeModal}>
            <ModalTitle>Save to...</ModalTitle>
            <div className="w-56 border-y border-dark-text-soft">
               {lists.length > 0 ? (
                  lists.map((list: any) => (
                     <ListToSave
                        key={list.id}
                        list={list}
                        media={mediaToSave.media}
                        mediaType={mediaToSave.mediaType}
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
               <ModalButton onClick={closeModal}>Close</ModalButton>
            </ModalButtonsContainer>
         </ModalContainer>
      </ModalPortal>
   );
}
