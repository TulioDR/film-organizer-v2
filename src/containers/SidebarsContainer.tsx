import { useState } from "react";

import useSidebarContext from "../context/SidebarContext";
import CreateListModal from "../layout/modals/createList/CreateListModal";
import Sidebar from "../layout/sidebar/Sidebar";
import ModalPortal from "@/layout/modals/ModalPortal";

export default function SidebarsContainer() {
   const { showSidebar } = useSidebarContext();
   const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
   const openForm = () => setShowCreateForm(true);
   const closeForm = () => setShowCreateForm(false);

   return (
      <>
         <div className="hidden lg:block">
            <Sidebar openForm={openForm} />
         </div>
         <div
            className={`lg:hidden fixed top-0 left-0 z-50 bg-light-bg-primary dark:bg-dark-bg-primary duration-300 ${
               showSidebar ? "" : "-translate-x-full"
            }`}
         >
            <Sidebar openForm={openForm} />
         </div>
         <ModalPortal isOpen={showCreateForm}>
            <CreateListModal close={closeForm} />
         </ModalPortal>
      </>
   );
}
