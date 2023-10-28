import MainCard from "./MainCard";
import useSearchCards from "../../hooks/useSearchCards";

import MainCardsContainer from "./MainCardsContainer";
import LoadingPage from "../LoadingPage";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CustomPagination from "@/components/CustomPagination";
import PaginationContainer from "../PaginationContainer";
import { useRouter } from "next/router";
import LoadingCardsSpinner from "../LoadingCardsSpinner";

type Props = {
   mediaType: "tv" | "movie";
   apiUrl: string;
};

export default function MainCards({ mediaType, apiUrl }: Props) {
   const { media, totalPages, isLoading } = useSearchCards(apiUrl);

   const [showPage, setShowPage] = useState<boolean>(false);

   const router = useRouter();
   const handleChange = (page: number) => {
      router.push({ query: { ...router.query, page: page } });
   };

   const pageNumber = (router.query.page as string | undefined) || "1";
   console.log(`page number is ${pageNumber}`);
   return (
      <>
         <AnimatePresence onExitComplete={() => setShowPage(true)}>
            {!media && <LoadingPage />}
         </AnimatePresence>
         {showPage && (
            <motion.div exit={{ opacity: 0.3 }} className="space-y-5">
               <PaginationContainer>
                  <CustomPagination
                     total={totalPages}
                     onPaginationChange={(page) => handleChange(page)}
                  />
               </PaginationContainer>
               <AnimatePresence mode="wait">
                  {isLoading ? (
                     <LoadingCardsSpinner />
                  ) : (
                     <MainCardsContainer key={media![0].id}>
                        {media!.map((media) => (
                           <MainCard
                              key={media.id}
                              media={media}
                              mediaType={mediaType}
                           />
                        ))}
                     </MainCardsContainer>
                  )}
               </AnimatePresence>
               {/* <CustomPagination
                  total={totalPages}
                  onPaginationChange={(page: number) => setPage(page)}
               /> */}
            </motion.div>
         )}
      </>
   );
}
