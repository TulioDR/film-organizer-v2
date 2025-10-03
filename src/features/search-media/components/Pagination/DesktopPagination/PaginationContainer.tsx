import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function PaginationContainer({ children }: Props) {
   return (
      <motion.div className="h-16 md:absolute bottom-0 left-0 md:w-full z-20 pointer-events-none overflow-hidden">
         <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full flex gap-1 md:gap-4 justify-center w-full"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
