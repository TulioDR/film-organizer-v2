import { useRouter } from "next/router";
import ModalButton from "../ModalButton";
import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalContainer from "../ModalContainer";
import ModalTitle from "../ModalTitle";
import ModalPortal from "../ModalPortal";
import { useDispatch, useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import { bookmarkActions } from "@/store/slices/bookmark-slice";

export default function LoginAdviceModal() {
   const router = useRouter();
   const goToLogin = () => {
      router.push("/login");
   };

   const { isLoginAdviceOpen } = useSelector(
      (state: StoreModel) => state.bookmark
   );

   const dispatch = useDispatch();
   const closeModal = () => {
      dispatch(bookmarkActions.closeLoginAdviceModal());
   };

   return <></>;
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
