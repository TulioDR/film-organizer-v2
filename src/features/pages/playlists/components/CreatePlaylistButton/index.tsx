import Responsive from "@/common/components/Responsive";
import { SM_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import { PlaylistWithItems } from "@/common/models/Playlist";
import CreateOrUpdateListModal from "@/features/modals/list-modals/create-or-update-playlist-modal/components/CreateOrUpdateListModal";
import { useState } from "react";

type Props = {
   setFilteredPlaylists: React.Dispatch<
      React.SetStateAction<PlaylistWithItems[]>
   >;
};

export default function CreatePlaylistButton({ setFilteredPlaylists }: Props) {
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
            className={`h-12 w-12 sm:w-auto xl:h-16 sm:px-4 flex items-center justify-center pointer-events-auto
         bg-white dark:bg-black border border-border-light dark:border-border-dark
         hover:border-primary-dark dark:hover:border-primary-light
         active:border-primary-dark dark:active:border-primary-light
      `}
         >
            <Responsive minWidth={SM_MEDIA_QUERY}>
               <span className="tracking-widest text-black dark:text-white">
                  Create playlist
               </span>
            </Responsive>
            <Responsive maxWidth={SM_MEDIA_QUERY}>
               <span className="material-symbols-outlined text-black dark:text-white">
                  add
               </span>
            </Responsive>
         </button>
         <CreateOrUpdateListModal
            setFilteredPlaylists={setFilteredPlaylists}
            close={closeCreateListModal}
            isOpen={isCreateListModalOpen}
         />
      </>
   );
}
