import { useUser } from "@supabase/auth-helpers-react";
import useListsContext from "../../context/ListsContext";
import useSidebarContext from "../../context/SidebarContext";
import BrandHamburger from "./BrandHamburger";
import CreateListButton from "./CreateListButton";
import NoListsMessage from "./NoListsMessage";
import SidebarContainer from "./SidebarContainer";
import SideButtonContainer from "./SideButtonContainer";
import SideLink from "./SideLink";
import SideLoginMessage from "./SideLoginMessage";
import SideSubtitle from "./SideSubtitle";
import ToggleModeButton from "./ToggleModeButton";

interface Props {
   openForm: () => void;
}
export default function Sidebar({ openForm }: Props) {
   const { isMovie } = useSidebarContext();
   const { lists } = useListsContext();
   const user = useUser();
   return (
      <SidebarContainer>
         <BrandHamburger />
         <SideButtonContainer>
            <ToggleModeButton />
         </SideButtonContainer>
         <SideSubtitle>Menu</SideSubtitle>
         <ul className="space-y-2">
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
         {user ? (
            <>
               <SideButtonContainer>
                  <CreateListButton onClick={openForm} />
               </SideButtonContainer>
               <SideSubtitle>Lists</SideSubtitle>
               {lists.length > 0 ? (
                  <ul className="space-y-2">
                     {lists.map((list) => (
                        <SideLink
                           key={list.id}
                           link={`/lists/${list.id}`}
                           icon="featured_play_list"
                           text={list.name}
                        />
                     ))}
                  </ul>
               ) : (
                  <NoListsMessage />
               )}
            </>
         ) : (
            <SideLoginMessage />
         )}
      </SidebarContainer>
   );
}
