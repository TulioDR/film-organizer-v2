import { useEffect, useState } from "react";

import { SavedMediaModel } from "@/models/MediaModel";

import TransitionPoster from "@/features/transitionPoster/components/TransitionPoster";

import ListModel from "@/models/listModel";
import ModalPortal from "@/components/Modals/ModalPortal";
import DeleteMediaModal from "@/components/Modals/DeleteMediaModal";

import SavedMedia from "@/components/Pages/ListDetails/SavedMedia";
import MediaTypePills from "@/components/Pages/ListDetails/MediaTypePills";
import DeleteMediaButtons from "@/components/Pages/ListDetails/DeleteMediaButtons";

import useRemoveBackgroundImage from "@/hooks/useRemoveBackgroundImage";
import { getSpecificList } from "@/api/lists";
import { useRouter } from "next/router";
import { getSavedMedia } from "@/api/media";
import MediaFilterModel from "@/models/MediaFilterModel";
import { TransitionPosterProvider } from "@/features/transitionPoster/context/TransitionPosterContext";
import PageHead from "@/components/PageHead";
import Title from "@/components/Title";
type Props = {
   list: ListModel;
};

export default function ListID({}: Props) {
   const [list, setList] = useState<ListModel | null>(null);
   const [media, setMedia] = useState<SavedMediaModel[] | null>(null);

   const [filteredMedia, setFilteredMedia] = useState<SavedMediaModel[]>([]);
   const [selectedType, setSelectedType] = useState<MediaFilterModel>("all");
   const [mediaToDelete, setMediaToDelete] = useState<SavedMediaModel[]>([]);

   const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
   const openDelete = () => {
      setIsDeleteOpen(true);
   };
   const closeDelete = () => {
      setIsDeleteOpen(false);
      setMediaToDelete([]);
   };

   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
   const openDeleteModal = () => {
      setIsDeleteModalOpen(true);
   };
   const closeDeleteModal = () => {
      setIsDeleteModalOpen(false);
   };

   const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
   const refresh = () => setIsRefreshing((prev) => !prev);

   const { query } = useRouter();
   const { list_id } = query;
   useEffect(() => {
      const getMediaListData = async () => {
         const { data: listData } = await getSpecificList(list_id as string);
         setList(listData);
      };
      getMediaListData();
   }, [list_id]);

   useEffect(() => {
      const getMediaOnRefresh = async () => {
         const { data: mediaData } = await getSavedMedia(list_id as string);
         setMedia(mediaData);
      };
      getMediaOnRefresh();
   }, [list_id, isRefreshing]);

   useEffect(() => {
      if (!media) return;
      if (selectedType === "all") {
         setFilteredMedia(media);
      } else {
         const filtered = media.filter(
            ({ media_type }) => media_type === selectedType
         );
         setFilteredMedia(filtered);
      }
   }, [media, selectedType]);

   useRemoveBackgroundImage();

   const onCardTap = (media: SavedMediaModel) => {
      const isSelected = mediaToDelete.includes(media);
      if (isSelected) {
         setMediaToDelete((old) => old.filter(({ id }) => id !== media.id));
      } else {
         setMediaToDelete((old) => [...old, media]);
      }
   };
   return (
      <TransitionPosterProvider>
         <div className="px-10 pb-10 relative">
            <PageHead title={list?.name || "Film Organizer"} />
            {list && (
               <Title title={list.name}>
                  <MediaTypePills
                     selectedType={selectedType}
                     setSelectedType={setSelectedType}
                  />
               </Title>
            )}
            {filteredMedia.length > 0 && (
               <SavedMedia
                  filteredMedia={filteredMedia}
                  mediaToDelete={mediaToDelete}
                  isDeleteOpen={isDeleteOpen}
                  onCardTap={onCardTap}
               />
            )}
            <TransitionPoster />
            <DeleteMediaButtons
               mediaToDelete={mediaToDelete}
               isDeleteOpen={isDeleteOpen}
               onClick={isDeleteOpen ? closeDelete : openDelete}
               openDeleteModal={openDeleteModal}
            />
            <ModalPortal isOpen={isDeleteModalOpen}>
               <DeleteMediaModal
                  list={list}
                  close={closeDeleteModal}
                  mediaToDelete={mediaToDelete}
                  refresh={refresh}
               />
            </ModalPortal>
         </div>
      </TransitionPosterProvider>
   );
}
