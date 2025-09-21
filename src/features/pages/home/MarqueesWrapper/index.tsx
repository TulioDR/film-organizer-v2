import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   onHoverStart: () => void;
   onHoverEnd: () => void;
};

export default function MarqueesWrapper({
   children,
   onHoverStart,
   onHoverEnd,
}: Props) {
   return (
      <motion.div className="fixed inset-0 flex justify-start overflow-hidden px-4 lg:px-24 xl:px-32 pointer-events-none lg:pointer-events-auto brightness-50 lg:brightness-100">
         <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1 }}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            className="w-full lg:w-2/3 xl:w-1/2 flex gap-1 sm:gap-4 h-full"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
