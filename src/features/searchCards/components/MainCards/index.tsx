import { Fragment, useState, useEffect } from "react";

import MainCard from "./MainCard";
import useSearchCards from "../../hooks/useSearchCards";

import MainCardsContainer from "./MainCardsContainer";
import LoadingPage from "../LoadingPage";
import { AnimatePresence, motion } from "framer-motion";
import CustomPagination from "@/components/CustomPagination";
import PaginationContainer from "../PaginationContainer";
import { useRouter } from "next/router";
import SearchCardsSpinners from "../SearchCardsSpinners";

type Props = {
   mediaType: "tv" | "movie";
   apiUrl: string;
};

export default function MainCards({ mediaType, apiUrl }: Props) {
   const { media, totalPages, isLoading } = useSearchCards(apiUrl);

   const [showPage, setShowPage] = useState<boolean>(false);

   const router = useRouter();
   const changePage = (page: number) => {
      router.push({ query: { ...router.query, page: page } });
   };

   const [currentPage, setCurrentPage] = useState<number>(1);

   const { query } = useRouter();
   const { page } = query;
   useEffect(() => {
      setCurrentPage(Number(page || 1));
   }, [page]);

   return (
      <>
         <AnimatePresence onExitComplete={() => setShowPage(true)}>
            {!media && <LoadingPage />}
         </AnimatePresence>
         {showPage && (
            <motion.div exit={{ opacity: 0.3 }} className="space-y-5">
               <PaginationContainer>
                  <CustomPagination
                     value={currentPage}
                     total={totalPages}
                     onChange={(page) => changePage(page)}
                  />
               </PaginationContainer>
               <AnimatePresence mode="wait">
                  {isLoading ? (
                     <SearchCardsSpinners />
                  ) : (
                     <Fragment key={media![0].id}>
                        <MainCardsContainer>
                           {media!.map((media) => (
                              <MainCard
                                 key={media.id}
                                 media={media}
                                 mediaType={mediaType}
                              />
                           ))}
                        </MainCardsContainer>
                        <PaginationContainer>
                           <CustomPagination
                              value={currentPage}
                              total={totalPages}
                              onChange={(page) => changePage(page)}
                           />
                        </PaginationContainer>
                     </Fragment>
                  )}
               </AnimatePresence>
            </motion.div>
         )}
      </>
   );
}
