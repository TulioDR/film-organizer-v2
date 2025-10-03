import React from "react";
import SubMenuContainer from "./SubMenuContainer";
import MenuItem from "../MenuItem";

type Props = {
   setMainMenu: () => void;
};

export default function MovieMenu({ setMainMenu }: Props) {
   return (
      <SubMenuContainer>
         <MenuItem text="Go back" icon="chevron_left" onClick={setMainMenu} />
         <MenuItem
            href="/movie/popular"
            text="Popular movies"
            icon="local_fire_department"
         />
         <MenuItem
            href="/movie/genres"
            text="Movie genres"
            icon="theater_comedy"
         />
         <MenuItem
            href="/movie/trending"
            text="Trending movies"
            icon="trending_up"
         />
         <MenuItem
            href="/movie/top-rated"
            text="Top rated movies"
            icon="star"
         />
      </SubMenuContainer>
   );
}
