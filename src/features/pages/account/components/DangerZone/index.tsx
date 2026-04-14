import ProfileCard from "../AccountCard";
import useModalState from "@/features/modals/modal-parts/hooks/useModalState";
import DeleteUserModal from "@/features/modals/user-modals/delete-user-modal/components/DeleteUserModal";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import PageSubtitle from "@/common/components/PageSubtitle";
import PlaylistCardButton from "@/features/pages/playlists/components/PlaylistCard/PlaylistCardButton";

type Props = {};

export default function DangerZone({}: Props) {
   const { isModalOpen, openModal, closeModal } = useModalState();

   return (
      <div className="w-full h-full flex flex-col">
         <PageSubtitle>Danger Zone</PageSubtitle>
         <ProfileCard title="Delete account">
            <div className="text-black dark:text-white">
               <div>
                  This will also delete all the lists that you've created, and
                  the that you have saved.
               </div>
               <div>This action cannot be undone.</div>
            </div>
            <div className="h-12 flex justify-end">
               <PlaylistCardButton
                  type="delete"
                  text="Delete Account"
                  onClick={openModal}
               />
            </div>
         </ProfileCard>
         <ModalPortal isOpen={isModalOpen}>
            <DeleteUserModal close={closeModal} />
         </ModalPortal>
      </div>
   );
}
