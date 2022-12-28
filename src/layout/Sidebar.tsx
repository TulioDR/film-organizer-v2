import BrandHamburger from "../components/sidebar/BrandHamburger";
import SideLink from "../components/sidebar/SideLink";
import ToggleModeButton from "../components/sidebar/ToggleModeButton";
import useSidebarContext from "../context/SidebarContext";

import CreateListButton from "../components/sidebar/CreateListButton";
import useListsContext from "../context/ListsContext";

interface Props {
   openForm: () => void;
}
export default function Sidebar({ openForm }: Props) {
   const { isMovie, openSidebar } = useSidebarContext();
   const { lists } = useListsContext();

   return (
      <div
         className={`h-screen sticky top-0 duration-300 text-sm font-semibold pr-5 lg:pr-0 ${
            openSidebar ? "w-60 lg:w-56" : "w-14"
         }`}
      >
         <BrandHamburger />
         <div className="h-9 w-full pl-5">
            <ToggleModeButton />
         </div>

         <div className="ml-5 text-xs uppercase my-3 text-light-text-soft dark:text-dark-text-soft">
            Menu
         </div>
         <ul className="space-y-3">
            <SideLink link="/" icon="home" text="Home" />
            <SideLink
               link={`/popular/${isMovie ? "movie" : "tv"}`}
               icon="whatshot"
               text={`Popular ${isMovie ? "Movies" : "TV Shows"}`}
            />
            <SideLink
               link={`/genres/${isMovie ? "movie" : "tv"}`}
               icon="theater_comedy"
               text={`${isMovie ? "Movie" : "TV"} Genres`}
            />
            <SideLink link="/discover" icon="travel_explore" text="Discover" />
            <SideLink
               link="/lists"
               icon="format_list_bulleted"
               text="Manage Lists"
            />
         </ul>
         <CreateListButton onClick={openForm} />
         <div className="ml-5 text-xs uppercase my-3 text-light-text-soft dark:text-dark-text-soft">
            Lists
         </div>
         <ul className="space-y-3">
            {lists.map((list) => (
               <SideLink
                  key={list.id}
                  link={`/lists/${list.id}`}
                  icon="featured_play_list"
                  text={list.name}
               />
            ))}
         </ul>
      </div>
   );
}
