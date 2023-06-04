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
import SideLinks from "./SideLinks";
import ModalPortal from "../modals/ModalPortal";
import CreateListModal from "../modals/createList/CreateListModal";
import { useState } from "react";

export default function Sidebar() {
   const { lists } = useListsContext();
   const user = useUser();

   const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
   const openForm = () => setShowCreateForm(true);
   const closeForm = () => setShowCreateForm(false);

   return (
      <SidebarContainer>
         <AnimateSharedLayout>
            <BrandHamburger />
            <SideLine />
            <SideLinks />
            <SideLine />
            {user ? (
               <>
                  <CreateListButton onClick={openForm} />
                  <ModalPortal isOpen={showCreateForm}>
                     <CreateListModal close={closeForm} />
                  </ModalPortal>
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
         </AnimateSharedLayout>
      </SidebarContainer>
   );
}
