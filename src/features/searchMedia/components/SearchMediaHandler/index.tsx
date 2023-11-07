import { useRouter } from "next/router";
import { Fragment, useState, useEffect } from "react";
import useSearchMedia from "../../hooks/useSearchMedia";
import CustomPagination from "@/components/CustomPagination";
import { AnimatePresence, motion } from "framer-motion";

import LoadingPage from "./LoadingPage";
import PaginationContainer from "./PaginationContainer";
import SearchMediaCards from "./SearchMediaCards";
import SearchMediaSpinner from "./SearchMediaSpinner";

type Props = {
   mediaType: "tv" | "movie";
   apiUrl: string;
};

export default function SearchMediaHandler({ mediaType, apiUrl }: Props) {
   const { media, totalPages, isLoading } = useSearchMedia(apiUrl);

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
                     <SearchMediaSpinner />
                  ) : (
                     <Fragment key={media![0].id}>
                        <SearchMediaCards media={media!} type={mediaType} />
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
