import SideLink from "./SideLink";

export default function SideLinks() {
   return (
      <>
         <SideLink link="/" icon="home" text="Home" />
         <SideLink
            link="#"
            icon="movie"
            text="Movies"
            mediaType="movie"
            dropdown
         >
            <SideLink
               link="/popular/movie"
               icon="whatshot"
               text="Popular"
               item
            />
            <SideLink
               link="/genres/movie"
               icon="theater_comedy"
               text="Genres"
               item
            />
            <SideLink
               link="/trending/movie"
               icon="trending_up"
               text="Trending"
               item
            />
         </SideLink>
         <SideLink
            link="#"
            icon="smart_display"
            text="Series"
            mediaType="tv"
            dropdown
         >
            <SideLink link="/popular/tv" icon="whatshot" text="Popular" item />
            <SideLink
               link="/genres/tv"
               icon="theater_comedy"
               text="Genres"
               item
            />
            <SideLink
               link="/trending/tv"
               icon="trending_up"
               text="Trending"
               item
            />
         </SideLink>
         <SideLink link="/discover" icon="travel_explore" text="Discover" />
         <SideLink
            link="/lists"
            icon="format_list_bulleted"
            text="Manage Lists"
         />
      </>
   );
}
