import PageHead from "@/common/components/PageHead";
import usePageTitle from "@/features/layout/page-title/hooks/usePageTitle";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import DiscoverFilter from "@/features/pages/discover/components/DiscoverFilter";
import SidePanel from "@/features/search-media/components/SidePanel";
import InitialMessage from "@/features/pages/discover/components/InitialMessage";
import NotFoundMessage from "@/features/pages/discover/components/NotFoundMessage";
import SearchMediaCardsContainer from "@/features/search-media/components/SearchMediaCardsContainer";
import MediaCard from "@/features/media-card/components/MediaCard";
import { Media } from "@/common/models/Media";
import { getDiscoverData } from "@/common/utils/getServerSideData/getDiscoverData";

export const getServerSideProps: GetServerSideProps = getDiscoverData();

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Discover(response: Props) {
   usePageTitle("Discover");
   useEffect(() => console.log(response), [response]);
   const { mediaType, data } = response;
   const [initialOpen, setInitialOpen] = useState<boolean>(false);

   const results = data?.results;
   const length = results?.length;

   return (
      <>
         <PageHead title="Discover" />
         <SidePanel initialOpen={initialOpen} buttonIcon="tune">
            <DiscoverFilter />
         </SidePanel>

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
      </>
   );
}
