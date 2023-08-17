import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import { motion } from "framer-motion";
import { staggerContainer } from "@/animations/StaggerCards";

type Props = {
   children: React.ReactNode;
};

export default function SidebarContainer({ children }: Props) {
   const { expandSidebar, revealSidebar } = useSelector(
      (state: StoreModel) => state.sidebar
   );
   return (
      <div
         className={`fixed lg:sticky top-0 z-40 self-start h-screen duration-300 ${
            expandSidebar ? "w-60" : "w-[116px]"
         } ${revealSidebar ? "" : "-translate-x-full lg:translate-x-0"}`}
      >
         <div
            id="sidebar"
            className="h-full bg-primary-light dark:bg-primary-dark"
         >
            <motion.div
               variants={staggerContainer}
               initial="initial"
               animate="animate"
               exit="exit"
               className="w-full h-full p-10 hover:pr-8 overflow-y-hidden overflow-x-hidden hover:overflow-y-scroll sidebar-scrollbar space-y-3"
            >
               {children}
            </motion.div>
         </div>
      </div>
   );
}
