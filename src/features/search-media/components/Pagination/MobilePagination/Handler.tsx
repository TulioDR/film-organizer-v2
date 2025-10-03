import React from "react";
import NavigationButton from "../NavigationButton";
import ToggleMenuButton from "./ToggleMenuButton";
import PaginationContainer from "../DesktopPagination/PaginationContainer";

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
      <PaginationContainer>
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
