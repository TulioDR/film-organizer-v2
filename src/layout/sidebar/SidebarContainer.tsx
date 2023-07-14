import { useSelector } from "react-redux";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function SidebarContainer({ children }: Props) {
   const { expandSidebar, revealSidebar } = useSelector(
      (state: any) => state.sidebar
   );
   return (
      <motion.div
         initial={{ x: "-100%" }}
         animate={{ x: 0 }}
         exit={{ x: "-100%" }}
         transition={{ duration: 0.4 }}
         className={`fixed top-0 left-0 lg:static z-40 ${
            true ? "" : "-translate-x-full lg:translate-x-0"
         }`}
      >
         <div
            id="sidebar"
            className={`h-screen sticky top-0 duration-200 font-semibold backdrop-blur-md ${
               expandSidebar ? "w-60" : "w-[116px]"
            }`}
         >
            <div className="w-full h-full py-10 pr-10 hover:pr-8 overflow-y-hidden overflow-x-hidden hover:overflow-y-scroll sidebar-scrollbar space-y-5">
               {children}
            </div>
         </div>
      </motion.div>
   );
}
