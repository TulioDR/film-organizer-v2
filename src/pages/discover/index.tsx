// import SearchMediaHandler from "@/features/searchMedia/components/SearchMediaHandler";
import DiscoverInitialText from "@/features/pages/discover/components/DiscoverInitialText";
import useDiscoverSearch from "@/features/pages/discover/hooks/useDiscoverSearch";
// import Pagination from "@/features/searchMedia/components/SearchMediaHandler/Pagination";
import PageHead from "@/common/components/PageHead";
import usePageTitle from "@/features/layout/page-title/hooks/usePageTitle";
import { getDiscoverData } from "@/features/pages/discover/utils/getDiscoverData";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import DiscoverFilter from "@/features/pages/discover/components/DiscoverFilter";
import SidePanel from "@/features/search-media/components/SidePanel";
// import DiscoverFilter from "@/features/search-media/components/DiscoverFilter";

export const getServerSideProps: GetServerSideProps = getDiscoverData();

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Discover({ response }: Props) {
   useEffect(() => {
      console.log("this is the response");
      console.log(response);
   }, [response]);

   const { apiUrl } = useDiscoverSearch();

   const { mediaType, data } = response;

   usePageTitle("Discover");

   return (
      <>
         <PageHead title="Discover" />
         <SidePanel initiallyOpen buttonIcon="tune">
            <DiscoverFilter />
         </SidePanel>

         {data?.results ? (
            <div></div>
         ) : (
            <div className="fixed top-0 left-0 h-screen w-full flex items-center justify-center px-32">
               <div className="w-full flex items-center gap-8">
                  <div className="flex-1" />
                  <div className="text-center">
                     <div>Click on the button to use the discover panel</div>
                     <div>to search Movies or TV series</div>
                     <div>with specific parameters</div>
                  </div>
                  <div className="flex-1 bg-white h-0.5 relative">
                     <div className="absolute top-0 right-0 w-8 h-0.5 bg-white origin-right rotate-45"></div>
                  </div>
               </div>
            </div>
         )}

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
