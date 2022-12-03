import SearchBar from "../components/navbar/searchbar/SearchBar";
import User from "../components/navbar/user/User";
import ToggleSidebar from "../components/ToggleSidebar";
import useSidebarContext from "../context/SidebarContext";

export default function Navbar() {
   const { toggleShowSidebar } = useSidebarContext();
   return (
      <>
         <div className="sm:hidden flex justify-between items-center w-full mt-5 z-20">
            <span className="text-xl font-bold truncate">Film Organizer</span>
            <User />
         </div>
         <div className="py-5 w-full z-10 sticky top-0">
            <div className="h-full w-full flex items-center justify-between">
               <div className="flex w-full sm:w-auto">
                  <div className="lg:hidden mr-3">
                     <ToggleSidebar onClick={toggleShowSidebar} />
                  </div>
                  <div className="flex-1 ">
                     <SearchBar />
                  </div>
               </div>
               <div className="hidden sm:block">
                  <User />
               </div>
            </div>
         </div>
      </>
   );
}
