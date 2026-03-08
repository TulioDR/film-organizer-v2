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
import Image from "next/image";
import Poster from "@/common/components/Poster";

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

   const onExitComplete = () => {
      lenis!.scrollTo("top", { immediate: true });
   };

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

         <div className="fixed h-64 w-full top-20 right-0 pl-[554px] pb-4">
            <div className="w-full h-full flex items-center justify-center relative shadow-[0_0_32px_0px_#E0E0E0] dark:shadow-[0_0_32px_0px_#1A1A1A]">
               <div className="absolute left-0 bottom-0 w-full h-4 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-10" />
               <div className="absolute left-0 bottom-0 h-full w-4 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10" />
               <div className="w-full h-full brightness-75">
                  <Poster
                     posterPath={data.results[0]!.backdrop_path}
                     alt="hello"
                     size="original"
                  />
               </div>
            </div>
         </div>

         <AnimatePresence mode="wait" propagate onExitComplete={onExitComplete}>
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
                        key={`${mediaType}-${media.id}-${index}`}
                        id={`${mediaType}-${media.id}-${index}`}
                        direction={direction}
                        mediaType={mediaType}
                        media={media}
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
