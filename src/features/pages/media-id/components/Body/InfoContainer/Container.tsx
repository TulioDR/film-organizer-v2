import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   className?: string;
};

export default function Container({ children, className }: Props) {
   return (
      <motion.div
         className={`w-full flex flex-col gap-4 p-4 xl:p-8 rounded-2xl duration-200 bg-[#F6EEE3] dark:bg-[#1F1E1C] border-border-width border-border-light dark:border-border-dark ${className}`}
      >
         {children}
      </motion.div>
   );
}
