import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function MediaFiltersContainer({ children }: Props) {
   return (
      <div className="fixed top-0 left-0 px-4 lg:px-32 py-14 xl:pt-44 xl:pb-4 h-[100svh] w-full pointer-events-none z-20">
         <div className="w-full h-full relative py-1 xl:py-0">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2 }}
               className="relative w-full h-full"
            >
               {children}
            </motion.div>
         </div>
      </div>
   );
}
