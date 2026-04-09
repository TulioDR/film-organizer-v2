import { useRouter } from "next/router";

import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import ModalContainer from "@/features/modals/modal-parts/components/ModalContainer";
import ModalTitle from "@/features/modals/modal-parts/components/ModalTitle";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import ModalButton from "@/features/modals/modal-parts/components/ModalButton";

type props = {
   isOpen: boolean;
   message: string;
   closeModal: () => void;
};

export default function LoginAdviceModal({
   isOpen,
   message,
   closeModal,
}: props) {
   const router = useRouter();
   const goToLogin = () => {
      router.push("/auth");
   };

   return (
      <ModalPortal isOpen={isOpen}>
         <ModalContainer closeModal={closeModal}>
            <ModalTitle>Login First!</ModalTitle>
            <div className="w-full sm:w-80 text-text-2">{message}</div>
            <ModalButtonsContainer>
               <ModalButton onClick={closeModal}>Close</ModalButton>
               <ModalButton onClick={goToLogin} special>
                  Login
               </ModalButton>
            </ModalButtonsContainer>
         </ModalContainer>
      </ModalPortal>
   );
}
