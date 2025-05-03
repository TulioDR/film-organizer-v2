import React from "react";
import { motion } from "framer-motion";

type Props = {
   title: string;
};

export default function Title({ title }: Props) {
   const item = {
      initial: { y: "100%", opacity: 0 },
      animate: {
         x: 0,
         opacity: 1,
         transition: { duration: 0.4, ease: "easeInOut" },
      },
      exit: {
         y: "-100%",
         opacity: 0,
         transition: { duration: 0.4, ease: "easeInOut" },
      },
   };
   return (
      <div className="overflow-hidden mb-8 ">
         <motion.h2
            variants={item}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`text-4xl font-title text-center tracking-wide uppercase text-white`}
         >
            {title}
         </motion.h2>
      </div>
   );
}
