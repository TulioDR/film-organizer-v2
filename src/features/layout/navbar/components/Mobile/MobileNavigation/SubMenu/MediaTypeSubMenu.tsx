import React from "react";
import SubMenuContainer from "./SubMenuContainer";
import MenuItem from "../MenuItem";
import { SubNavigationModel } from "../../../models/NavigationModels";

type Props = {
   closeMenu: () => void;
   mediaTypeItems: SubNavigationModel[];
   mediaType: "movie" | "tv";
};

export default function MediaTypeSubMenu({
   closeMenu,
   mediaTypeItems,
   mediaType,
}: Props) {
   const isMovie = mediaType === "movie";
   return (
      <SubMenuContainer>
         <MenuItem
            text={isMovie ? "Movies" : "TV"}
            icon="chevron_left"
            onClick={closeMenu}
         />
         {mediaTypeItems.map((item) => (
            <MenuItem
               key={item.link}
               href={item.link}
               text={item.text}
               icon={item.icon}
            />
         ))}
      </SubMenuContainer>
   );
}
