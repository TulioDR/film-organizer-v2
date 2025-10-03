import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MainMenu from "./MainMenu";
import MovieMenu from "./SubMenu/MovieMenu";
import TvMenu from "./SubMenu/TvMenu";

type Props = {};

export default function MobileNav({}: Props) {
   type MenuType = "movie" | "tv" | null | "settings";
   const [currentMenu, setCurrentMenu] = useState<MenuType>(null);

   const setMainMenu = () => setCurrentMenu(null);

   return (
      <>
         <MainMenu slideLeft={!!currentMenu} setCurrentMenu={setCurrentMenu} />
         <AnimatePresence>
            {currentMenu === "movie" && (
               <MovieMenu key="movie" setMainMenu={setMainMenu} />
            )}
            {currentMenu === "tv" && (
               <TvMenu key="tv" setMainMenu={setMainMenu} />
            )}
         </AnimatePresence>
      </>
   );
}
