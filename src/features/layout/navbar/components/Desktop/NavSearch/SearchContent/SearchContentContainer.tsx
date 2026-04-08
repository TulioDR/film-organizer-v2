import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function SearchContentContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.2 }}
         className="flex flex-col flex-1 overflow-hidden w-full h-[50vh] rounded-2xl bg-white dark:bg-black border border-border-light dark:border-border-dark"
      >
         {children}
      </motion.div>
   );
}
