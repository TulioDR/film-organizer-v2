import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isOpen: boolean;
};

export default function PaginationContainer({ children, isOpen }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
         className="h-12 xl:h-16 fixed flex bottom-14 mb-1 xl:mb-0 xl:bottom-4 left-0 w-full pointer-events-none"
      >
         <motion.div
            initial={false}
            animate={{ width: isOpen ? "426px" : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full hidden xl:block"
         />
         <motion.div className="flex flex-1 gap-1 lg:gap-2 xl:gap-4 justify-center w-full">
            {children}
         </motion.div>
      </motion.div>
   );
}
