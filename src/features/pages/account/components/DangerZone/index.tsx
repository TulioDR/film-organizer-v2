import React from "react";
import ProfileCardsGrid from "../ProfileCardsGrid";
import ProfileCard from "../AccountCard";
import AccountButton from "../AccountButton";
import useModalState from "@/features/modals/modal-parts/hooks/useModalState";
import DeleteUserModal from "@/features/modals/user-modals/delete-user-modal/components/DeleteUserModal";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import PageSubtitle from "@/common/components/PageSubtitle";

type Props = {};

export default function DangerZone({}: Props) {
   const { isModalOpen, openModal, closeModal } = useModalState();

   return (
      <div>
         <PageSubtitle>Danger Zone</PageSubtitle>
         <ProfileCardsGrid>
            <ProfileCard title="Delete account" dangerZone expand>
               <div className="flex justify-between items-center">
                  <div className="text-light-1 dark:text-dark-1">
                     <div>
                        This will also delete all the lists that you've created,
                        and the that you have saved.
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
      </div>
   );
}
