import React from "react";
import SubMenuContainer from "./SubMenuContainer";
import MenuItem from "../MenuItem";

type Props = {
   setMainMenu: () => void;
};

export default function TvMenu({ setMainMenu }: Props) {
   return (
      <SubMenuContainer>
         <MenuItem text="Go back" icon="chevron_left" onClick={setMainMenu} />
         <MenuItem
            href="/tv/popular"
            text="Popular TV series"
            icon="local_fire_department"
         />
         <MenuItem href="/tv/genres" text="TV genres" icon="theater_comedy" />
         <MenuItem
            href="/tv/trending"
            text="Trending TV series"
            icon="trending_up"
         />
         <MenuItem
            href="/tv/top-rated TV series"
            text="Top rated"
            icon="star"
         />
      </SubMenuContainer>
   );
}
