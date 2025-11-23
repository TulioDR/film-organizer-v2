import React from "react";
import NavTitle from "../NavTitle";
import { NAVIGATION_ITEMS } from "@/features/layout/sidebar/constants/NAVIGATION_ITEMS";
import DarkModeButton from "./DarkModeButton";
import NavItem from "./NavItem";

type Props = {};

export default function Desktop({}: Props) {
   return (
      <div className="w-full z-20 absolute top-2 h-12 flex justify-center pointer-events-auto">
         <div className="flex items-center w-96">
            <NavTitle />
         </div>
         <div className="flex flex-1 justify-between pl-8">
            <div className="flex gap-8">
               {NAVIGATION_ITEMS.map((item) => (
                  <NavItem key={item.link} item={item} />
               ))}
            </div>
            <div className="flex gap-4">
               <div className="h-full aspect-square flex items-center justify-center rounded-full border border-border-light dark:border-border-dark bg-primary-light dark:bg-primary-dark text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                  <span className="material-symbols-outlined">search</span>
               </div>
               <div className="flex mr-4 2xl:mr-16 rounded-md border border-border-light dark:border-border-dark bg-primary-light dark:bg-primary-dark items-center h-full px-2 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                  <div className="h-full flex items-center justify-center">
                     <span className="material-symbols-outlined">person</span>
                  </div>
                  <span className="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </div>
               <DarkModeButton />
            </div>
         </div>
      </div>
   );
}
