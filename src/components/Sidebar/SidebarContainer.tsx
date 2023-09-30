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
         className={`fixed lg:sticky top-0 z-40 self-start h-screen duration-300 ${
            revealSidebar ? "" : "-translate-x-full lg:translate-x-0"
         }`}
      >
         <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-full bg-primary-light dark:bg-primary-dark p-10 hover:pr-8 overflow-y-hidden hover:overflow-y-scroll main-scrollbar"
         >
            <div
               className={`${
                  expandSidebar ? "w-40" : "w-10"
               } duration-300 space-y-5`}
            >
               {children}
            </div>
         </motion.div>
      </div>
   );
}
