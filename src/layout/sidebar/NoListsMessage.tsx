import useSidebarContext from "../../context/SidebarContext";
import useThemeContext from "../../context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

export default function NoListsMessage({}: Props) {
   const { openSidebar } = useSidebarContext();
   const { themeColor } = useThemeContext();

   return (
      <AnimatePresence>
         {openSidebar && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 0.2 } }}
               className="w-full pl-5"
            >
               <div
                  className="p-5 rounded-lg text-center"
                  style={{ backgroundColor: themeColor }}
               >
                  Create a list to start saving your favorite Movies and TV
                  Series.
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
