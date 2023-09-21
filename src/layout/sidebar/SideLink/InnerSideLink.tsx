import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   icon: string;
   text: string;
   isSelected: boolean;
};

export default function InnerSideLink({ icon, text, isSelected }: Props) {
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);
   return (
      <div className="flex items-center gap-3 h-9">
         <span
            style={isSelected ? { fontVariationSettings: `"FILL" 1` } : {}}
            className="material-symbols-outlined !w-9 !text-center !flex-shrink-0"
         >
            {icon}
         </span>
         <AnimatePresence>
            {expandSidebar && (
               <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
               >
                  {text}
               </motion.span>
            )}
         </AnimatePresence>
      </div>
   );
}
