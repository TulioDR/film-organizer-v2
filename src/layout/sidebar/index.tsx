import { useUser } from "@supabase/auth-helpers-react";
import BrandHamburger from "./BrandHamburger";
import CreateListButton from "./CreateListButton";
import SidebarContainer from "./SidebarContainer";
import SideLoginMessage from "./SideLoginMessage";
import SideSubtitle from "./SideSubtitle";
import SideLine from "./SideLine";
import { AnimateSharedLayout } from "framer-motion";
import SideLinks from "./SideLinks";
import ModalPortal from "../modals/ModalPortal";
import CreateListModal from "../modals/createList/CreateListModal";
import { useState } from "react";
import SideLists from "./SideLists";

export default function Sidebar() {
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
                  <SideLine />
                  <SideSubtitle>Lists</SideSubtitle>
                  <SideLists />
               </>
            ) : (
               <SideLoginMessage />
            )}
         </AnimateSharedLayout>
      </SidebarContainer>
   );
}
