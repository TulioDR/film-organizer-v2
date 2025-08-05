import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { bookmarkActions } from "@/store/slices/bookmark-slice";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import ModalContainer from "@/features/modals/modal-parts/components/ModalContainer";
import ModalTitle from "@/features/modals/modal-parts/components/ModalTitle";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import ModalButton from "@/features/modals/modal-parts/components/ModalButton";
import Store from "@/common/models/Store";

export default function LoginAdviceModal() {
   const router = useRouter();
   const goToLogin = () => {
      router.push("/auth");
   };

   const { isLoginAdviceOpen } = useSelector((state: Store) => state.bookmark);

   const dispatch = useDispatch();
   const closeModal = () => {
      dispatch(bookmarkActions.closeLoginAdviceModal());
   };
   return (
      <ModalPortal isOpen={isLoginAdviceOpen}>
         <ModalContainer closeModal={closeModal}>
            <ModalTitle>Login First!</ModalTitle>
            <div className="w-full sm:w-80 text-text-2">
               You need to be Logged in first to save Movies and TV Shows to
               your Lists
            </div>
            <ModalButtonsContainer>
               <ModalButton onClick={closeModal}>Close</ModalButton>
               <ModalButton onClick={goToLogin} blue>
                  Login
               </ModalButton>
            </ModalButtonsContainer>
         </ModalContainer>
      </ModalPortal>
   );
}
