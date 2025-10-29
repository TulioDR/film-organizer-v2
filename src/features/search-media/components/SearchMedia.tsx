import PageHead from "@/common/components/PageHead";
import MediaCard from "@/features/media-card/components/MediaCard";
import Pagination from "./Pagination";
import { Media } from "@/common/models/Media";
import SidePanel from "./SidePanel";
import GenresSelector from "./GenresHandler/GenresSelector";
import { AnimatePresence } from "framer-motion";
import InitialMessage from "./InitialMessage";
import NotFoundMessage from "./NotFoundMessage";
import { useState } from "react";
import DiscoverFilter from "./DiscoverFilter";
import { useRouter } from "next/router";
import usePageTitle from "@/features/layout/page-title/hooks/usePageTitle";
import MediaCardsGrid from "./MediaCardsGrid";
import GlassContainer from "@/common/components/GlassContainer";

type Props = {
   useGenres?: true;
   useDiscover?: true;
   response: any;
};

export default function SearchMedia({
   useGenres,
   useDiscover,
   response,
}: Props) {
   const { mediaType, data, title } = response;

   const [text1, text2, text3] = title;
   usePageTitle(text1, text2, text3);

   const results = data?.results;
   const length = results?.length;

   const { asPath } = useRouter();

   const [initialOpen, setInitialOpen] = useState<boolean>(false);
   return (
      <>
         <PageHead title={title[2]?.text || title[1]?.text || title[0].text} />
         <div className="flex items-end justify-between h-16 mb-4 sticky top-24 z-10">
            <span className="text-xl uppercase font-medium">Movies</span>
            <GlassContainer className="h-full aspect-square flex items-center justify-center text-black ">
               <span className="material-symbols-outlined">filter_alt</span>
            </GlassContainer>
         </div>
         <AnimatePresence mode="wait" propagate>
            {!results && (
               <InitialMessage key="initial" setInitialOpen={setInitialOpen} />
            )}
            {results && length === 0 && <NotFoundMessage key="not-found" />}
            {results && length > 0 && (
               <MediaCardsGrid key={asPath}>
                  {data.results.map((media: Media, index: number) => (
                     <MediaCard
                        key={`${mediaType}-${media.id}-${index}`}
                        id={`${mediaType}-${media.id}-${index}`}
                        media={media}
                        mediaType={mediaType}
                     />
                  ))}
               </MediaCardsGrid>
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
