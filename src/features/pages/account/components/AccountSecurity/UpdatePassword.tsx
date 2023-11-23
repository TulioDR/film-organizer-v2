import React from "react";
import AccountButton from "../AccountButton";
import { useUser } from "@clerk/nextjs";
import ModalPortal from "@/components/Modals/ModalPortal";
import UpdatePasswordModal from "@/features/modals/updatePasswordModal/components/UpdatePasswordModal";
import useModalState from "@/hooks/useModalState";

export default function UpdatePassword() {
   const { isModalOpen, openModal, closeModal } = useModalState();

   const { user } = useUser();
   if (!user) return <></>;
   return (
      <>
         <ModalPortal isOpen={isModalOpen}>
            <UpdatePasswordModal close={closeModal} />
         </ModalPortal>
         <div className="flex justify-between items-center">
            {user.passwordEnabled ? (
               <span>Change the account's password.</span>
            ) : (
               <div>
                  <div>
                     This account does not have a password because you login
                     with a another account.
                  </div>
                  <div>
                     (Check connected accounts to see which ones are you using)
                  </div>
                  <div>You can add a password to login with it</div>
               </div>
            )}
            <AccountButton onClick={openModal}>
               {user?.passwordEnabled ? (
                  <span>Update Password</span>
               ) : (
                  <span>Add Password</span>
               )}
            </AccountButton>
         </div>
      </>
   );
}
