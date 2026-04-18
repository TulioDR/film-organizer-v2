import MainButton from "@/common/components/MainButton";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import UpdatePasswordModal from "@/features/modals/user-modals/update-password-modal/components/UpdatePasswordModal";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

type Props = {};

export default function PasswordHandler({}: Props) {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

   const openModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);
   const { user } = useUser();
   return (
      <>
         <ModalPortal isOpen={isModalOpen}>
            <UpdatePasswordModal close={closeModal} />
         </ModalPortal>
         <MainButton
            onClick={openModal}
            text={user?.passwordEnabled ? "Update Password" : "Add Password"}
         />
      </>
   );
}
