import CreateListButton from "./CreateListButton";
import SidebarContainer from "./SidebarContainer";
import SideSubtitle from "./SideSubtitle";

import SideLinks from "./SideLinks";

import { useState } from "react";
import ModalPortal from "@/components/Modals/ModalPortal";

import { useUser } from "@clerk/nextjs";
import SideMessage from "./SideMessage";
import { useRouter } from "next/router";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import SideLoadingLists from "./SideLoadingLists";
import SideLists from "./SideLists";
import CreateListModal from "@/features/modals/createListModal/components/CreateListModal";
import GlassContainer from "@/components/GlassContainer";

export default function Sidebar() {
   // const { isLoaded, user } = useUser();

   const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
   const openForm = () => setShowCreateForm(true);
   const closeForm = () => setShowCreateForm(false);

   const router = useRouter();
   const goToAuth = () => router.push("/auth");

   const { lists } = useSelector((state: StoreModel) => state.lists);
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);

   return (
      <div className="flex items-center w-16 pointer-events-none h-[100svh] z-40 absolute top-0 left-0">
         <GlassContainer
            el="nav"
            className="w-16 flex flex-col py-4 pointer-events-auto"
         >
            <SideLinks />
         </GlassContainer>
      </div>
   );
}
