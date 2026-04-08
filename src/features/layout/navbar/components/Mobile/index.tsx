import React from "react";
import BottomNavButton from "./BottomNavButton";
import MobileNavTitle from "./MobileNavTitle";
import DarkModeButton from "../Desktop/DarkModeButton";
import NavDropdown from "../NavDropdown";
import NavSearch from "../Desktop/NavSearch";
import { NAVIGATION_ITEMS } from "../../constants/NAVIGATION_ITEMS";

type Props = {};

export default function Mobile({}: Props) {
   return (
      <>
         <div className="bg-white dark:bg-black flex justify-between border-y border-border-light dark:border-border-dark h-14 fixed top-0 left-0 w-full z-20 px-4 lg:px-32">
            <MobileNavTitle />
            <div className="flex gap-2 h-full items-center">
               <NavSearch />
               <NavDropdown />
               <DarkModeButton />
            </div>
         </div>
         <div className="bg-white dark:bg-black flex border-y border-border-light dark:border-border-dark h-14 fixed bottom-0 left-0 w-full z-20 px-4 lg:px-32">
            {NAVIGATION_ITEMS.map((item) => (
               <BottomNavButton
                  key={item.link}
                  href={item.link}
                  icon={item.icon}
                  text={item.text}
               />
            ))}
         </div>
      </>
   );
}
