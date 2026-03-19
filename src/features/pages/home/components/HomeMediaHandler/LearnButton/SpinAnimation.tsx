import React from "react";
import { motion } from "framer-motion";

type Props = {
   scope: React.RefObject<SVGCircleElement>;
};

export default function SpinAnimation({ scope }: Props) {
   return (
      <div className={`absolute inset-0 pointer-events-none`}>
         <svg className="w-full h-full overflow-visible">
            <motion.circle
               ref={scope}
               r="50%"
               cx="50%"
               cy="50%"
               className="stroke-accent fill-transparent stroke-[8px]"
               initial={{ pathLength: 0 }}
            />
         </svg>
      </div>
   );
}
