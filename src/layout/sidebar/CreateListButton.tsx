import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

type Props = {
   onClick: () => void;
};

export default function CreateListButton({ onClick }: Props) {
   const { themeColor } = useSelector((state: any) => state.theme);
   const { expandSidebar } = useSelector((state: any) => state.sidebar);

   return (
      <button
         onClick={onClick}
         style={{ backgroundColor: themeColor }}
         className="h-9 grid place-content-center w-full truncate rounded-lg"
      >
         <AnimatePresence mode="wait">
            {expandSidebar ? (
               <motion.span
                  initial={{ opacity: 0 }}
                  animate={{
                     opacity: 1,
                     transition: { duration: 0.1, delay: 0.1 },
                  }}
                  key="text"
                  className="text-white"
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
   );
}
