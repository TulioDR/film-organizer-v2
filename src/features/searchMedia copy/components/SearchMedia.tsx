import Title from "@/components/Title";
import PageHead from "@/components/PageHead";
import { AnimatePresence } from "framer-motion";

import { useRouter } from "next/router";
import SearchMediaHandler from "./SearchMediaHandler";
import { useEffect, useRef, useState } from "react";
import Pagination from "./SearchMediaHandler/Pagination";
import SEARCH_PAGES, { PageInfoModel } from "../constants/SEARCH_PAGES";
import SearchMediaSpinner from "./SearchMediaHandler/SearchMediaSpinner";
import useApiUrl from "../hooks/useApiUrl";

type Props = {};

export default function SearchMedia({}: Props) {
   const [pageInfo, setPageInfo] = useState<PageInfoModel | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [is404, setIs404] = useState<boolean>(false);
   const [totalPages, setTotalPages] = useState<number>(0);

   const router = useRouter();
   const initialPathnameRef = useRef<string>("");

   const { apiUrl, setDiscoverApi, setResultsApi, setGenresApi, setNormalApi } =
      useApiUrl();

   useEffect(() => {
      if (!router.isReady) return;

      const currentPath = router.pathname;
      initialPathnameRef.current = currentPath;
      const path = SEARCH_PAGES.find((p) => p.pathname === currentPath);
      const MT = router.query.media_type;
      const isMediaTypeValid = MT && ["movie", "tv"].includes(MT as string);
      if (path && isMediaTypeValid) {
         setPageInfo(path);
      } else {
         setIs404(true);
         setIsLoading(false);
      }
   }, [router.isReady, router.query.media_type, router.pathname]);

   useEffect(() => {
      if (!pageInfo) return;
      if (router.pathname !== initialPathnameRef.current) return;

      const page = router.query.page as string | undefined;
      const p = Number(page);
      const isPBad = !p || isNaN(p) || p < 1 || !Number.isInteger(p) || p > 20;

      const isDiscover = pageInfo.pathname === "/discover";
      const isResults = pageInfo.pathname === "/[media_type]/results";
      const isGenres = pageInfo.pathname === "/[media_type]/genres/[genre_id]";

      if (isPBad && !isDiscover) {
         router.replace({ query: { ...router.query, page: 1 } });
         return;
      }

      if (isDiscover) setDiscoverApi();
      else if (isResults) setResultsApi();
      else if (isGenres) setGenresApi();
      else setNormalApi();
   }, [router.query, router.pathname, pageInfo]);

   return (
      <>
         {isLoading && <SearchMediaSpinner />}
         {pageInfo && (
            <div className="p-32">
               <PageHead title={pageInfo.title} />
               <Title title={pageInfo.title} />
               {apiUrl && (
                  <AnimatePresence mode="wait" propagate>
                     <SearchMediaHandler
                        key={apiUrl}
                        apiUrl={apiUrl}
                        setTotalPages={setTotalPages}
                        setIsLoading={setIsLoading}
                     />
                  </AnimatePresence>
               )}
               <Pagination total={totalPages} />
            </div>
         )}
         {is404 && (
            <div className="flex flex-col items-center justify-center w-full h-full p-32">
               <h1 className="text-9xl font-bold text-white">
                  404 - Not Found
               </h1>
            </div>
         )}
      </>
   );
}
