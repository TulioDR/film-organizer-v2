import React from "react";
import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
   isSelected: boolean;
   text: string;
};

export default function SearchTypeButton({ onClick, isSelected, text }: Props) {
   return (
      <button
         onClick={onClick}
         className={`uppercase flex items-center gap-1 tracking-widest ${
            isSelected
               ? "text-black dark:text-white"
               : "text-black/50 dark:text-white/50"
         }`}
      >
         <div className="h-4 aspect-square">
            {isSelected && (
               <motion.div
                  layoutId="search-type-active-indicator"
                  transition={{ duration: 0.6, type: "spring" }}
                  className="h-full w-full bg-accent"
               ></motion.div>
            )}
         </div>
         <span className="translate-y-px">{text}</span>
      </button>
   );
}
