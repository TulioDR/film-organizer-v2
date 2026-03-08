import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function TickerContainer({ children }: Props) {
   return (
      <motion.div className="flex gap-1 flex-1 h-full overflow-hidden">
         {children}
      </motion.div>
   );
}
