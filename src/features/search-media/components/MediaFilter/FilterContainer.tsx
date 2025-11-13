import React from "react";
import { motion } from "framer-motion";

type Props = {
   isOpen: boolean;
   isExpanded: boolean;
   DURATION: number;
   children: React.ReactNode;
   onAnimationStart: (x: any) => void;
   onAnimationComplete: (x: any) => void;
};

export default function FilterContainer({
   isOpen,
   isExpanded,
   DURATION,
   children,
   onAnimationStart,
   onAnimationComplete,
}: Props) {
   return (
      <motion.div
         onAnimationStart={onAnimationStart}
         onAnimationComplete={onAnimationComplete}
         animate={{
            width: isOpen
               ? isExpanded
                  ? "100%"
                  : "calc(25vw - 2rem)"
               : "64px",
            height: isOpen ? "100%" : "64px",
         }}
         transition={{ duration: DURATION }}
         className={`bg-primary-light dark:bg-primary-dark border-border-width border-border-light dark:border-border-dark shadow-md flex rounded overflow-hidden pointer-events-auto`}
      >
         {children}
      </motion.div>
   );
}
