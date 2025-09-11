import PageHead from "@/common/components/PageHead";
import usePageTitle from "@/features/layout/page-title/hooks/usePageTitle";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";
import DiscoverFilter from "@/features/pages/discover/components/DiscoverFilter";
import SidePanel from "@/features/search-media/components/SidePanel";
import InitialMessage from "@/features/pages/discover/components/InitialMessage";
import NotFoundMessage from "@/features/pages/discover/components/NotFoundMessage";
import SearchMediaCardsContainer from "@/features/search-media/components/SearchMediaCardsContainer";
import MediaCard from "@/features/media-card/components/MediaCard";
import { Media } from "@/common/models/Media";
import { getDiscoverData } from "@/common/utils/getServerSideData/getDiscoverData";
import Pagination from "@/features/search-media/components/Pagination";

export const getServerSideProps: GetServerSideProps = getDiscoverData();

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Discover(response: Props) {
   const { mediaType, data } = response;
   usePageTitle("Discover");

   const [initialOpen, setInitialOpen] = useState<boolean>(false);

   const results = data?.results;
   const length = results?.length;

   return (
      <>
         <PageHead title="Discover" />

         {!results && <InitialMessage setInitialOpen={setInitialOpen} />}
         {results && length === 0 && <NotFoundMessage />}
         {results && length > 0 && (
            <SearchMediaCardsContainer>
               {results.map((media: Media, index: number) => (
                  <MediaCard
                     key={`${mediaType}-${media.id}-${index}`}
                     id={`${mediaType}-${media.id}-${index}`}
                     media={media}
                     mediaType={mediaType}
                  />
               ))}
            </SearchMediaCardsContainer>
         )}

         {data?.total_pages && (
            <Pagination
               total={data.total_pages > 20 ? 20 : data.total_pages}
               currentPage={data.page}
            />
         )}

         <SidePanel initialOpen={initialOpen} buttonIcon="tune">
            <DiscoverFilter />
         </SidePanel>
      </>
   );
}
