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
      <motion.div className="fixed top-0 left-0 h-[100svh] w-full flex justify-start px-32 overflow-hidden">
         <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1 }}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            className="w-1/2 flex gap-4 h-full"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
