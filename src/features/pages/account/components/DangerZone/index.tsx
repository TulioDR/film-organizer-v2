import Subtitle from "@/components/Subtitle";
import React from "react";
import ProfileCardsGrid from "../ProfileCardsGrid";
import ProfileCard from "../AccountCard";
import AccountButton from "../AccountButton";
import useModalState from "@/hooks/useModalState";
import ModalPortal from "@/components/Modals/ModalPortal";
import DeleteUserModal from "@/features/modals/deleteUserModal/components/DeleteUserModal";

type Props = {};

export default function DangerZone({}: Props) {
   const { isModalOpen, openModal, closeModal } = useModalState();

   return (
      <>
         <Subtitle>Danger Zone</Subtitle>
         <ProfileCardsGrid>
            <ProfileCard title="Delete account" dangerZone expand>
               <div className="flex justify-between items-center">
                  <div className="text-light-1 dark:text-dark-1">
                     <div>
                        {
                           "This will also delete all the lists that you've created."
                        }
                     </div>
                     <div>This action cannot be undone.</div>
                  </div>
                  <AccountButton dangerZone onClick={openModal}>
                     Delete account
                  </AccountButton>
               </div>
            </ProfileCard>
         </ProfileCardsGrid>
         <ModalPortal isOpen={isModalOpen}>
            <DeleteUserModal close={closeModal} />
         </ModalPortal>
      </>
   );
}
