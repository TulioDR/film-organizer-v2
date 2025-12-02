import GlassContainer from "@/common/components/GlassContainer";
import React from "react";
import PaginationButton from "./PaginationButton";
import PaginationContainer from "./PaginationContainer";
import FixedUIPortal from "@/features/layout/main-layout/components/FixedUIPortal";
import { usePagination } from "@mantine/hooks";
import NavigationButton from "./NavigationButton";

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
            <NavigationButton
               left
               page={currentPage - 1}
               disabled={currentPage === 1}
            />

            <GlassContainer className="h-full flex px-4">
               {range.map((value, index) => (
                  <PaginationButton
                     key={index + "-" + value}
                     page={value === "dots" ? "..." : value}
                     isActive={currentPage === value}
                     disabled={value === "dots"}
                  />
               ))}
            </GlassContainer>

            <NavigationButton
               right
               page={currentPage + 1}
               disabled={currentPage === total}
            />
         </PaginationContainer>
      </FixedUIPortal>
   );
}
