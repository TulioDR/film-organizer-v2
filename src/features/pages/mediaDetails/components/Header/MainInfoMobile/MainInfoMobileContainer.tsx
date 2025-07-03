import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function MainInfoMobileContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         className="w-full flex flex-col items-center gap-3 md:hidden pb-5"
      >
         {children}
      </motion.div>
   );
}
