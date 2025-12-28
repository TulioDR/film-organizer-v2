import React from "react";
import { motion } from "framer-motion";

type Props = {
   text: string;
   icon: string | React.ReactNode;
   onRemove?: () => void;
};

export default function PreviewCard({ text, icon, onRemove }: Props) {
   return (
      <motion.div
         layout
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className="bg-white dark:bg-black text-black dark:text-white flex rounded w-40 h-9 border border-border-light dark:border-border-dark overflow-hidden"
      >
         <div className="h-full flex items-center flex-1 pr-2 overflow-hidden">
            <div className="h-full aspect-square flex items-center justify-center">
               {typeof icon === "string" ? (
                  <span className="material-symbols-outlined">{icon}</span>
               ) : (
                  icon
               )}
            </div>
            <div className="flex-1 truncate text-xs overflow-hidden pl-1">
               {text}
            </div>
         </div>
         {onRemove && (
            <button
               onClick={onRemove}
               className="h-full aspect-square hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
               <div className="w-full h-full flex items-center justify-center">
                  <span className="material-symbols-outlined !text-xl">
                     close
                  </span>
               </div>
            </button>
         )}
      </motion.div>
   );
}
