import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function FixedContainer({ children }: Props) {
   return (
      <motion.div
         layout
         layoutRoot
         id="main-layout"
         className="pointer-events-none fixed top-0 left-0 h-[100svh] w-full z-10"
      >
         {children}
      </motion.div>
   );
}
