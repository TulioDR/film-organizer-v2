import SideItem from "./SideItem";

export default function SideLinks() {
   const movieItems = [
      {
         link: "/popular/movie",
         icon: "local_fire_department",
         text: "Popular",
      },
      { link: "/genres/movie", icon: "theater_comedy", text: "Genres" },
      { link: "/trending/movie", icon: "trending_up", text: "Trending" },
   ];

   const tvItems = [
      { link: "/popular/tv", icon: "local_fire_department", text: "Popular" },
      { link: "/genres/tv", icon: "theater_comedy", text: "Genres" },
      { link: "/trending/tv", icon: "trending_up", text: "Trending" },
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
