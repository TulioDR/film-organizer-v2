import Responsive from "@/common/components/Responsive";
import { LG_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import { motion } from "framer-motion";

export default function ScrollDownIcon() {
   const ScrollIcon = () => {
      return (
         <div className="flex flex-col items-center">
            <div className="border border-light-1 dark:border-dark-1 sm:border-dark-1 h-14 w-8 rounded-xl pt-3">
               <div className="mx-auto animate-bounce bg-light-1 dark:bg-dark-1 sm:bg-dark-1 w-1 h-4 rounded-full"></div>
            </div>
            <span className="material-symbols-outlined !text-light-1 dark:!text-dark-1 sm:!text-dark-1">
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
            className="absolute bottom-32 left-0 w-full flex justify-end pointer-events-none"
         >
            <ScrollIcon />
         </motion.div>
      </Responsive>
   );
}
