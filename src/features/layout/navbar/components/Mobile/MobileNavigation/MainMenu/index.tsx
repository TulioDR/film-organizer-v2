import React from "react";
import MainMenuContainer from "./MainMenuContainer";
import MenuItem from "../MenuItem";
import { NAVIGATION_ITEMS } from "@/features/layout/sidebar/constants/NAVIGATION_ITEMS";

type Props = {
   slideLeft: boolean;
   setCurrentMenu: (menu: "movie" | "tv" | null | "settings") => void;
};

export default function MainMenu({ slideLeft, setCurrentMenu }: Props) {
   const setTvMenu = () => setCurrentMenu("tv");
   const setMovieMenu = () => setCurrentMenu("movie");
   const setSettingsMenu = () => setCurrentMenu("settings");

   return (
      <MainMenuContainer slideLeft={slideLeft}>
         {NAVIGATION_ITEMS.map((item) => (
            <MenuItem
               key={item.link}
               href={item.link}
               text={item.text}
               icon={item.icon}
               dropdown={!!item.items}
               onClick={
                  !!item.items
                     ? item.mediaType === "movie"
                        ? setMovieMenu
                        : setTvMenu
                     : undefined
               }
            />
         ))}
         <MenuItem href="/" text="Log in / Sign up" icon="login" />
         <MenuItem
            text="Settings"
            icon="settings"
            dropdown
            onClick={setSettingsMenu}
         />
      </MainMenuContainer>
   );
}
