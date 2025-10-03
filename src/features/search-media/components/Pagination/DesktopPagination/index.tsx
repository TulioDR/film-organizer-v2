import GlassContainer from "@/common/components/GlassContainer";
import React from "react";
import PaginationButton from "./PaginationButton";
import PaginationContainer from "./PaginationContainer";
import NavigationButton from "../NavigationButton";
import FixedUIPortal from "@/features/layout/main-layout/components/FixedUIPortal";

type Props = {
   range: (number | "dots")[];
   currentPage: number;
   total: number;
};

export default function DesktopPagination({
   currentPage,
   total,
   range,
}: Props) {
   return (
      <FixedUIPortal>
         <PaginationContainer>
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
