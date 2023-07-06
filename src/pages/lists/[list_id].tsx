import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

import PageTitle from "../../components/PageTitle";
import { SavedMediaModel } from "../../models/MediaModel";

import { getListMedia } from "@/api/media";

import Head from "next/head";
import { staggerContainer } from "../../animations/StaggerCards";
import { motion } from "framer-motion";

import TransitionPoster from "../../features/transitionPoster/components/TransitionPoster";
import useTransitionPoster from "../../features/transitionPoster/hooks/useTransitionPoster";
import { useDispatch, useSelector } from "react-redux";
import DeleteMediaModal from "@/components/Modals/DeleteMediaModal";
import SavedMediaCard from "@/components/ListDetails/SavedMediaCard";
import MediaTypePills from "@/components/ListDetails/MediaTypePills";
import { backgroundActions } from "@/store/slices/background-slice";
import { query } from "@/config/db";
import ListModel from "@/models/listModel";
import StoreModel from "@/models/StoreModel";
import DeleteMediaButtons from "@/components/ListDetails/DeleteMediaButtons";
import ModalPortal from "@/components/Modals/ModalPortal";

type Props = {
   list: ListModel;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { list_id } = context.query!;
   const listData = await query(
      `
      SELECT * FROM lists
      WHERE id = ?
      `,
      [list_id]
   );
   const list = JSON.parse(JSON.stringify(listData))[0];
   return {
      props: { list },
   };
};

export default function ListID({ list }: Props) {
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);

   const [media, setMedia] = useState<SavedMediaModel[]>([]);
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

   const [filteredMedia, setFilteredMedia] = useState<SavedMediaModel[]>([]);
   const [selectedType, setSelectedType] = useState<"movie" | "tv" | "all">(
      "all"
   );

   const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
   const refresh = () => setIsRefreshing((prev) => !prev);

   useEffect(() => {
      const getMediaOnRefresh = async () => {
         const media = await getListMedia(list.id);
         setMedia(media);
      };
      getMediaOnRefresh();
   }, [list.id, isRefreshing]);

   useEffect(() => {
      if (selectedType === "all") {
         setFilteredMedia(media);
      } else {
         const filtered = media.filter(
            ({ media_type }) => media_type === selectedType
         );
         setFilteredMedia(filtered);
      }
   }, [media, selectedType]);

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(backgroundActions.removeBackground());
   }, [dispatch]);

   const {
      selectedImg,
      position,
      setTransitionValues,
      showSpinner,
      onPosterAnimationComplete,
      closePoster,
      isPageHidden,
      hidePage,
   } = useTransitionPoster();

   return (
      <div className="px-10 pb-10 ">
         <Head>
            <title>{list.name}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div
            className={`overflow-hidden ${
               isPageHidden ? "opacity-0 duration-300" : ""
            }`}
         >
            <div className="w-full flex items-end justify-between">
               <PageTitle>{list.name}</PageTitle>
               <MediaTypePills
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
               />
            </div>
            <motion.div
               variants={staggerContainer}
               initial="initial"
               animate="animate"
               exit="exit"
               className={`gap-5 grid grid-cols-2 md:grid-cols-3 ${
                  expandSidebar
                     ? "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                     : "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
               }`}
            >
               {filteredMedia.map((media) => (
                  <SavedMediaCard
                     key={media.media_title + media.media_id}
                     media={media}
                     isDeleteOpen={isDeleteOpen}
                     mediaToDelete={mediaToDelete}
                     setMediaToDelete={setMediaToDelete}
                     setTransitionValues={setTransitionValues}
                     hidePage={hidePage}
                  />
               ))}
            </motion.div>
         </div>
         <TransitionPoster
            position={position}
            selectedImg={selectedImg}
            closePoster={closePoster}
            onAnimationComplete={onPosterAnimationComplete}
            showSpinner={showSpinner}
         />
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
   );
}
