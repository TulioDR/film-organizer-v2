import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isOpen: boolean;
};

export default function PaginationContainer({ children, isOpen }: Props) {
   return (
      <motion.div className="h-16 md:absolute flex bottom-0 left-0 md:w-full z-20 pointer-events-none">
         <motion.div
            animate={{ width: isOpen ? "calc(20vw + 32px)" : "0vw" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full"
         />
         <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex-1 flex gap-1 md:gap-4 justify-center w-full"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
