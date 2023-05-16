import { useUser } from "@supabase/auth-helpers-react";
import useListsContext from "../../context/ListsContext";
import BrandHamburger from "./BrandHamburger";
import CreateListButton from "./CreateListButton";
import NoListsMessage from "./NoListsMessage";
import SidebarContainer from "./SidebarContainer";
import SideLink from "./SideLink";
import SideLoginMessage from "./SideLoginMessage";
import SideSubtitle from "./SideSubtitle";
import SideLine from "./SideLine";
import { AnimateSharedLayout } from "framer-motion";

interface Props {
   openForm: () => void;
}
export default function Sidebar({ openForm }: Props) {
   const { lists } = useListsContext();
   const user = useUser();
   return (
      <AnimateSharedLayout>
         <SidebarContainer>
            <BrandHamburger />
            <SideLine />
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
               <SideLink
                  link="/popular/tv"
                  icon="whatshot"
                  text="Popular"
                  item
               />
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
            <SideLine />
            {user ? (
               <>
                  <CreateListButton onClick={openForm} />
                  <SideSubtitle>Lists</SideSubtitle>
                  {lists.length > 0 ? (
                     lists.map((list) => (
                        <SideLink
                           key={list.id}
                           link={`/lists/${list.id}`}
                           icon="featured_play_list"
                           text={list.name}
                        />
                     ))
                  ) : (
                     <NoListsMessage />
                  )}
               </>
            ) : (
               <SideLoginMessage />
            )}
         </SidebarContainer>
      </AnimateSharedLayout>
   );
}
