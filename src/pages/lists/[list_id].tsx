import { GetServerSideProps } from "next";

import useModalState from "@/features/modals/modal-parts/hooks/useModalState";
import DeleteMediaModal from "@/features/modals/media-modals/delete-media-modal/components/DeleteMediaModal";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import LoadingSpinner from "@/common/components/LoadingSpinner";
import PageHead from "@/common/components/PageHead";
import useMediaData from "@/features/pages/list-id/hooks/useMediaData";
import useListData from "@/features/pages/list-id/hooks/useListData";
import useSavedMediaFilter from "@/features/pages/list-id/hooks/useSavedMediaFilter";
import useDeleteMode from "@/features/pages/list-id/hooks/useDeleteMode";
import SavedMediaCards from "@/features/pages/list-id/components/SavedMedia";
import DeleteMode from "@/features/pages/list-id/components/DeleteMode";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { list_id } = context.query!;
   return {
      props: { list_id },
   };
};

type Props = {
   list_id: string;
};

export default function ListID({ list_id }: Props) {
   const { media, refresh } = useMediaData(list_id);
   const { list } = useListData(list_id);

   const { filteredMedia, selectedType, setSelectedType, sortBy, setSortBy } =
      useSavedMediaFilter(media, list_id);

   const {
      mediaToDelete,
      onCardTap,
      isDeleteModeActive,
      startDeleteMode,
      stopDeleteMode,
      showButtons,
      textControls,
   } = useDeleteMode();

   const { isModalOpen, openModal, closeModal } = useModalState();

   if (!list || !filteredMedia)
      return (
         <div className="w-40 mx-auto mt-20">
            <LoadingSpinner />
         </div>
      );
   return (
      <>
         <PageHead title={list?.name || ""} />
         {/* <Title title={list.name}>
            <MediaFilter
               selectedType={selectedType}
               setSelectedType={setSelectedType}
               sortBy={sortBy}
               setSortBy={setSortBy}
            />
         </Title> */}
         <SavedMediaCards
            selectedType={selectedType}
            filteredMedia={filteredMedia}
            mediaToDelete={mediaToDelete}
            isDeleteModeActive={isDeleteModeActive}
            onCardTap={onCardTap}
            listId={list_id}
            refresh={refresh}
         />
         <DeleteMode
            showButtons={showButtons}
            mediaToDelete={mediaToDelete}
            startDeleteMode={startDeleteMode}
            stopDeleteMode={stopDeleteMode}
            openDeleteModal={openModal}
            textControls={textControls}
         />
         <ModalPortal isOpen={isModalOpen}>
            <DeleteMediaModal
               list={list}
               close={closeModal}
               mediaToDelete={mediaToDelete}
               refresh={refresh}
               stopDeleteMode={stopDeleteMode}
            />
         </ModalPortal>
      </>
   );
}
