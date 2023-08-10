import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import StoreModel from "@/models/StoreModel";

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
         <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.4 }}
            id="sidebar"
            className="h-full bg-primary lg:bg-transparent"
         >
            <div className="w-full h-full p-10 hover:pr-8 overflow-y-hidden overflow-x-hidden hover:overflow-y-scroll sidebar-scrollbar space-y-3">
               {children}
            </div>
         </motion.div>
      </div>
   );
}
