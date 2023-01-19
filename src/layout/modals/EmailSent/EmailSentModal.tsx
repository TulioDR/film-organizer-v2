import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalContainer from "../ModalContainer";
import ModalTitle from "../ModalTitle";

type Props = {
   isOpen: boolean;
   close: () => void;
   email: string;
   forgotPassWord: boolean;
};

export default function EmailSentModal({
   isOpen,
   close,
   email,
   forgotPassWord,
}: Props) {
   return (
      <ModalContainer isOpen={isOpen} close={close}>
         <div className="w-96 dark:text-white">
            <div className="mx-auto w-max text-center">
               <div className="font-semibold">
                  <ModalTitle>
                     {forgotPassWord
                        ? "Check your email"
                        : "Verify your account"}
                  </ModalTitle>
               </div>
               <span className="material-icons text-7xl">send</span>
            </div>
            <div className="text-center text-sm">
               {forgotPassWord ? (
                  <div>
                     An email has been sent to <em>{email}</em>. Please check
                     your mailbox to reset your password.
                  </div>
               ) : (
                  <div>
                     A verification link has been sent to <em>{email}</em>.
                     Please check your mailbox to verify the account before you
                     Sign In.
                  </div>
               )}
            </div>
            <ModalButtonsContainer>
               <button
                  className="bg-slate-800 text-dark-text-hard rounded-lg px-3 py-2"
                  onClick={close}
               >
                  Accept
               </button>
            </ModalButtonsContainer>
         </div>
      </ModalContainer>
   );
}
