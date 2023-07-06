import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import StoreModel from "@/models/StoreModel";

type Props = {};

export default function SideNoListsMessage({}: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);

   return (
      <AnimatePresence>
         {expandSidebar && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 0.2 } }}
               className="w-full pl-10 overflow-hidden text-sm"
            >
               <div
                  className="px-5 rounded-lg text-center h-[100px] flex items-center"
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
