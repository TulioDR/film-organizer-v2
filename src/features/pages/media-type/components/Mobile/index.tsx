import React, { useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import NotFoundMessage from "../NotFoundMessage";
import MediaCard from "@/features/media-card/components/MediaCard";
import { Media } from "@/common/models/Media";
import CardsGrid from "../CardsGrid";
import Pagination from "../Pagination";
import MediaFilter from "../MediaFilter";

type Props = {
   response: any;
};

export default function Mobile({ response }: Props) {
   const { mediaType, data } = response;
   const results = data.results;
   const { asPath } = useRouter();
   const [isOpen, setIsOpen] = useState<boolean>(true);
   const toggleIsOpen = () => setIsOpen((prev) => !prev);

   const [direction, setDirection] = useState<"prev" | "next" | "default">(
      "default",
   );

   return (
      <>
         <MediaFilter
            mediaType={mediaType}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isExpanded={false}
            toggleIsOpen={toggleIsOpen}
         />

         <AnimatePresence mode="wait" propagate>
            {results.length === 0 && <NotFoundMessage key="not-found" />}
            {results.length > 0 && (
               <CardsGrid
                  key={asPath}
                  direction={direction}
                  setDirection={setDirection}
               >
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
         </AnimatePresence>

         {data.total_pages && (
            <Pagination
               total={data.total_pages > 20 ? 20 : data.total_pages}
               currentPage={data.page}
               isOpen={false}
               setDirection={setDirection}
               siblings={0}
            />
         )}
      </>
   );
}
