import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import NotFoundMessage from "../NotFoundMessage";
import MediaCard from "@/features/media-card/components/MediaCard";
import { Media } from "@/common/models/Media";
import { useLenis } from "lenis/react";
import Banner from "@/common/components/Banner";
import CardsGrid from "../CardsGrid";
import Pagination from "../Pagination";
import MediaFilter from "../MediaFilter";

type Props = {
   response: any;
};

export default function Desktop({ response }: Props) {
   const { mediaType, data } = response;
   const results = data.results;
   const { asPath } = useRouter();
   const [isOpen, setIsOpen] = useState<boolean>(true);
   const toggleIsOpen = () => setIsOpen((prev) => !prev);

   const [direction, setDirection] = useState<"prev" | "next" | "default">(
      "default",
   );

   const [isExpanded, setIsExpanded] = useState(false);
   const toggleIsExpanded = () => setIsExpanded((prev) => !prev);
   useEffect(() => setIsExpanded(false), [isOpen]);

   const lenis = useLenis();
   const onExitComplete = () => {
      lenis!.scrollTo("top", { immediate: true });
   };

   return (
      <>
         <MediaFilter
            mediaType={mediaType}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isExpanded={isExpanded}
            toggleIsOpen={toggleIsOpen}
            toggleIsExpanded={toggleIsExpanded}
         />

         <div className="fixed h-64 w-full top-20 right-0 pl-[554px] pb-4">
            <Banner backPath={data.results[0].backdrop_path} />
         </div>

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
                        mediaType={mediaType}
                        media={media}
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
               setDirection={setDirection}
            />
         )}
      </>
   );
}
