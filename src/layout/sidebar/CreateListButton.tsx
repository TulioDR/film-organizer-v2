import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import useSidebarContext from "../../context/SidebarContext";
import useThemeContext from "../../context/ThemeContext";

type Props = {
   onClick: () => void;
};

export default function CreateListButton({ onClick }: Props) {
   const { themeColor } = useThemeContext();
   const { openSidebar } = useSidebarContext();
   return (
      <div className="w-full pl-10">
         <div className="rounded-lg overflow-hidden h-full">
            <button
               onClick={onClick}
               style={{ backgroundColor: themeColor }}
               className="h-full grid place-content-center w-full truncate"
            >
               <AnimatePresence mode="wait">
                  {openSidebar ? (
                     <motion.span
                        initial={{ opacity: 0 }}
                        animate={{
                           opacity: 1,
                           transition: { duration: 0.1, delay: 0.1 },
                        }}
                        key="text"
                     >
                        Create List
                     </motion.span>
                  ) : (
                     <span key="icon" className="material-icons">
                        add
                     </span>
                  )}
               </AnimatePresence>
            </button>
         </div>
      </div>
   );
}
