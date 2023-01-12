import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalContainer from "../ModalContainer";
import ModalTItle from "../ModalTItle";

type Props = {
   isOpen: boolean;
   close: () => void;
   email: string;
};

export default function ConfirmEmailModal({ isOpen, close, email }: Props) {
   return (
      <ModalContainer isOpen={isOpen} close={close}>
         <div className="w-96 dark:text-white">
            <div className="mx-auto w-max text-center">
               <div className="font-semibold">
                  <ModalTItle>Verify your account</ModalTItle>
               </div>
               <span className="material-icons text-7xl">send</span>
            </div>
            <p className="text-center text-sm">
               A verification link has been sent to <em>{email}</em>. Please
               check your mailbox to verify the account before you Sign In.
            </p>
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
