import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function FixedUIContainer({ children }: Props) {
   return (
      <motion.div
         layout
         layoutRoot
         className="pointer-events-none fixed top-0 left-0 h-[100vh] w-full z-10 p-4 xl:p-8"
      >
         <div id="main-layout" className="w-full h-full relative">
            {children}
         </div>
      </motion.div>
   );
}
