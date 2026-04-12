import React from "react";
import BottomNavButton from "./BottomNavButton";
import MobileNavTitle from "./MobileNavTitle";
import DarkModeButton from "../Desktop/DarkModeButton";
import NavDropdown from "../NavDropdown";
import NavSearch from "../Desktop/NavSearch";
import { NAVIGATION_ITEMS } from "../../constants/NAVIGATION_ITEMS";
import NavbarContainer from "../NavbarContainer";

type Props = {};

export default function Mobile({}: Props) {
   return (
      <>
         <NavbarContainer className="justify-between" top>
            <MobileNavTitle />
            <div className="flex gap-2 h-full items-center">
               <NavSearch />
               <NavDropdown />
               <DarkModeButton />
            </div>
         </NavbarContainer>
         <NavbarContainer bottom>
            {NAVIGATION_ITEMS.map((item) => (
               <BottomNavButton
                  key={item.link}
                  href={item.link}
                  icon={item.icon}
                  text={item.text}
               />
            ))}
         </NavbarContainer>
      </>
   );
}
