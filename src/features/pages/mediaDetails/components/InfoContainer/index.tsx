import CustomPagination from "@/components/CustomPagination";
import Subtitle from "@/components/Subtitle";
import React, { useEffect, useState } from "react";
import Container from "./Container";

type InfoContainerProps<T> = {
   itemsPerPage: number;
   subtitle: string;
   media: T[];
   numberOfRows?: number;
   renderItem: (item: T) => React.ReactNode;
   length?: number;
   columnLength?: number;
   similar?: true;
};

export default function InfoContainer<T>({
   itemsPerPage,
   subtitle,
   media,
   numberOfRows = 1,
   renderItem,
   columnLength = 1,
   similar,
}: InfoContainerProps<T>) {
   const [page, setPage] = useState<number>(1);

   const initialMedia = media.slice(0, itemsPerPage);
   const [displayedMedia, setDisplayedMedia] = useState<any[]>(initialMedia);

   useEffect(() => {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setDisplayedMedia(media.slice(start, end));
   }, [page, itemsPerPage, media]);

   return (
      <Container columnLength={columnLength} similar={similar}>
         <Subtitle>{subtitle}</Subtitle>
         {displayedMedia.length > 0 ? (
            <div
               style={{
                  gridTemplateColumns: `repeat(${
                     itemsPerPage / numberOfRows
                  }, minmax(0, 1fr))`,
                  gridTemplateRows: `repeat(${numberOfRows}, minmax(0, 1fr))`,
               }}
               className="w-full grid gap-8"
            >
               {displayedMedia.map((item, index) => (
                  <React.Fragment key={`${(item as any).id}-${index}`}>
                     {renderItem(item)}
                  </React.Fragment>
               ))}
            </div>
         ) : (
            <div>No trailers available</div>
         )}
         <CustomPagination
            value={page}
            total={Math.ceil(media.length / itemsPerPage)}
            onChange={(page: number) => setPage(page)}
         />
      </Container>
   );
}
