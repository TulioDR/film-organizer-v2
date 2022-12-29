import { useState } from "react";
import CreateListForm from "../components/sidebar/CreateListForm";
import useSidebarContext from "../context/SidebarContext";
import Sidebar from "../layout/Sidebar";

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
            className={`lg:hidden fixed top-0 left-0 z-50 bg-gray-800 duration-300 ${
               showSidebar ? "" : "-translate-x-full"
            }`}
         >
            <Sidebar openForm={openForm} />
         </div>
         <CreateListForm isOpen={showCreateForm} close={closeForm} />
      </>
   );
}
