import React, { Fragment } from "react";
import PaginationButton from "./PaginationButton";
import PaginationContainer from "./PaginationContainer";
import FixedUIPortal from "@/features/layout/main-layout/components/FixedUIPortal";
import { usePagination } from "@mantine/hooks";
import PaginationWrapper from "./PaginationWrapper";
import { useRouter } from "next/router";

type Props = {
   currentPage: number;
   total: number;
   isOpen: boolean;
   setDirection: React.Dispatch<
      React.SetStateAction<"prev" | "next" | "default">
   >;
};

export default function DesktopPagination({
   currentPage,
   total,
   isOpen,
   setDirection,
}: Props) {
   const { range } = usePagination({
      total: total,
      initialPage: currentPage,
      page: currentPage,
   });
   const router = useRouter();

   const handlePageChange = (page: number) => {
      if (page > currentPage) setDirection("next");
      else setDirection("prev");

      router.push(
         {
            pathname: router.pathname,
            query: { ...router.query, page: page },
         },
         undefined,
         { scroll: false },
      );
   };

   return (
      <FixedUIPortal>
         <PaginationContainer isOpen={isOpen}>
            <PaginationWrapper>
               <PaginationButton
                  disabled={currentPage === 1}
                  icon="keyboard_arrow_left"
                  onClick={() => handlePageChange(currentPage - 1)}
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
                           isActive={currentPage === value}
                           text={value.toString()}
                           onClick={() => handlePageChange(value as number)}
                        />
                     )}
                  </Fragment>
               ))}
            </PaginationWrapper>

            <PaginationWrapper>
               <PaginationButton
                  disabled={currentPage === total}
                  icon="keyboard_arrow_right"
                  onClick={() => handlePageChange(currentPage + 1)}
               />
            </PaginationWrapper>
         </PaginationContainer>
      </FixedUIPortal>
   );
}
