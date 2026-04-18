import MainButton from "@/common/components/MainButton";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import DeleteUserModal from "@/features/modals/user-modals/delete-user-modal/components/DeleteUserModal";
import { useState } from "react";

type Props = {};

export default function DeleteUserHandler({}: Props) {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

   const openModal = () => {
      setIsModalOpen(true);
   };
   const closeModal = () => {
      setIsModalOpen(false);
   };

   return (
      <>
         <ModalPortal isOpen={isModalOpen}>
            <DeleteUserModal close={closeModal} />
         </ModalPortal>
         <MainButton text="Delete Account" type="delete" onClick={openModal} />
      </>
   );
}
