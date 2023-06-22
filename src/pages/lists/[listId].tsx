import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import DeleteMedia from "@/components/ListDetails/DeleteMedia";

import PageTitle from "../../components/PageTitle";
import { SavedMediaModel } from "../../models/MediaModel";

import { getMedia } from "../../api/media";

import Head from "next/head";
import { staggerContainer } from "../../animations/StaggerCards";
import { motion } from "framer-motion";

import prisma from "../../lib/prisma";

import TransitionPoster from "../../features/transitionPoster/components/TransitionPoster";
import useTransitionPoster from "../../features/transitionPoster/hooks/useTransitionPoster";
import { useDispatch, useSelector } from "react-redux";
import DeleteMediaModal from "@/components/Modals/DeleteMediaModal";
import SavedMediaCard from "@/components/ListDetails/SavedMediaCard";
import MediaTypePills from "@/components/ListDetails/MediaTypePills";
import { backgroundActions } from "@/store/slices/background-slice";

type Props = { listId: string; list: any; initialMedia: SavedMediaModel[] };

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { listId } = context.query!;
   const listData = await prisma.list.findUnique({
      where: { id: listId as string },
   });
   const list = JSON.parse(JSON.stringify(listData));

   const mediaData = await prisma.media.findMany({
      where: { listId: listId as string },
   });
   const media = JSON.parse(JSON.stringify(mediaData));
   return {
      props: { listId, list, initialMedia: media },
   };
};

export default function ListID({ listId, list, initialMedia }: Props) {
   const { expandSidebar } = useSelector((state: any) => state.sidebar);

   const [media, setMedia] = useState<SavedMediaModel[]>(initialMedia);
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
      closeDelete();
   };

   const [filteredMedia, setFilteredMedia] =
      useState<SavedMediaModel[]>(initialMedia);
   const [selectedType, setSelectedType] = useState<"movie" | "tv" | "all">(
      "all"
   );

   useEffect(() => {
      const getMediaOnRefresh = async () => {
         const media = await getMedia(listId);
         setMedia(media);
      };
      getMediaOnRefresh();
   }, [listId]);

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
            <div className="w-full flex items-center justify-between">
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
                     key={media.name}
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
         <DeleteMedia
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
         />
      </div>
   );
}
