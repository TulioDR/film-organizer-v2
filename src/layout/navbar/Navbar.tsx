import LoginButton from "./LoginButton";
import SearchBar from "./searchbar/SearchBar";
import User from "./user/User";
import ToggleSidebar from "../../components/ToggleSidebar";
import { useDispatch } from "react-redux";
import { sidebarActions } from "@/store/slices/sidebar-slice";

export default function Navbar() {
   const dispatch = useDispatch();
   const handleClick = () => dispatch(sidebarActions.toggleReveal());

   return (
      <div className="w-full z-20 sticky top-0 pt-10 pb-5 px-10 flex items-center pointer-events-none">
         <div className="h-9 flex items-center justify-between space-x-3 lg:space-x-0 w-full">
            <div className="lg:hidden pointer-events-auto">
               <ToggleSidebar onClick={handleClick} />
            </div>
            <div className="h-full pointer-events-auto flex-1 sm:flex-initial">
               <SearchBar />
            </div>
            <div className="flex space-x-2 pointer-events-auto">
               <User />
               <LoginButton />
            </div>
         </div>
      </div>
   );
}
