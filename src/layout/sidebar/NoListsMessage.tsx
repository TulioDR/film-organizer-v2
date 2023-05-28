import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

export default function NoListsMessage({}: Props) {
   const { themeColor } = useSelector((state: any) => state.theme);
   const { expandSidebar } = useSelector((state: any) => state.sidebar);

   return (
      <AnimatePresence>
         {expandSidebar && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 0.2 } }}
               className="w-full pl-5 overflow-hidden"
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
