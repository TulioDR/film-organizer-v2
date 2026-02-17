import Responsive from "@/common/components/Responsive";
import { LG_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import { motion } from "framer-motion";

export default function ScrollDownIcon() {
   const ScrollIcon = () => {
      return (
         <div className="flex flex-col items-center">
            <div className="border border-black dark:border-white h-14 w-8 rounded-xl pt-3">
               <div className="mx-auto animate-bounce bg-black dark:bg-white w-1 h-4 rounded-full"></div>
            </div>
            <span className="material-symbols-outlined text-black dark:text-white">
               keyboard_arrow_down
            </span>
         </div>
      );
   };

   return (
      <Responsive minWidth={LG_MEDIA_QUERY}>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 left-0 w-full flex justify-center pointer-events-none"
         >
            <ScrollIcon />
         </motion.div>
      </Responsive>
   );
}
