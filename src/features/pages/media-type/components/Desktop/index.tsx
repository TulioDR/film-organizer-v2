import React, { useEffect, useState } from "react";
import DesktopMediaFilter from "./DesktopMediaFilter";
import { AnimatePresence } from "framer-motion";
import DesktopPagination from "./DesktopPagination";
import { useRouter } from "next/router";
import NotFoundMessage from "../NotFoundMessage";
import DesktopCardsGrid from "./DesktopCardsGrid";
import MediaCard from "@/features/media-card/components/MediaCard";
import { Media } from "@/common/models/Media";
import { useLenis } from "lenis/react";

type Props = {
   response: any;
};

export default function Desktop({ response }: Props) {
   const { mediaType, data } = response;
   const results = data.results;
   const { asPath } = useRouter();
   const title = mediaType === "movie" ? "Movies" : "Series";
   const [isOpen, setIsOpen] = useState<boolean>(true);
   const toggleIsOpen = () => setIsOpen((prev) => !prev);

   const [isExpanded, setIsExpanded] = useState(false);
   const toggleIsExpanded = () => setIsExpanded((prev) => !prev);
   useEffect(() => setIsExpanded(false), [isOpen]);

   const [direction, setDirection] = useState<"prev" | "next" | "default">(
      "default",
   );

   const lenis = useLenis();
   useEffect(() => {
      return () => {
         lenis!.scrollTo("top", { immediate: true });
      };
   }, []);

   return (
      <>
         <DesktopMediaFilter
            title={title}
            isOpen={isOpen}
            toggleIsOpen={toggleIsOpen}
            isExpanded={isExpanded}
            toggleIsExpanded={toggleIsExpanded}
            mediaType={mediaType}
         />

         <AnimatePresence mode="wait" propagate>
            {results.length === 0 && <NotFoundMessage key="not-found" />}
            {results.length > 0 && (
               <DesktopCardsGrid
                  key={asPath}
                  isOpen={isOpen}
                  direction={direction}
                  setDirection={setDirection}
               >
                  {data.results.map((media: Media, index: number) => (
                     <MediaCard
                        media={media}
                        mediaType={mediaType}
                        direction={direction}
                        key={`${mediaType}-${media.id}-${index}`}
                        id={`${mediaType}-${media.id}-${index}`}
                     />
                  ))}
               </DesktopCardsGrid>
            )}
         </AnimatePresence>

         {data.total_pages && (
            <DesktopPagination
               total={data.total_pages > 20 ? 20 : data.total_pages}
               currentPage={data.page}
               isOpen={isOpen}
               setDirection={setDirection}
            />
         )}
      </>
   );
}
