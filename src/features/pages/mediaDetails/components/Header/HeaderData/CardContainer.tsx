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
            className={`rounded-md bg-gray-200 text-black px-4 h-full flex items-center ${className}`}
         >
            {children}
         </motion.div>
      </div>
   );
}
