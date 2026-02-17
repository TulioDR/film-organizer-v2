import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   className?: string;
};

export default function Container({ children, className }: Props) {
   return (
      <motion.div
         className={`w-full flex flex-col gap-4 p-4 xl:p-8 rounded-2xl duration-200 bg-primary-light dark:bg-primary-dark border-border-width border-border-light dark:border-border-dark ${className}`}
      >
         {children}
      </motion.div>
   );
}
