import BrandHamburger from "./BrandHamburger";
import CreateListButton from "./CreateListButton";
import SidebarContainer from "./SidebarContainer";
import SideSubtitle from "./SideSubtitle";
import SideLine from "./SideLine";
import SideLinks from "./SideLinks";

import { useState } from "react";
import ModalPortal from "@/components/Modals/ModalPortal";
import CreateListModal from "@/components/Modals/CreateListModal";
import { useUser } from "@clerk/nextjs";
import SideMessage from "./SideMessage";
import { useRouter } from "next/router";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import SideLoadingLists from "./SideLoadingLists";
import SideLists from "./SideLists";

export default function Sidebar() {
   const { isLoaded, user } = useUser();

   const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
   const openForm = () => setShowCreateForm(true);
   const closeForm = () => setShowCreateForm(false);

   const router = useRouter();
   const goToAuth = () => router.push("/auth");

   const { lists } = useSelector((state: StoreModel) => state.lists);

   return (
      <SidebarContainer>
         <BrandHamburger />
         <SideLine />
         <SideLinks />
         <SideLine />
         {isLoaded && user && (
            <>
               <CreateListButton onClick={openForm} />
               <ModalPortal isOpen={showCreateForm}>
                  <CreateListModal close={closeForm} />
               </ModalPortal>
               <SideSubtitle>Lists</SideSubtitle>
               {!lists && <SideLoadingLists />}
               {lists && lists.length > 0 && <SideLists />}
               {lists && lists.length <= 0 && (
                  <SideMessage icon="add" onClick={openForm}>
                     Create a list to start saving your favorite Movies and TV
                     Series.
                  </SideMessage>
               )}
            </>
         )}
         {isLoaded && !user && (
            <SideMessage icon="priority_high" onClick={goToAuth}>
               Login to Create and see your Lists!
            </SideMessage>
         )}
      </SidebarContainer>
   );
}
``;
