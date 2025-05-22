import Title from "@/components/Title";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import SearchMediaHandler from "@/features/searchMedia/components/SearchMediaHandler";
import DiscoverFilter from "@/features/pages/discover/components/DiscoverFilter";
import DiscoverInitialText from "@/features/pages/discover/components/DiscoverInitialText";
import useDiscoverSearch from "@/features/pages/discover/hooks/useDiscoverSearch";
import PageHead from "@/components/PageHead";
import Pagination from "@/features/searchMedia/components/SearchMediaHandler/Pagination";
import { useState } from "react";

export default function Discover() {
   const { asPath, query } = useRouter();
   const { apiUrl } = useDiscoverSearch();
   const page = query.page as string | undefined;
   const [totalPages, setTotalPages] = useState<number>(1);
   return (
      <div className="p-32">
         <PageHead title="Discover" />
         <Title title="Discover" />
         <DiscoverFilter />
         <AnimatePresence mode="wait">
            {page && apiUrl ? (
               <>
                  <SearchMediaHandler
                     key={asPath}
                     page={page}
                     setTotalPages={setTotalPages}
                     apiUrl={apiUrl}
                  />
                  <Pagination total={totalPages} />
               </>
            ) : (
               <DiscoverInitialText />
            )}
         </AnimatePresence>
      </div>
   );
}
