import MainCard from "./MainCard";
import useSearchCards from "../hooks/useSearchCards";
import { useState } from "react";

import LoadingMore from "./LoadingMore";

import useRemoveBackgroundImage from "@/hooks/useRemoveBackgroundImage";
import { TransitionPosterProvider } from "@/features/transitionPoster/context/TransitionPosterContext";
import Title from "@/components/Title";
import SearchCardsContainer from "./SearchCardsContainer";
import PageHead from "@/components/PageHead";
import { AnimatePresence } from "framer-motion";
import LoadingPage from "@/animations/LoadingPage";

type Props = {
   title: string;
   mediaType: "tv" | "movie";
   url: string;
   noRemoveBackground?: true;
};

export default function SearchCards({
   title,
   mediaType,
   url,
   noRemoveBackground,
}: Props) {
   const [showLoadingAnimation, setShowLoadingAnimation] =
      useState<boolean>(true);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [showPage, setShowPage] = useState<boolean>(false);

   const { media, page, setPage } = useSearchCards(url, setIsLoading);

   useRemoveBackgroundImage(noRemoveBackground);
   const onAnimationComplete = () => {
      if (!isLoading) setShowLoadingAnimation(false);
   };
   return (
      <TransitionPosterProvider>
         <PageHead title={title} />
         {showPage && (
            <>
               <Title title={title} />
               <SearchCardsContainer>
                  {media.map((media) => (
                     <MainCard
                        key={media.id}
                        media={media}
                        mediaType={mediaType}
                     />
                  ))}
               </SearchCardsContainer>
               <LoadingMore page={page} setPage={setPage} />
            </>
         )}
         <AnimatePresence onExitComplete={() => setShowPage(true)}>
            {showLoadingAnimation && (
               <LoadingPage
                  isLoading={isLoading}
                  onAnimationComplete={onAnimationComplete}
               />
            )}
         </AnimatePresence>
      </TransitionPosterProvider>
   );
}
