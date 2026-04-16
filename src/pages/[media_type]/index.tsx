import PageHead from "@/common/components/PageHead";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getMediaData } from "@/features/pages/media-type/utils/getMediaData";
import { useEffect, useState } from "react";
import Pagination from "@/features/pages/media-type/components/Pagination";
import CardsGrid from "@/features/pages/media-type/components/CardsGrid";
import MediaCard from "@/features/media-card/components/MediaCard";
import NotFoundMessage from "@/features/pages/media-type/components/NotFoundMessage";
import Banner from "@/common/components/Banner";
import { Media } from "@/common/models/Media";
import Responsive from "@/common/components/Responsive";
import { XL_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import { useMediaQuery } from "react-responsive";
import { MediaFilterProvider } from "@/features/pages/media-type/context/MediaFilterContext";
import CompactFilter from "@/features/pages/media-type/components/MediaFilters/CompactFilter";
import ExpandedFilter from "@/features/pages/media-type/components/MediaFilters/ExpandedFilter";
import FilterCardsLayout from "@/common/components/FilterCardsLayout";

export const getServerSideProps: GetServerSideProps = getMediaData();

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function MediaTypePage(response: Props) {
   const { mediaType, data } = response;
   const title = mediaType === "movie" ? "Movies" : "Series";
   const results = data.results;
   const isMobile = useMediaQuery({
      query: `(max-width: ${XL_MEDIA_QUERY}px)`,
   });

   const [isFilterOpen, setIsFilterOpen] = useState(false);
   useEffect(() => {
      if (isMobile) setIsFilterOpen(false);
   }, [isMobile]);

   return (
      <>
         <PageHead title={title} />

         <Responsive minWidth={XL_MEDIA_QUERY}>
            <div className="fixed h-64 w-full top-20 right-0 pl-[554px] pb-4">
               <Banner backPath={data.results[0].backdrop_path} />
            </div>
         </Responsive>

         <MediaFilterProvider mediaType={mediaType}>
            <FilterCardsLayout
               isOpen={isFilterOpen}
               setIsOpen={setIsFilterOpen}
               title={title}
               innerKey={`${data.page}-${mediaType}`}
               compactFilter={<CompactFilter />}
               expandedFilter={<ExpandedFilter />}
            >
               {results.length === 0 && <NotFoundMessage />}
               {results.length > 0 && (
                  <CardsGrid isOpen={isFilterOpen}>
                     {data.results.map((media: Media, index: number) => (
                        <MediaCard
                           key={`${mediaType}-${media.id}-${index}`}
                           id={`${mediaType}-${media.id}-${index}`}
                           media={media}
                           mediaType={mediaType}
                        />
                     ))}
                  </CardsGrid>
               )}
            </FilterCardsLayout>
         </MediaFilterProvider>

         {data.total_pages && (
            <Pagination
               total={data.total_pages > 20 ? 20 : data.total_pages}
               currentPage={data.page}
               isMobile={isMobile}
            />
         )}
      </>
   );
}
