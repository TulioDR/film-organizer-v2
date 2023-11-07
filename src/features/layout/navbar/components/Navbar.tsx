import LoginButton from "./LoginButton";
import Searchbar from "./Searchbar";

import { useDispatch } from "react-redux";
import { sidebarActions } from "@/store/slices/sidebar-slice";
import { motion } from "framer-motion";
import NavDropdown from "./NavDropdown";
import ToggleSidebar from "@/components/ToggleSidebar";

export default function Navbar() {
   const dispatch = useDispatch();
   const handleClick = () => dispatch(sidebarActions.toggleReveal());

   const staggerContainer = {
      initial: {},
      animate: { transition: { staggerChildren: 0.3 } },
      exit: { opacity: 0, transition: { duration: 0.5 } },
   };

   return (
      <div
         id="navbar"
         className="w-full z-20 sticky top-0 py-5 sm:py-10 flex items-center pointer-events-none"
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
            <Searchbar />
            <div className="flex gap-5 pointer-events-auto">
               <NavDropdown />
               <LoginButton />
            </div>
         </motion.div>
      </div>
   );
}
