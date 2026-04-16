import { Fragment, useEffect, useState } from "react";
import PaginationButton from "./PaginationButton";
import PaginationContainer from "./PaginationContainer";
import { usePagination } from "@mantine/hooks";
import PaginationWrapper from "./PaginationWrapper";
import { useRouter } from "next/router";

type Props = {
   currentPage: number;
   total: number;

   isMobile: boolean;
};

export default function Pagination({ currentPage, total, isMobile }: Props) {
   const [siblings, setSiblings] = useState<number | undefined>(undefined);

   useEffect(() => {
      setSiblings(isMobile ? 0 : 1);
   }, [isMobile]);

   const { range } = usePagination({
      total: total,
      initialPage: currentPage,
      page: currentPage,
      siblings: siblings,
   });

   const router = useRouter();

   const handlePageChange = async (page: number) => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      router.push(
         {
            pathname: router.pathname,
            query: { ...router.query, page: page },
         },
         undefined,
         { scroll: false },
      );
   };

   if (siblings === undefined) return <></>;
   return (
      <PaginationContainer>
         <PaginationWrapper>
            <PaginationButton
               disabled={currentPage === 1}
               icon="keyboard_arrow_left"
               onClick={() => handlePageChange(currentPage - 1)}
               navigation
            />
         </PaginationWrapper>

         <PaginationWrapper className="h-full flex">
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
