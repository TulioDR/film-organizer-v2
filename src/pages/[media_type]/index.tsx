import { Media } from "@/common/models/Media";
import { AnimatePresence } from "framer-motion";
import PageHead from "@/common/components/PageHead";
import NotFoundMessage from "@/features/pages/media-type/components/NotFoundMessage";
import MediaCardsGrid from "@/features/pages/media-type/components/MediaCardsGrid";
import MediaCard from "@/features/media-card/components/MediaCard";
import Pagination from "@/features/pages/media-type/components/Pagination";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getPageData } from "@/common/utils/getServerSideData/getPageData";
import MediaFilter from "@/features/search-media/components/MediaFilter";
import MediaFilterOld from "@/features/search-media/components/MediaFilterOld";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = getPageData("popular");

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function MediaType(response: Props) {
   const { mediaType, data } = response;

   const results = data.results;

   const { asPath } = useRouter();

   const title = mediaType === "movie" ? "Movies" : "Series";

   const [isOpen, setIsOpen] = useState<boolean>(true);

   return (
      <>
         <PageHead title={title} />

         {/* <div className="flex items-center justify-end h-16 mb-4 sticky top-24 z-40">
            <MediaFilterOld />
         </div> */}

         <MediaFilter title={title} isOpen={isOpen} setIsOpen={setIsOpen} />

         <AnimatePresence mode="wait" propagate>
            {results.length === 0 && <NotFoundMessage key="not-found" />}
            {results.length > 0 && (
               <MediaCardsGrid key={asPath} isOpen={isOpen}>
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

         {data.total_pages && (
            <Pagination
               total={data.total_pages > 20 ? 20 : data.total_pages}
               currentPage={data.page}
               isOpen={isOpen}
            />
         )}
      </>
   );
}
