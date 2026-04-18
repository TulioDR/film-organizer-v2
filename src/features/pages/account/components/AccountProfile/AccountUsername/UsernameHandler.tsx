import MainButton from "@/common/components/MainButton";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import UpdateUsernameModal from "@/features/modals/user-modals/update-username-modal/components/UpdateUsernameModal";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

type Props = {};

export default function UsernameHandler({}: Props) {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

   const openModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);
   const { user } = useUser();
   return (
      <>
         <ModalPortal isOpen={isModalOpen}>
            <UpdateUsernameModal close={closeModal} />
         </ModalPortal>
         <MainButton
            onClick={openModal}
            text={user?.username ? "Edit username" : "Add username"}
         />
      </>
   );
}
