import React from "react";
import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
};

export default function CloseSearch({ onClick }: Props) {
   return (
      <motion.button
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.2 }}
         onClick={onClick}
         className={`h-full aspect-square rounded-2xl flex items-center justify-center
         bg-white dark:bg-black
         border border-border-light dark:border-border-dark
         hover:border-primary-dark dark:hover:border-primary-light
         active:border-primary-dark dark:active:border-primary-light
      `}
      >
         <span className="material-symbols-outlined">arrow_back</span>
      </motion.button>
   );
}
