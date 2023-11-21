import CreateListButton from "./CreateListButton";
import SidebarContainer from "./SidebarContainer";
import SideSubtitle from "./SideSubtitle";

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
import SideHeader from "./SideHeader";

export default function Sidebar() {
   const { isLoaded, user } = useUser();

   const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
   const openForm = () => setShowCreateForm(true);
   const closeForm = () => setShowCreateForm(false);

   const router = useRouter();
   const goToAuth = () => router.push("/auth");

   const { lists } = useSelector((state: StoreModel) => state.lists);
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);

   return (
      <SidebarContainer>
         <SideHeader />
         <SideLinks />
         {isLoaded && user && (
            <>
               <CreateListButton onClick={openForm} />
               <ModalPortal isOpen={showCreateForm}>
                  <CreateListModal close={closeForm} />
               </ModalPortal>
               <div className="space-y-5">
                  {expandSidebar ? (
                     <SideSubtitle>Lists</SideSubtitle>
                  ) : (
                     <div className="h-[1px] w-full bg-light-1 dark:bg-dark-1"></div>
                  )}
                  {!lists && <SideLoadingLists />}
                  {lists && lists.length > 0 && <SideLists />}
               </div>
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
