import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function PaginationContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
         className="h-12 xl:h-16 fixed flex bottom-14 xl:bottom-4 mb-1 xl:mb-0 right-4 xl:right-32 pointer-events-none"
      >
         {children}
      </motion.div>
   );
}
