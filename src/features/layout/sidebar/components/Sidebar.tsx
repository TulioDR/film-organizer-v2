import DropdownItemModel from "../models/DropdownItemModel";
import SideItem from "./SideItem";

import GlassContainer from "@/components/GlassContainer";

export default function Sidebar() {
   const movieItems: DropdownItemModel[] = [
      {
         link: "/movie/popular",
         icon: "local_fire_department",
         text: "Popular",
      },
      { link: "/movie/genres", icon: "theater_comedy", text: "Genres" },
      { link: "/movie/trending", icon: "trending_up", text: "Trending" },
      { link: "/movie/top-rated", icon: "star", text: "Top Rated" },
   ];

   const tvItems: DropdownItemModel[] = [
      { link: "/tv/popular", icon: "local_fire_department", text: "Popular" },
      { link: "/tv/genres", icon: "theater_comedy", text: "Genres" },
      { link: "/tv/trending", icon: "trending_up", text: "Trending" },
      { link: "/tv/top-rated", icon: "star", text: "Top Rated" },
   ];
   return (
      <div className="flex items-center w-16 pointer-events-none h-[100svh] z-40 absolute top-0 left-0">
         <GlassContainer
            el="nav"
            className="w-16 flex flex-col py-4 pointer-events-auto"
         >
            <SideItem link="/" icon="home" text="Home" />
            <SideItem
               link="/movie"
               icon="movie"
               text="Movies"
               mediaType="movie"
               items={movieItems}
            />
            <SideItem
               link="/tv"
               icon="smart_display"
               text="Series"
               mediaType="tv"
               items={tvItems}
            />
            <SideItem link="/discover" icon="travel_explore" text="Discover" />
            <SideItem
               link="/lists"
               icon="format_list_bulleted"
               text="Manage Lists"
            />
         </GlassContainer>
      </div>
   );
}
