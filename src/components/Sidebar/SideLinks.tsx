import SideItem from "./SideItem";

export default function SideLinks() {
   const movieItems = [
      {
         link: "/movie/popular",
         icon: "local_fire_department",
         text: "Popular",
      },
      { link: "/movie/genres", icon: "theater_comedy", text: "Genres" },
      { link: "/movie/trending", icon: "trending_up", text: "Trending" },
      { link: "/movie/top-rated", icon: "star", text: "Top Rated" },
   ];

   const tvItems = [
      { link: "/tv/popular", icon: "local_fire_department", text: "Popular" },
      { link: "/tv/genres", icon: "theater_comedy", text: "Genres" },
      { link: "/tv/trending", icon: "trending_up", text: "Trending" },
      { link: "/tv/top-rated", icon: "star", text: "Top Rated" },
   ];

   return (
      <div className="space-y-2">
         <SideItem link="/" icon="home" text="Home" />
         <SideItem
            link="#"
            icon="movie"
            text="Movies"
            mediaType="movie"
            dropdown
            items={movieItems}
         />
         <SideItem
            link="#"
            icon="smart_display"
            text="Series"
            mediaType="tv"
            dropdown
            items={tvItems}
         />
         <SideItem link="/discover" icon="travel_explore" text="Discover" />
         <SideItem
            link="/lists"
            icon="format_list_bulleted"
            text="Manage Lists"
         />
      </div>
   );
}
