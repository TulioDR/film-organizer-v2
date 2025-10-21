import React, { useEffect, useState } from "react";
import Container from "./Container";
import CustomPagination from "../../CustomPagination";
import PageSubtitle from "@/common/components/PageSubtitle";

type InfoContainerProps<T> = {
   itemsPerPage: number;
   subtitle: string;
   media: T[];
   numberOfRows?: number;
   renderItem: (item: T) => React.ReactNode;
   length?: number;
   className?: string;
};

export default function InfoContainer<T>({
   itemsPerPage,
   subtitle,
   media,
   numberOfRows = 1,
   renderItem,
   className = "",
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
      <Container className={className}>
         <PageSubtitle>{subtitle}</PageSubtitle>
         {displayedMedia.length > 0 ? (
            <div
               style={{
                  gridTemplateColumns: `repeat(${
                     itemsPerPage / numberOfRows
                  }, minmax(0, 1fr))`,
                  gridTemplateRows: `repeat(${numberOfRows}, minmax(0, 1fr))`,
               }}
               className="w-full grid gap-4 xl:gap-4"
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
