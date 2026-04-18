import { useRouter } from "next/router";

import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import ModalTitle from "@/features/modals/modal-parts/components/ModalTitle";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import ModalAnimationContainer from "@/features/modals/modal-parts/components/ModalAnimationContainer";
import MainButton from "@/common/components/MainButton";

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
         <ModalAnimationContainer closeModal={closeModal}>
            <ModalTitle>Login First!</ModalTitle>
            <div className="w-full sm:w-80 text-black dark:text-white">
               {message}
            </div>
            <ModalButtonsContainer>
               <MainButton onClick={closeModal} text="Close" />
               <MainButton onClick={goToLogin} text="Login" type="accent" />
            </ModalButtonsContainer>
         </ModalAnimationContainer>
      </ModalPortal>
   );
}
