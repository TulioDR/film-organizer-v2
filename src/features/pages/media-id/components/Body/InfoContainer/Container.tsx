import React from "react";
import { motion } from "framer-motion";
import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   children: React.ReactNode;
   className?: string;
};

export default function Container({ children, className }: Props) {
   return (
      <motion.div
         style={{ borderRadius: STANDARD_RADIUS }}
         className={`w-full flex flex-col gap-4 p-4 xl:p-8 bg-primary-light dark:bg-primary-dark border border-border-light dark:border-border-dark ${className}`}
      >
         {children}
      </motion.div>
   );
}
