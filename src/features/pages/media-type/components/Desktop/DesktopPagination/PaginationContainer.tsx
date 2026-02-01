import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isOpen: boolean;
};

export default function PaginationContainer({ children, isOpen }: Props) {
   return (
      <motion.div className="h-16 xl:absolute flex bottom-0 left-0 w-full z-50 pointer-events-none">
         <motion.div
            animate={{
               width: isOpen ? "426px" : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full"
         />
         <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-1 gap-1 md:gap-4 justify-center w-full"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
