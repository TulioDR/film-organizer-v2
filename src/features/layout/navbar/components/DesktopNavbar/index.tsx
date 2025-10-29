import GlassContainer from "@/common/components/GlassContainer";
import React from "react";
import NavTitle from "./NavTitle";
import { NAVIGATION_ITEMS } from "@/features/layout/sidebar/constants/NAVIGATION_ITEMS";
import DarkModeButton from "./DarkModeButton";
import DesktopSearchbar from "../Searchbar/DesktopSearchbar";
import NavItem from "./NavItem";

type Props = {};

export default function DesktopNavbar({}: Props) {
   return (
      <div className="w-full z-20 absolute top-0 h-16 flex justify-center pointer-events-none">
         {/* <div className="w-full h-full flex relative pointer-events-auto"> */}
         <GlassContainer className="h-full w-full flex px-4 relative shadow-lg">
            <div className="flex flex-1">
               <NavTitle />
            </div>
            <div className="flex">
               {NAVIGATION_ITEMS.map((item) => (
                  <NavItem key={item.link} item={item} />
               ))}
            </div>
            {/* <DesktopSearchbar /> */}
            <div className="flex justify-end flex-1">
               <div className="h-full aspect-square flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                  <span className="material-symbols-outlined">search</span>
               </div>
               <div className="flex items-center h-full px-4 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                  <div className="h-full flex items-center justify-center">
                     <span className="material-symbols-outlined">person</span>
                  </div>
                  <span className="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </div>
               <DarkModeButton />
            </div>
         </GlassContainer>
         {/* </div> */}
      </div>
   );
}
