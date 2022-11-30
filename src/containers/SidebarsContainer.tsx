import useSidebarContext from "../context/SidebarContext";
import Sidebar from "../layout/Sidebar";

export default function SidebarsContainer() {
   const { showSidebar } = useSidebarContext();
   return (
      <>
         <div className="hidden lg:block">
            <Sidebar />
         </div>
         <div
            className={`lg:hidden fixed top-0 left-0 z-20 bg-gray-800 duration-300 ${
               showSidebar ? "" : "-translate-x-full"
            }`}
         >
            <Sidebar />
         </div>
      </>
   );
}
