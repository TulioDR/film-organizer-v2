import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import CreateOrUpdateListModal from "@/features/modals/list-modals/create-or-update-playlist-modal/components/CreateOrUpdateListModal";
import { useState } from "react";

type Props = {};

export default function CreatePlaylistButton({}: Props) {
   const [isCreateListModalOpen, setIsCreateListModalOpen] = useState(false);
   const openCreateListModal = () => {
      setIsCreateListModalOpen(true);
   };
   const closeCreateListModal = () => {
      setIsCreateListModalOpen(false);
   };
   return (
      <>
         <button
            onClick={openCreateListModal}
            style={{ borderRadius: STANDARD_RADIUS }}
            className={`h-16 px-4 flex items-center justify-center 
         bg-white dark:bg-black border border-border-light dark:border-border-dark
         hover:border-primary-dark dark:hover:border-primary-light
         active:border-primary-dark dark:active:border-primary-light
      `}
         >
            <span className="tracking-widest text-black dark:text-white">
               Create playlist
            </span>
         </button>
         <CreateOrUpdateListModal
            close={closeCreateListModal}
            isOpen={isCreateListModalOpen}
         />
      </>
   );
}
