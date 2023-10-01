import LoginButton from "./LoginButton";
import SearchBar from "./Searchbar";
import ToggleSidebar from "../../components/ToggleSidebar";
import { useDispatch } from "react-redux";
import { sidebarActions } from "@/store/slices/sidebar-slice";
import { motion } from "framer-motion";
import { staggerContainer } from "@/animations/StaggerCards";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
   const dispatch = useDispatch();
   const handleClick = () => dispatch(sidebarActions.toggleReveal());

   return (
      <div
         id="navbar"
         className="w-full z-20 sticky top-0 pt-10 pb-5 flex items-center pointer-events-none"
      >
         <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-10 flex items-center justify-between space-x-3 lg:space-x-0 w-full"
         >
            <div className="lg:hidden pointer-events-auto">
               <ToggleSidebar onClick={handleClick} />
            </div>
            <div className="h-full pointer-events-auto flex-1 sm:flex-initial">
               <SearchBar />
            </div>
            <div className="flex gap-5 pointer-events-auto">
               <NavDropdown />
               <LoginButton />
            </div>
         </motion.div>
      </div>
   );
}
