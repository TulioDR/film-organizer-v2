import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function MobileCardsGrid({ children }: Props) {
   const container = {
      initial: {},
      animate: {
         transition: {
            staggerChildren: 0.08,
         },
      },
      exit: {
         transition: {
            staggerChildren: 0.04,
            staggerDirection: -1,
         },
      },
   };

   return (
      <motion.div
         variants={container}
         initial="initial"
         animate="animate"
         exit="exit"
         className={`gap-4 grid w-full mt-20 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4`}
      >
         {children}
      </motion.div>
   );
}
