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
         id="sidebar"
         className={`z-40 fixed lg:sticky top-0 self-start h-screen duration-300  
            ${revealSidebar ? "" : "-translate-x-full lg:translate-x-0"} 
            ${expandSidebar ? "w-60" : "w-[120px]"}`}
      >
         <div className="h-full p-10 bg-primary-light dark:bg-primary-dark overflow-x-hidden lg:overflow-y-hidden hover:overflow-y-auto main-scrollbar">
            <div className={`duration-300 ${expandSidebar ? "w-40" : "w-10"}`}>
               <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-10"
               >
                  {children}
               </motion.div>
            </div>
         </div>
      </div>
   );
}
