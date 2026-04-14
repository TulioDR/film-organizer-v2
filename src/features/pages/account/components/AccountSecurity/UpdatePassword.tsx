import { useUser } from "@clerk/nextjs";
import useModalState from "@/features/modals/modal-parts/hooks/useModalState";
import UpdatePasswordModal from "@/features/modals/user-modals/update-password-modal/components/UpdatePasswordModal";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import PlaylistCardButton from "@/features/pages/playlists/components/PlaylistCard/PlaylistCardButton";

export default function UpdatePassword() {
   const { isModalOpen, openModal, closeModal } = useModalState();

   const { user } = useUser();
   if (!user) return <></>;
   return (
      <>
         <ModalPortal isOpen={isModalOpen}>
            <UpdatePasswordModal close={closeModal} />
         </ModalPortal>

         {user.passwordEnabled ? (
            <span>{"Change the account's password."}</span>
         ) : (
            <div>
               <div>
                  This account does not have a password because you login with a
                  another account.
               </div>
               <div>
                  (Check connected accounts to see which ones are you using)
               </div>
               <div>You can add a password to login with it</div>
            </div>
         )}
         <div className="flex w-full justify-end h-12">
            <PlaylistCardButton
               text={user?.passwordEnabled ? "Update Password" : "Add Password"}
               onClick={openModal}
            />
         </div>
      </>
   );
}
