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
         className={`fixed lg:sticky top-0 z-40 bg-primary-light dark:bg-primary-dark self-start h-screen duration-300 p-10 overflow-x-hidden overflow-y-hidden hover:overflow-y-auto main-scrollbar ${
            revealSidebar ? "" : "-translate-x-full lg:translate-x-0"
         } ${expandSidebar ? "w-60" : "w-[120px]"}`}
      >
         <div className={`duration-300 ${expandSidebar ? "w-40" : "w-10"}`}>
            <motion.div
               id="sidebar"
               variants={staggerContainer}
               initial="initial"
               animate="animate"
               exit="exit"
               className="space-y-5"
            >
               {children}
            </motion.div>
         </div>
      </div>
   );
}
