import { motion } from "framer-motion";
import MainCard from "./MainCard";

import useSearchCards from "../hooks/useSearchCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backgroundActions } from "@/store/slices/background-slice";
import StoreModel from "@/models/StoreModel";
import LoadingMore from "./LoadingMore";
import useTransitionPoster from "@/features/transitionPoster/hooks/useTransitionPoster";
import PageAnimationContainer from "@/containers/PageAnimationContainer";
import PageTitle from "@/components/PageTitle";
import TransitionPoster from "@/features/transitionPoster/components/TransitionPoster";
import { useRouter } from "next/router";

type Props = {
   title: string;
   mediaType: "tv" | "movie";
   url: string;
};

export default function SearchCards({ title, mediaType, url }: Props) {
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);

   const [showLoadingAnimation, setShowLoadingAnimation] =
      useState<boolean>(true);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [showPage, setShowPage] = useState<boolean>(false);

   const { media, page, setPage } = useSearchCards(url, setIsLoading);

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(backgroundActions.removeBackground());
   }, [dispatch]);

   const [hidePage, setHidePage] = useState<boolean>(false);
   const leavePage = () => {
      setHidePage(true);
   };

   const cardsContainer = {
      initial: {},
      animate: { transition: { staggerChildren: 0.12 } },
      exit: {
         opacity: 0,
         transition: { duration: 0.4 },
      },
   };

   const [showSpinner, setShowSpinner] = useState<boolean>(false);
   const { selectedImg, link, position, setTransitionValues, closePoster } =
      useTransitionPoster();
   const router = useRouter();
   const onPosterAnimationComplete = () => {
      router.push(link);
      setShowSpinner(true);
   };

   return (
      <PageAnimationContainer
         title={title}
         showPage={showPage}
         setShowPage={setShowPage}
         isLoading={isLoading}
         showLoadingAnimation={showLoadingAnimation}
         setShowLoadingAnimation={setShowLoadingAnimation}
      >
         <div
            className={`px-10 pb-10 ${
               hidePage ? "opacity-0 duration-300" : ""
            }`}
         >
            <PageTitle>{title}</PageTitle>
            <motion.div
               variants={cardsContainer}
               initial="initial"
               animate="animate"
               exit="exit"
               className={`gap-5 grid grid-cols-2 md:grid-cols-3 ${
                  expandSidebar
                     ? "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                     : "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
               }`}
            >
               {media.map((media) => (
                  <MainCard
                     key={media.id}
                     media={media}
                     mediaType={mediaType}
                     setTransitionValues={setTransitionValues}
                     leavePage={leavePage}
                  />
               ))}
            </motion.div>
         </div>
         <LoadingMore page={page} setPage={setPage} />
         <TransitionPoster
            position={position}
            selectedImg={selectedImg}
            closePoster={closePoster}
            onAnimationComplete={onPosterAnimationComplete}
            showSpinner={showSpinner}
         />
      </PageAnimationContainer>
   );
}
