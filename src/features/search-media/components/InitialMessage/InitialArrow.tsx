import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function InitialArrow({}: Props) {
   return (
      <div className="flex-1 h-0.5 relative">
         <motion.div
            initial={{ width: 0 }}
            className="h-full bg-white arrow-body"
         />
         <div className="absolute top-0 right-0 w-8 h-0.5 origin-right rotate-45 flex justify-end">
            <motion.div
               initial={{ width: 0 }}
               className="h-full bg-white arrow-head"
            />
         </div>
      </div>
   );
}
