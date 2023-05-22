import { useRouter } from "next/router";
import useListsContext from "../../../context/ListsContext";
import ModalButton from "../ModalButton";
import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalContainer from "../ModalContainer";
import ModalTitle from "../ModalTitle";
import ModalPortal from "../ModalPortal";

export default function LoginAdviceModal() {
   const { isLoginAdviceOpen, closeLoginAdviceModal } = useListsContext();

   const router = useRouter();
   const goToLogin = () => {
      router.push("/login");
   };

   return (
      <ModalPortal isOpen={isLoginAdviceOpen}>
         <ModalContainer close={closeLoginAdviceModal}>
            <ModalTitle>Login First!</ModalTitle>
            <div className="w-full sm:w-80 text-light-text-normal dark:text-dark-text-normal">
               You need to be Logged in first to save Movies and TV Shows to
               your Lists
            </div>
            <ModalButtonsContainer>
               <ModalButton onClick={closeLoginAdviceModal}>Close</ModalButton>
               <ModalButton onClick={goToLogin} blue>
                  Login
               </ModalButton>
            </ModalButtonsContainer>
         </ModalContainer>
      </ModalPortal>
   );
}
