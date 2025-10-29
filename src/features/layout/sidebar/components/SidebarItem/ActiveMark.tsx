import React from "react";
import { motion } from "framer-motion";

type Props = {
   layoutId: string;
};

export default function ActiveMark({ layoutId }: Props) {
   return (
      <motion.div
         layoutId={layoutId}
         style={{ borderRadius: "5px" }}
         className="w-full h-full pointer-events-none bg-accent"
         transition={{ duration: 0.6, type: "spring" }}
      />
   );
}
