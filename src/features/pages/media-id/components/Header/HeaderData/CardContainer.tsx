import React from "react";
import { motion } from "framer-motion";
import { itemVariant } from "@/common/animations/revealVariants";

type Props = {
   children: React.ReactNode;
   className?: string;
};

export default function CardContainer({ children, className = "" }: Props) {
   return (
      <div className="overflow-hidden h-full">
         <motion.div
            variants={itemVariant}
            className={`rounded-md bg-primary-light dark:bg-primary-dark border border-border-light dark:border-border-dark text-black dark:text-white px-4 h-full flex items-center ${className}`}
         >
            {children}
         </motion.div>
      </div>
   );
}
