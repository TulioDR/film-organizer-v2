import LoginButton from "./LoginButton";
import SearchBar from "./searchbar/SearchBar";
import User from "./user/User";
import ToggleSidebar from "../../components/ToggleSidebar";
import useSidebarContext from "../../context/SidebarContext";

export default function Navbar() {
   const { toggleShowSidebar } = useSidebarContext();
   return (
      <div className="py-5 w-full z-20 sticky top-0 flex items-center justify-between space-x-3 lg:space-x-0">
         <div className="lg:hidden">
            <ToggleSidebar onClick={toggleShowSidebar} />
         </div>
         <div className="flex-1 h-full">
            <SearchBar />
         </div>
         <div className="flex space-x-2">
            <User />
            <LoginButton />
         </div>
      </div>
   );
}
