import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function GenresContainer({ children }: Props) {
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
         className="w-full grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8"
      >
         {children}
      </motion.div>
   );
}
