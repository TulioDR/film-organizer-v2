import React from "react";
import { motion } from "framer-motion";
import { itemVariant } from "@/animations/revealVariants";

type Props = {
   children: React.ReactNode;
};

export default function CardContainer({ children }: Props) {
   return (
      <div className="overflow-hidden h-full">
         <motion.div
            variants={itemVariant}
            className="rounded-md bg-gray-200 text-black px-4 h-full flex items-center"
         >
            {children}
         </motion.div>
      </div>
   );
}
