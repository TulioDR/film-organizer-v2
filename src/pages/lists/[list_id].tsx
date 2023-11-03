import ModalPortal from "@/components/Modals/ModalPortal";
import DeleteMediaModal from "@/components/Modals/DeleteMediaModal";

import { GetServerSideProps } from "next";
import { TransitionPosterProvider } from "@/features/transitionPoster/context/TransitionPosterContext";

import Title from "@/components/Title";
import PageHead from "@/components/PageHead";

import MediaTypePills from "@/features/listDetails/components/MediaTypePills";
import SavedMedia from "@/features/listDetails/components/SavedMedia";
import DeleteMediaButtons from "@/features/listDetails/components/DeleteMediaButtons";

import useModalState from "@/hooks/useModalState";
import useDeleteMode from "@/features/listDetails/hooks/useDeleteMode";
import useSavedMediaFilter from "@/features/listDetails/hooks/useSavedMediaFilter";
import useListData from "@/features/listDetails/hooks/useListData";
import useMediaData from "@/features/listDetails/hooks/useMediaData";

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

   const { filteredMedia, selectedType, setSelectedType } = useSavedMediaFilter(
      media,
      list_id
   );

   const {
      mediaToDelete,
      onCardTap,
      isDeleteModeActive,
      startDeleteMode,
      stopDeleteMode,
   } = useDeleteMode();

   const { isModalOpen, openModal, closeModal } = useModalState();

   return (
      <TransitionPosterProvider>
         <PageHead title={list?.name || ""} />
         {list && (
            <Title title={list.name}>
               <MediaTypePills
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
               />
            </Title>
         )}
         <SavedMedia
            selectedType={selectedType}
            filteredMedia={filteredMedia}
            mediaToDelete={mediaToDelete}
            isDeleteModeActive={isDeleteModeActive}
            onCardTap={onCardTap}
         />
         <DeleteMediaButtons
            mediaToDelete={mediaToDelete}
            startDeleteMode={startDeleteMode}
            stopDeleteMode={stopDeleteMode}
            openDeleteModal={openModal}
         />
         <ModalPortal isOpen={isModalOpen}>
            <DeleteMediaModal
               list={list}
               close={closeModal}
               mediaToDelete={mediaToDelete}
               refresh={refresh}
            />
         </ModalPortal>
      </TransitionPosterProvider>
   );
}
