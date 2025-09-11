import PageHead from "@/common/components/PageHead";
import useSearchMediaTitle from "../hooks/useSearchMediaTitle";
import MediaCard from "@/features/media-card/components/MediaCard";
import SearchMediaCardsContainer from "./SearchMediaCardsContainer";
import Pagination from "./Pagination";
import { Media } from "@/common/models/Media";
import SidePanel from "./SidePanel";
import GenresSelector from "./GenresHandler/GenresSelector";
import { AnimatePresence } from "framer-motion";
import InitialMessage from "./InitialMessage";
import NotFoundMessage from "./NotFoundMessage";
import { useEffect, useState } from "react";
import DiscoverFilter from "./DiscoverFilter";
import { useRouter } from "next/router";

type Props = {
   useGenres?: true;
   useMediaType?: true;
   useDiscover?: true;
   title: string;
   response: any;
};

export default function SearchMedia({
   useGenres,
   useMediaType,
   title,
   useDiscover,
   response,
}: Props) {
   const { mediaType, data } = response;
   useSearchMediaTitle({ useGenres, useMediaType, title, mediaType });

   const [initialOpen, setInitialOpen] = useState<boolean>(false);

   const results = data?.results;
   const length = results?.length;

   useEffect(() => {
      console.log(response);
   }, [response]);

   const { asPath } = useRouter();

   return (
      <>
         <PageHead title={title} />

         <AnimatePresence mode="wait" propagate>
            {!results && (
               <InitialMessage key="initial" setInitialOpen={setInitialOpen} />
            )}
            {results && length === 0 && <NotFoundMessage key="not-found" />}
            {results && length > 0 && (
               <SearchMediaCardsContainer key={asPath}>
                  {data.results.map((media: Media, index: number) => (
                     <MediaCard
                        key={`${mediaType}-${media.id}-${index}`}
                        id={`${mediaType}-${media.id}-${index}`}
                        media={media}
                        mediaType={mediaType}
                     />
                  ))}
               </SearchMediaCardsContainer>
            )}
         </AnimatePresence>

         {data?.total_pages && (
            <Pagination
               total={data.total_pages > 20 ? 20 : data.total_pages}
               currentPage={data.page}
            />
         )}

         {useGenres && (
            <SidePanel buttonIcon="theater_comedy">
               <GenresSelector mediaType={mediaType} />
            </SidePanel>
         )}
         {useDiscover && (
            <SidePanel buttonIcon="tune" initialOpen={initialOpen}>
               <DiscoverFilter />
            </SidePanel>
         )}
      </>
   );
}
