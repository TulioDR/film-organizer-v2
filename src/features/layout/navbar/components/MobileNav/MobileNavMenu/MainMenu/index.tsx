import React from "react";
import MainMenuContainer from "./MainMenuContainer";
import MenuItem from "../MenuItem";

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
         <MenuItem href="/" text="Home" icon="home" />
         <MenuItem
            href="/movie"
            text="Movies"
            icon="movie"
            dropdown
            onClick={setMovieMenu}
         />
         <MenuItem
            href="/tv"
            text="TV"
            icon="tv"
            dropdown
            onClick={setTvMenu}
         />
         <MenuItem href="/discover" text="Discover" icon="travel_explore" />
         <MenuItem href="/" text="Playlists" icon="format_list_bulleted" />
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
