// import SearchMediaHandler from "@/features/searchMedia/components/SearchMediaHandler";
import DiscoverFilter from "@/features/pages/discover/components/DiscoverFilter";
import DiscoverInitialText from "@/features/pages/discover/components/DiscoverInitialText";
import useDiscoverSearch from "@/features/pages/discover/hooks/useDiscoverSearch";
// import Pagination from "@/features/searchMedia/components/SearchMediaHandler/Pagination";
import PageHead from "@/common/components/PageHead";
import usePageTitle from "@/features/layout/page-title/hooks/usePageTitle";

export default function Discover() {
   const { apiUrl } = useDiscoverSearch();

   usePageTitle("Discover");

   return (
      <>
         <PageHead title="Discover" />

         {/* <AnimatePresence mode="wait">
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
         </AnimatePresence> */}
      </>
   );
}
