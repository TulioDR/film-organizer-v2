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
         className={`sticky top-0 z-40 self-start h-screen duration-300 ${
            expandSidebar ? "w-60" : "w-[116px]"
         } ${revealSidebar ? "" : "-translate-x-full lg:translate-x-0"}`}
      >
         <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.4 }}
            id="sidebar"
            className="font-semibold backdrop-blur-md h-full bg-primary/60 "
         >
            <div className="w-full h-full p-10 hover:pr-8 overflow-y-hidden overflow-x-hidden hover:overflow-y-scroll sidebar-scrollbar space-y-5">
               {children}
            </div>
         </motion.div>
         {/* <div
            id="sidebar"
            className={`h-screen duration-300 flex-shrink-0 font-semibold backdrop-blur-md bg-primary/40 ${
               expandSidebar ? "w-60" : "w-[116px]"
            }`}
         > */}
      </div>
   );
}
