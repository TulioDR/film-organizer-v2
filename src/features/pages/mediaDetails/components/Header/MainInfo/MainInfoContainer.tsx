import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/animations/StaggerCards";

type Props = {
   children: React.ReactNode;
};

export default function MainInfoContainer({ children }: Props) {
   return (
      <div className="flex-1 overflow-hidden h-full md:pl-10">
         <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full flex-col justify-center gap-5 text-white overflow-hidden hidden md:flex"
         >
            {children}
         </motion.div>
      </div>
   );
}
