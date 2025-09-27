import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainMenu from "./MainMenu";
import MovieMenu from "./SubMenu/MovieMenu";
import TvMenu from "./SubMenu/TvMenu";

type Props = {};

export default function MobileNavMenu({}: Props) {
   type MenuType = "movie" | "tv" | null | "settings";
   const [currentMenu, setCurrentMenu] = useState<MenuType>(null);

   const setMainMenu = () => setCurrentMenu(null);

   return (
      <div className="absolute inset-0 z-30 rounded-md overflow-hidden pointer-events-auto">
         <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 100%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 100%)" }}
            transition={{ duration: 0.2 }}
            className="w-full h-full bg-gray-200 text-black relative"
         >
            <MainMenu
               slideLeft={!!currentMenu}
               setCurrentMenu={setCurrentMenu}
            />
            <AnimatePresence>
               {currentMenu === "movie" && (
                  <MovieMenu key="movie" setMainMenu={setMainMenu} />
               )}
               {currentMenu === "tv" && (
                  <TvMenu key="tv" setMainMenu={setMainMenu} />
               )}
            </AnimatePresence>
         </motion.div>
      </div>
   );
}
