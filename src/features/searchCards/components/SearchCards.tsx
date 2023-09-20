import { motion } from "framer-motion";
import MainCard from "./MainCard";

import useSearchCards from "../hooks/useSearchCards";
import { useState } from "react";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import LoadingMore from "./LoadingMore";
import PageAnimationContainer from "@/containers/PageAnimationContainer";
import TransitionPoster from "@/features/transitionPoster/components/TransitionPoster";
import useRemoveBackgroundImage from "@/hooks/useRemoveBackgroundImage";
import { TransitionPosterProvider } from "@/features/transitionPoster/context/TransitionPosterContext";
import Title from "@/components/Title";

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

   useRemoveBackgroundImage();

   const cardsContainer = {
      initial: {},
      animate: { transition: { staggerChildren: 0.2 } },
      exit: {
         opacity: 0,
         transition: { duration: 0.4 },
      },
   };

   return (
      <TransitionPosterProvider>
         <PageAnimationContainer
            title={title}
            showPage={showPage}
            setShowPage={setShowPage}
            isLoading={isLoading}
            showLoadingAnimation={showLoadingAnimation}
            setShowLoadingAnimation={setShowLoadingAnimation}
         >
            <div className="px-10 pb-10">
               <Title title={title} />
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
                     />
                  ))}
               </motion.div>
            </div>
            <LoadingMore page={page} setPage={setPage} />
         </PageAnimationContainer>
         <TransitionPoster />
      </TransitionPosterProvider>
   );
}
