import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { getList } from "../../actions/lists";
import DeleteButton from "../../components/list/DeleteButton";

import PageTitle from "../../components/PageTitle";
import useSidebarContext from "../../context/SidebarContext";
import MediaModel from "../../models/MediaModel";
// import ListModel from "../../models/listModel";
import SavedCard from "../../components/list/SavedCard";
import DeleteMediaModal from "../../components/list/DeleteMediaModal";
import { getMedia } from "../../actions/media";
import useRefresh from "../../hooks/useRefresh";

type Props = { listID: string };

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { listID } = context.query!;
   return {
      props: { listID },
   };
};

export default function ListID({ listID }: Props) {
   const [list, setList] = useState<any>();
   const { openSidebar } = useSidebarContext();

   const [media, setMedia] = useState<MediaModel[]>([]);
   const [mediaToDelete, setMediaToDelete] = useState<MediaModel[]>([]);

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
      closeDelete();
   };

   useEffect(() => {
      const getListFunc = async () => {
         const list = await getList(listID);
         setList(list);
      };
      getListFunc();
   }, [listID]);

   const { search, refresh } = useRefresh();

   useEffect(() => {
      const getMediaFunc = async () => {
         const media = await getMedia(listID);
         setMedia(media);
      };
      getMediaFunc();
   }, [listID, search]);

   return (
      <div>
         <PageTitle>{list?.name}</PageTitle>
         <div
            className={`grid grid-cols-2 md:grid-cols-3 ${
               openSidebar
                  ? "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                  : "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
            }  gap-5`}
         >
            {media.map((media) => (
               <SavedCard
                  key={media.id}
                  media={media}
                  isDeleteOpen={isDeleteOpen}
                  mediaToDelete={mediaToDelete}
                  setMediaToDelete={setMediaToDelete}
               />
            ))}
         </div>

         <DeleteButton
            mediaToDelete={mediaToDelete}
            isDeleteOpen={isDeleteOpen}
            onClick={isDeleteOpen ? closeDelete : openDelete}
            openDeleteModal={openDeleteModal}
         />
         <DeleteMediaModal
            list={list}
            isOpen={isDeleteModalOpen}
            close={closeDeleteModal}
            mediaToDelete={mediaToDelete}
            refresh={refresh}
         />
      </div>
   );
}