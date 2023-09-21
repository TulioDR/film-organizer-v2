import React from "react";
import { motion } from "framer-motion";
type Props = {
   isSelected: boolean;
   onTap: () => void;
};

export default function DeleteSelector({ isSelected, onTap }: Props) {
   return (
      <div
         className={`absolute top-0 left-0 w-full h-full rounded-xl cursor-pointer overflow-hidden ${
            isSelected ? "border-4 border-red-700" : ""
         }`}
      >
         <div
            className={`bg-black duration-200 w-full h-full ${
               isSelected ? "bg-opacity-50" : "bg-opacity-0 hover:bg-opacity-50"
            }`}
         >
            <motion.div
               onTap={onTap}
               initial={{ opacity: 0 }}
               animate={{
                  opacity: isSelected ? 1 : 0,
                  scale: isSelected ? 1.1 : 0.8,
               }}
               whileTap={{ scale: 0.8 }}
               whileHover={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.2 }}
               className="h-full w-full grid place-content-center select-none"
            >
               <span className="material-symbols-outlined text-9xl text-red-700 ">
                  delete
               </span>
            </motion.div>
         </div>
      </div>
   );
}
