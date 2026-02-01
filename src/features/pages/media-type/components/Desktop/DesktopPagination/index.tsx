import React, { Fragment } from "react";
import PaginationButton from "./PaginationButton";
import PaginationContainer from "./PaginationContainer";
import FixedUIPortal from "@/features/layout/main-layout/components/FixedUIPortal";
import { usePagination } from "@mantine/hooks";
import PaginationWrapper from "./PaginationWrapper";

type Props = {
   currentPage: number;
   total: number;
   isOpen: boolean;
};

export default function DesktopPagination({
   currentPage,
   total,
   isOpen,
}: Props) {
   const { range } = usePagination({
      total: total,
      initialPage: currentPage,
      page: currentPage,
   });

   return (
      <FixedUIPortal>
         <PaginationContainer isOpen={isOpen}>
            <PaginationWrapper>
               <PaginationButton
                  page={currentPage - 1}
                  disabled={currentPage === 1}
                  icon="keyboard_arrow_left"
               />
            </PaginationWrapper>

            <PaginationWrapper className="h-full flex px-4">
               {range.map((value, index) => (
                  <Fragment key={index}>
                     {value === "dots" ? (
                        <div className="h-full aspect-square flex items-center justify-center">
                           <span className="text-lg font-black">...</span>
                        </div>
                     ) : (
                        <PaginationButton
                           page={value}
                           isActive={currentPage === value}
                           text={value.toString()}
                        />
                     )}
                  </Fragment>
               ))}
            </PaginationWrapper>

            <PaginationWrapper>
               <PaginationButton
                  page={currentPage + 1}
                  disabled={currentPage === total}
                  icon="keyboard_arrow_right"
               />
            </PaginationWrapper>
         </PaginationContainer>
      </FixedUIPortal>
   );
}
