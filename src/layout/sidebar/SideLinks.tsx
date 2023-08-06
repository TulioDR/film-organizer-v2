import SideLink from "./SideLink";

export default function SideLinks() {
   const movieItems = [
      { link: "/popular/movie", icon: "whatshot", text: "Popular" },
      { link: "/genres/movie", icon: "theater_comedy", text: "Genres" },
      { link: "/trending/movie", icon: "trending_up", text: "Trending" },
   ];

   const tvItems = [
      { link: "/popular/tv", icon: "whatshot", text: "Popular" },
      { link: "/genres/tv", icon: "theater_comedy", text: "Genres" },
      { link: "/trending/tv", icon: "trending_up", text: "Trending" },
   ];

   return (
      <>
         <SideLink link="/" icon="home" text="Home" />
         <SideLink
            link="#"
            icon="movie"
            text="Movies"
            mediaType="movie"
            dropdown
            items={movieItems}
         />
         <SideLink
            link="#"
            icon="smart_display"
            text="Series"
            mediaType="tv"
            dropdown
            items={tvItems}
         />
         <SideLink link="/discover" icon="travel_explore" text="Discover" />
         <SideLink
            link="/lists"
            icon="format_list_bulleted"
            text="Manage Lists"
         />
      </>
   );
}
