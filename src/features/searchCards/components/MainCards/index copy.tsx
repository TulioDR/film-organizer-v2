import LoadingMore from "./LoadingMore";
import MainCard from "./MainCard";

import useSearchCards from "../../hooks/useSearchCards";

import MainCardsContainer from "./MainCardsContainer";
import LoadingPage from "../LoadingPage";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

type Props = {
   mediaType: "tv" | "movie";
   apiUrl: string;
};

export default function MainCards({ mediaType, apiUrl }: Props) {
   const { media, page, setPage } = useSearchCards(apiUrl);

   const [showPage, setShowPage] = useState<boolean>(false);
   return (
      <>
         <AnimatePresence onExitComplete={() => setShowPage(true)}>
            {!media && <LoadingPage />}
         </AnimatePresence>
         {!media ? (
            <LoadingPage />
         ) : (
            <MainCardsContainer key="mediaType">
               {media.map((media) => (
                  <MainCard
                     key={media.id}
                     media={media}
                     mediaType={mediaType}
                  />
               ))}
            </MainCardsContainer>
         )}
      </>
   );
}
