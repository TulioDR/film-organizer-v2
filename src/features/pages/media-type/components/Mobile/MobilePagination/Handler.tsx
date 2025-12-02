import React from "react";
import ToggleMenuButton from "./ToggleMenuButton";
import PaginationContainer from "../../Desktop/DesktopPagination/PaginationContainer";
import NavigationButton from "../../Desktop/DesktopPagination/NavigationButton";

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
         <NavigationButton
            left
            page={currentPage - 1}
            disabled={currentPage === 1}
         />

         <ToggleMenuButton
            isOpen={isOpen}
            onClick={toggleMenu}
            currentPage={currentPage}
            total={total}
         />

         <NavigationButton
            right
            page={currentPage + 1}
            disabled={currentPage === total}
         />
      </PaginationContainer>
   );
}
