import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function ActiveMarkContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0 }}
         transition={{ duration: 0.3 }}
         className="absolute top-0 left-0 w-full h-full"
      >
         {children}
      </motion.div>
   );
}
