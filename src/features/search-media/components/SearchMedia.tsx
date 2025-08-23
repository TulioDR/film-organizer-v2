import GenresHandler from "./GenresHandler";
import PageHead from "@/common/components/PageHead";
import useSearchMediaTitle from "../hooks/useSearchMediaTitle";
import MediaCard from "@/features/media-card/components/MediaCard";
import SearchMediaCardsContainer from "./SearchMediaCardsContainer";
import Pagination from "./Pagination";
import { Media } from "@/common/models/Media";

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

   return (
      <>
         <PageHead title={title} />

         <SearchMediaCardsContainer>
            {data.results.map((media: Media, index: number) => (
               <MediaCard
                  key={`${mediaType}-${media.id}-${index}`}
                  id={`${mediaType}-${media.id}-${index}`}
                  media={media}
                  mediaType={mediaType}
               />
            ))}
         </SearchMediaCardsContainer>

         <Pagination
            total={data.total_pages > 20 ? 20 : data.total_pages}
            currentPage={data.page}
         />

         {useGenres && <GenresHandler />}
         {useDiscover && <></>}
      </>
   );
}
