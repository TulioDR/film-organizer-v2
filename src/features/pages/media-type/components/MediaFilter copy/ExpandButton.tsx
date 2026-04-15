import React from "react";
import { motion } from "framer-motion";

type Props = {
   onClick?: () => void;
   isExpanded: boolean;
};

export default function ExpandButton({ onClick, isExpanded }: Props) {
   return (
      <div
         onClick={onClick}
         className="bg-black dark:bg-white text-white dark:text-black h-full w-8 flex items-center justify-center hover:bg-gray-800 cursor-pointer border-l border-border-light dark:border-border-dark"
      >
         <motion.div style={{ rotate: isExpanded ? "180deg" : "0deg" }}>
            <span className="material-symbols-outlined !text-4xl">
               chevron_right
            </span>
         </motion.div>
      </div>
   );
}
