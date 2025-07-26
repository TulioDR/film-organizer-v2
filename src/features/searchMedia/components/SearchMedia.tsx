import PageHead from "@/components/PageHead";
import { AnimatePresence } from "framer-motion";

import { useRouter } from "next/router";
import SearchMediaHandler from "./SearchMediaHandler";
import { useEffect, useState } from "react";
import Pagination from "./SearchMediaHandler/Pagination";
import SEARCH_PAGES, { PageInfoModel } from "../constants/SEARCH_PAGES";
import SearchMediaSpinner from "./SearchMediaHandler/SearchMediaSpinner";
import useApiUrl from "../hooks/useApiUrl";
import GenresHandler from "./GenresHandler";

type Props = {};

export default function SearchMedia({}: Props) {
   const [pageInfo, setPageInfo] = useState<PageInfoModel | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [is404, setIs404] = useState<boolean>(false);
   const [totalPages, setTotalPages] = useState<number>(0);

   const router = useRouter();

   const { apiUrl, setDiscoverApi, setResultsApi, setGenresApi, setNormalApi } =
      useApiUrl();

   const [initialPathname, setInitialPathname] = useState<string | null>(null);
   useEffect(() => {
      if (!initialPathname) setInitialPathname(router.pathname);
   }, [router.pathname, initialPathname]);

   useEffect(() => {
      if (!router.isReady) return;

      const path = SEARCH_PAGES.find((p) => p.pathname === router.pathname);
      const MT = router.query.media_type;
      const isMediaTypeValid = MT && ["movie", "tv"].includes(MT as string);

      // console.log(router.pathname, initialPathname);
      if (router.pathname !== initialPathname) return;

      if (path && isMediaTypeValid) {
         setPageInfo(path);
      } else {
         console.log("SET 404");
         setIs404(true);
         setIsLoading(false);
      }
   }, [
      router.isReady,
      router.query.media_type,
      router.pathname,
      initialPathname,
   ]);

   useEffect(() => {
      if (!pageInfo) return;
      if (router.pathname !== initialPathname) return;

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
      <div className="p-32">
         {isLoading && <SearchMediaSpinner />}
         {pageInfo && (
            <>
               <PageHead title={pageInfo.title} />
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
               {pageInfo.title === "Genres" && <GenresHandler />}
            </>
         )}
         {is404 && (
            <div className="flex flex-col items-center justify-center w-full h-full">
               <h1 className="text-9xl font-bold text-white">
                  404 - Not Found
               </h1>
            </div>
         )}
      </div>
   );
}
