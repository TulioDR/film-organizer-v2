import LoginButton from "./LoginButton";

import { useDispatch } from "react-redux";
import { sidebarActions } from "@/store/slices/sidebar-slice";
import NavDropdown from "./NavDropdown";
import ToggleSidebar from "@/components/ToggleSidebar";

export default function Navbar() {
   const dispatch = useDispatch();
   const handleClick = () => dispatch(sidebarActions.toggleReveal());

   return (
      <div
         id="navbar"
         className="w-full px-8 z-20 fixed top-0 h-32 py-8 flex justify-between items-center pointer-events-none"
      >
         <div className="text-5xl font-black uppercase h-full flex items-center">
            Agrios
         </div>
         <div className="lg:hidden pointer-events-auto">
            <ToggleSidebar onClick={handleClick} />
         </div>
         <div className="flex gap-5 pointer-events-auto h-full">
            <NavDropdown />
            <LoginButton />
         </div>
      </div>
   );
}
