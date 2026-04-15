import PageHead from "@/common/components/PageHead";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getMediaData } from "@/features/pages/media-type/utils/getMediaData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import Pagination from "@/features/pages/media-type/components/Pagination";
import { AnimatePresence } from "framer-motion";
import CardsGrid from "@/features/pages/media-type/components/CardsGrid";
import MediaCard from "@/features/media-card/components/MediaCard";
import NotFoundMessage from "@/features/pages/media-type/components/NotFoundMessage";
import Banner from "@/common/components/Banner";
import { Media } from "@/common/models/Media";
import Responsive from "@/common/components/Responsive";
import { XL_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import { useMediaQuery } from "react-responsive";
import MainFilter from "@/features/mainFilter/components/MainFilter";
import { MediaFilterProvider } from "@/features/pages/media-type/context/MediaFilterContext";
import CompactFilter from "@/features/pages/media-type/components/MediaFilters/CompactFilter";
import ExpandedFilter from "@/features/pages/media-type/components/MediaFilters/ExpandedFilter";

export const getServerSideProps: GetServerSideProps = getMediaData();

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function MediaTypePage(response: Props) {
   const { mediaType, data } = response;

   const title = mediaType === "movie" ? "Movies" : "Series";

   const results = data.results;
   const { asPath } = useRouter();
   const [isOpen, setIsOpen] = useState<boolean>(true);

   const [direction, setDirection] = useState<"prev" | "next" | "default">(
      "default",
   );

   const lenis = useLenis();
   const onExitComplete = () => {
      if (!lenis) return;
      lenis.scrollTo("top", { immediate: true });
   };

   const isMobile = useMediaQuery({
      query: `(max-width: ${XL_MEDIA_QUERY}px)`,
   });

   useEffect(() => {
      if (isMobile) setIsOpen(false);
   }, [isMobile]);

   return (
      <>
         <PageHead title={title} />

         <MediaFilterProvider mediaType={mediaType}>
            <MainFilter
               isOpen={isOpen}
               setIsOpen={setIsOpen}
               title={title}
               compactContent={<CompactFilter />}
               expandedContent={<ExpandedFilter />}
            />
         </MediaFilterProvider>

         <Responsive minWidth={XL_MEDIA_QUERY}>
            <div className="fixed h-64 w-full top-20 right-0 pl-[554px] pb-4">
               <Banner
                  backPath={data.results[0].backdrop_path}
                  isForward={direction !== "prev"}
               />
            </div>
         </Responsive>

         <AnimatePresence mode="wait" propagate onExitComplete={onExitComplete}>
            {results.length === 0 && <NotFoundMessage key="not-found" />}
            {results.length > 0 && (
               <CardsGrid
                  key={asPath}
                  isOpen={isOpen}
                  direction={direction}
                  setDirection={setDirection}
               >
                  {data.results.map((media: Media, index: number) => (
                     <MediaCard
                        key={`${mediaType}-${media.id}-${index}`}
                        id={`${mediaType}-${media.id}-${index}`}
                        direction={direction}
                        media={media}
                        mediaType={mediaType}
                     />
                  ))}
               </CardsGrid>
            )}
         </AnimatePresence>

         {data.total_pages && (
            <Pagination
               total={data.total_pages > 20 ? 20 : data.total_pages}
               currentPage={data.page}
               isOpen={isOpen}
               isMobile={isMobile}
               setDirection={setDirection}
            />
         )}
      </>
   );
}
