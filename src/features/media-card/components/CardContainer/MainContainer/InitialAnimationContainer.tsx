import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function InitialAnimationContainer({ children }: Props) {
   const variants = {
      initial: { opacity: 0, y: "50%" },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: "50%" },
   };

   return (
      <motion.div
         variants={variants}
         transition={{ duration: 0.3 }}
         className={`h-full w-full`}
      >
         {children}
      </motion.div>
   );
}
