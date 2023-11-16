import ModalPortal from "@/components/Modals/ModalPortal";
import DeleteMediaModal from "@/components/Modals/DeleteMediaModal";

import { GetServerSideProps } from "next";
import { TransitionPosterProvider } from "@/features/transitionPoster/context/TransitionPosterContext";

import Title from "@/components/Title";
import PageHead from "@/components/PageHead";

import useModalState from "@/hooks/useModalState";
import useListData from "@/features/pages/listDetails/hooks/useListData";
import useMediaData from "@/features/pages/listDetails/hooks/useMediaData";
import useSavedMediaFilter from "@/features/pages/listDetails/hooks/useSavedMediaFilter";
import useDeleteMode from "@/features/pages/listDetails/hooks/useDeleteMode";
import SavedMedia from "@/features/pages/listDetails/components/SavedMedia";
import DeleteMode from "@/features/pages/listDetails/components/DeleteMode";
import MediaFilter from "@/features/pages/listDetails/components/MediaFilter";
import LoadingSpinner from "@/components/LoadingSpinner";

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
      <TransitionPosterProvider>
         <PageHead title={list?.name || ""} />
         <Title title={list.name}>
            <MediaFilter
               selectedType={selectedType}
               setSelectedType={setSelectedType}
               sortBy={sortBy}
               setSortBy={setSortBy}
            />
         </Title>
         <SavedMedia
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
      </TransitionPosterProvider>
   );
}
