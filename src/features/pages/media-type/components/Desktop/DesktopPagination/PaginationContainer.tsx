import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isOpen: boolean;
};

export default function PaginationContainer({ children, isOpen }: Props) {
   return (
      <motion.div
         initial={{ y: "100%", opacity: 0 }}
         animate={{ y: "0%", opacity: 1 }}
         exit={{ y: "100%", opacity: 0 }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
         className="h-16 fixed flex bottom-4 left-0 w-full pointer-events-none"
      >
         <motion.div
            initial={{ width: "426px" }}
            animate={{
               width: isOpen ? "426px" : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full"
         />
         <motion.div className="flex flex-1 gap-1 md:gap-4 justify-center w-full">
            {children}
         </motion.div>
      </motion.div>
   );
}
