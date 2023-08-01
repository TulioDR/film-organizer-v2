import { useUser } from "@supabase/auth-helpers-react";
import BrandHamburger from "./BrandHamburger";
import CreateListButton from "./CreateListButton";
import SidebarContainer from "./SidebarContainer";
import SideLoginMessage from "./SideLoginMessage";
import SideSubtitle from "./SideSubtitle";
import SideLine from "./SideLine";
import SideLinks from "./SideLinks";

import { useState } from "react";
import SideLists from "./SideLists";
import ModalPortal from "@/components/Modals/ModalPortal";
import CreateListModal from "@/components/Modals/CreateListModal";

export default function Sidebar() {
   const user = useUser();

   const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
   const openForm = () => setShowCreateForm(true);
   const closeForm = () => setShowCreateForm(false);

   return (
      <SidebarContainer>
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
            <>{/* <SideLoginMessage /> */}</>
         )}
      </SidebarContainer>
   );
}
