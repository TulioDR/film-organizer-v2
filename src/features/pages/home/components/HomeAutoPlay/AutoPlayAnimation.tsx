import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function AutoPlayAnimation({}: Props) {
   return (
      <div className="absolute inset-0">
         <svg className="w-full h-full overflow-visible p-0.5">
            <motion.circle
               r="50%"
               cx="50%"
               cy="50%"
               className="stroke-accent fill-transparent"
               strokeWidth={4}
               initial={{ pathLength: 0 }}
               animate={{
                  rotate: 360,
                  pathLength: 0.65,
                  transition: {
                     rotate: { repeat: Infinity, duration: 3, ease: "linear" },
                     pathLength: { duration: 0.5 },
                  },
               }}
               exit={{ pathLength: 0, transition: { duration: 0.5 } }}
            />
         </svg>
      </div>
   );
}
