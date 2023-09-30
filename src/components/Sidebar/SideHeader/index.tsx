import ToggleSidebar from "@/components/ToggleSidebar";
import { sidebarActions } from "@/store/slices/sidebar-slice";
import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { sideLinkAnimation } from "@/animations/SidebarAnimations";

export default function SideHeader() {
   const dispatch = useDispatch();
   const toggleReveal = () => dispatch(sidebarActions.toggleReveal());
   const toggleExpand = () => dispatch(sidebarActions.toggleExpanded());
   return (
      <div className="flex items-center overflow-hidden">
         <div className="hidden lg:block">
            <ToggleSidebar onClick={toggleExpand} />
         </div>
         <div className="lg:hidden">
            <ToggleSidebar onClick={toggleReveal} />
         </div>
         <motion.span
            variants={sideLinkAnimation}
            className="text-4xl font-bold ml-3 flex-shrink-0"
         >
            GII
         </motion.span>
      </div>
   );
}
