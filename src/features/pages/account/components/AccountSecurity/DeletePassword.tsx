import { useUser } from "@clerk/nextjs";
import React from "react";
import AccountButton from "../AccountButton";
import useModalState from "@/hooks/useModalState";
import ModalPortal from "@/components/Modals/ModalPortal";
import DeletePasswordModal from "@/features/modals/deletePasswordModal/components/DeletePasswordModal";

export default function DeletePassword() {
   const { isModalOpen, openModal, closeModal } = useModalState();

   const { user } = useUser();
   if (!user) return <></>;
   return (
      <>
         <div className="flex justify-between items-center">
            <div>
               <div>
                  This account is connected with one or more external accounts.
               </div>
               <div>See connected accounts to see which ones.</div>
               <div>
                  You can delete the password if you plan to login using only
                  those external accounts.
               </div>
               <div>You can add a password later at anytime.</div>
            </div>
            <AccountButton onClick={openModal}>Delete Password</AccountButton>
         </div>
         <ModalPortal isOpen={isModalOpen}>
            <DeletePasswordModal close={closeModal} />
         </ModalPortal>
      </>
   );
}
