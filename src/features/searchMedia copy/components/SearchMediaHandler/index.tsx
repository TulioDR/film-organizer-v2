import { useState } from "react";
import useSearchMedia from "../../hooks/useSearchMedia";
import { AnimatePresence } from "framer-motion";

import LoadingPage from "./LoadingPage";
import SearchMediaCards from "./SearchMediaCards";
import SearchMediaSpinner from "./SearchMediaSpinner";
import Pagination from "./Pagination";

type Props = {
   mediaType: "tv" | "movie";
   apiUrl: string;
};

export default function SearchMediaHandler({ mediaType, apiUrl }: Props) {
   const { media, totalPages, isLoading } = useSearchMedia(apiUrl);

   const [showPage, setShowPage] = useState<boolean>(false);

   return (
      <>
         <AnimatePresence onExitComplete={() => setShowPage(true)}>
            {!media && <LoadingPage />}
         </AnimatePresence>
         {showPage && (
            <>
               <Pagination total={totalPages} />
               <AnimatePresence mode="wait">
                  {isLoading ? (
                     <SearchMediaSpinner />
                  ) : (
                     <SearchMediaCards
                        key={media![0].id}
                        media={media!}
                        type={mediaType}
                     />
                  )}
               </AnimatePresence>
            </>
         )}
      </>
   );
}
