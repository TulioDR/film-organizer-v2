import { useState } from "react";

import CreateListModal from "../layout/modals/createList/CreateListModal";
import Sidebar from "../layout/sidebar/Sidebar";
import ModalPortal from "@/layout/modals/ModalPortal";
import { useSelector } from "react-redux";

export default function SidebarsContainer() {
   const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
   const openForm = () => setShowCreateForm(true);
   const closeForm = () => setShowCreateForm(false);

   const { revealSidebar } = useSelector((state: any) => state.sidebar);
   return (
      <>
         <div className="hidden lg:block">
            <Sidebar openForm={openForm} />
         </div>
         <div
            className={`lg:hidden fixed top-0 left-0 z-50 duration-300 ${
               revealSidebar ? "" : "-translate-x-full"
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
