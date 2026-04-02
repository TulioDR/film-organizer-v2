import React, { Fragment } from "react";
import PaginationButton from "./PaginationButton";
import PaginationContainer from "./PaginationContainer";
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
   siblings?: number;
};

export default function Pagination({
   currentPage,
   total,
   isOpen,
   setDirection,
   siblings = 1,
}: Props) {
   const { range } = usePagination({
      total: total,
      initialPage: currentPage,
      page: currentPage,
      siblings: siblings,
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
      <PaginationContainer isOpen={isOpen}>
         <PaginationWrapper>
            <PaginationButton
               disabled={currentPage === 1}
               icon="keyboard_arrow_left"
               onClick={() => handlePageChange(currentPage - 1)}
               navigation
            />
         </PaginationWrapper>

         <PaginationWrapper className="h-full flex xl:px-4">
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
               navigation
            />
         </PaginationWrapper>
      </PaginationContainer>
   );
}
