import React from "react";
import ToggleMenuButton from "./ToggleMenuButton";
import PaginationContainer from "../../Desktop/DesktopPagination/PaginationContainer";
import PaginationButton from "../../Desktop/DesktopPagination/PaginationButton";
import PaginationWrapper from "../../Desktop/DesktopPagination/PaginationWrapper";

type Props = {
   isOpen: boolean;
   toggleMenu: () => void;
   currentPage: number;
   total: number;
};

export default function Handler({
   isOpen,
   toggleMenu,
   currentPage,
   total,
}: Props) {
   return (
      <PaginationContainer isOpen={isOpen}>
         <PaginationWrapper>
            <PaginationButton
               page={currentPage - 1}
               disabled={currentPage === 1}
               navigation
               icon="keyboard_arrow_left"
            />
         </PaginationWrapper>

         <ToggleMenuButton
            isOpen={isOpen}
            onClick={toggleMenu}
            currentPage={currentPage}
            total={total}
         />

         <PaginationWrapper>
            <PaginationButton
               page={currentPage + 1}
               disabled={currentPage === total}
               navigation
               icon="keyboard_arrow_right"
            />
         </PaginationWrapper>
      </PaginationContainer>
   );
}
