import SearchBar from "../components/navbar/searchbar/SearchBar";
import User from "../components/navbar/user/User";
import ToggleSidebar from "../components/ToggleSidebar";
import useSidebarContext from "../context/SidebarContext";

export default function Navbar() {
   const { toggleShowSidebar } = useSidebarContext();
   return (
      <div className="py-5 w-full sticky top-0 z-10">
         <div className="h-full w-full flex items-center justify-between">
            <div className="flex">
               <div className="lg:hidden mr-3">
                  <ToggleSidebar onClick={toggleShowSidebar} />
               </div>
               <SearchBar />
            </div>
            <User />
         </div>
      </div>
   );
}
