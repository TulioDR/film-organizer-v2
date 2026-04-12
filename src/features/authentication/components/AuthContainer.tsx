import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function AuthContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ scale: 0.9 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0.9 }}
         transition={{ duration: 0.2 }}
         className="h-[100svh] pt-14 pb-14 lg:pb-0 lg:pt-20 w-full"
      >
         <div className="w-full h-full py-4 lg:py-8 px-4 lg:px-32 relative overflow-hidden">
            <div className="w-full h-full flex relative overflow-hidden">
               {children}
            </div>
         </div>
      </motion.div>
   );
}
