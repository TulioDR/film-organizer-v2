import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function InitialText({ children }: Props) {
   return (
      <div className="overflow-hidden text-center">
         <motion.div initial={{ y: "100%" }} className="item">
            {children}
         </motion.div>
      </div>
   );
}
