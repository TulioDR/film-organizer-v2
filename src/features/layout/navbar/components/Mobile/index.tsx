import MobileMenu from "@/features/layout/mobile-menu/components/MobileMenu";
import React from "react";
import MobileNavigation from "./MobileNavigation";
import MobileSearchbar from "./MobileSearchbar";
import FixedUIPortal from "@/features/layout/main-layout/components/FixedUIPortal";
import NavTitle from "../NavTitle";

type Props = {};

export default function Mobile({}: Props) {
   return (
      <>
         <MobileMenu position="topRight" buttonIcon="menu">
            <MobileNavigation />
         </MobileMenu>
         <FixedUIPortal>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-16 flex items-center justify-center">
               <NavTitle />
            </div>
         </FixedUIPortal>
         <MobileMenu position="topLeft" buttonIcon="search">
            <MobileSearchbar />
         </MobileMenu>
      </>
   );
}
