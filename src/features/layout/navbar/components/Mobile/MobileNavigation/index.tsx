import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MainMenu from "./MainMenu";
import MediaTypeSubMenu from "./SubMenu/MediaTypeSubMenu";
import {
   MOVIE_SUB_NAVIGATION,
   TV_SUB_NAVIGATION,
} from "@/features/layout/sidebar/constants/NAVIGATION_ITEMS";

type Props = {};

export default function MobileNavigation({}: Props) {
   type MenuType = "movie" | "tv" | "settings" | null;
   const [currentMenu, setCurrentMenu] = useState<MenuType>(null);

   const setMainMenu = () => setCurrentMenu(null);

   return (
      <>
         <MainMenu slideLeft={!!currentMenu} setCurrentMenu={setCurrentMenu} />
         <AnimatePresence>
            {(currentMenu === "movie" || currentMenu === "tv") && (
               <MediaTypeSubMenu
                  key={currentMenu}
                  mediaType={currentMenu}
                  closeMenu={setMainMenu}
                  mediaTypeItems={
                     currentMenu === "movie"
                        ? MOVIE_SUB_NAVIGATION
                        : TV_SUB_NAVIGATION
                  }
               />
            )}
         </AnimatePresence>
      </>
   );
}
