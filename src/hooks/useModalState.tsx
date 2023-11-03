import { useState } from "react";

export default function useModalState() {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const openModal = () => {
      setIsModalOpen(true);
   };
   const closeModal = () => {
      setIsModalOpen(false);
   };
   return { isModalOpen, openModal, closeModal };
}
