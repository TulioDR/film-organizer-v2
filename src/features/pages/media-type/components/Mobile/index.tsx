import MobileMenu from "@/features/layout/mobile-menu/components/MobileMenu";
import React from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import NotFoundMessage from "../NotFoundMessage";
import MobilePagination from "./MobilePagination";
import MediaCard from "@/features/media-card/components/MediaCard";
import { Media } from "@/common/models/Media";
import MobileCardsGrid from "./MobileCardsGrid";

type Props = {
   response: any;
};

export default function Mobile({ response }: Props) {
   const { mediaType, data } = response;

   const results = data.results;

   const { asPath } = useRouter();

   return (
      <>
         <MobileMenu position="bottomLeft" buttonIcon="filter_alt">
            <div></div>
         </MobileMenu>

         <AnimatePresence mode="wait" propagate>
            {results.length === 0 && <NotFoundMessage key="not-found" />}
            {results.length > 0 && (
               <MobileCardsGrid key={asPath}>
                  {data.results.map((media: Media, index: number) => (
                     <MediaCard
                        key={`${mediaType}-${media.id}-${index}`}
                        id={`${mediaType}-${media.id}-${index}`}
                        media={media}
                        mediaType={mediaType}
                     />
                  ))}
               </MobileCardsGrid>
            )}
         </AnimatePresence>

         {data.total_pages && (
            <MobilePagination
               total={data.total_pages > 20 ? 20 : data.total_pages}
               currentPage={data.page}
            />
         )}
      </>
   );
}
