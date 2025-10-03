import React from "react";
import { usePagination } from "@mantine/hooks";
import Responsive from "@/common/components/Responsive";
import { MD_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import MobilePagination from "./MobilePagination";
import DesktopPagination from "./DesktopPagination";

type Props = {
   total: number;
   currentPage: number;
};

export default function Pagination({ total, currentPage }: Props) {
   const { range } = usePagination({
      total: total,
      initialPage: currentPage,
      page: currentPage,
   });

   return (
      <>
         <Responsive maxWidth={MD_MEDIA_QUERY}>
            <MobilePagination currentPage={currentPage} total={total} />
         </Responsive>
         <Responsive minWidth={MD_MEDIA_QUERY}>
            <DesktopPagination
               range={range}
               currentPage={currentPage}
               total={total}
            />
         </Responsive>
      </>
   );
}
