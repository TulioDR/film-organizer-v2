import React from "react";
import { motion, Variants } from "framer-motion";
import useStopLoader from "@/features/layout/loader/hooks/useStopLoader";

type Props = {
   index: number;
   children: React.ReactNode;
   clockwise: boolean;
};

export default function AnimationContainer({
   index,
   children,
   clockwise,
}: Props) {
   useStopLoader();

   const getVariants = (multiplier: number): Variants => {
      const isHorizontal = index === 1 || index === 2;
      const reverse = index === 2 || index === 3;
      const directionMultiplier = (reverse ? -1 : 1) * (clockwise ? 1 : -1);
      const n = multiplier * directionMultiplier;

      return {
         initial: isHorizontal ? { x: `${n * 100}%` } : { y: `${n * -100}%` },
         animate: isHorizontal ? { x: 0 } : { y: 0 },
         exit: isHorizontal ? { x: `${n * 100}%` } : { y: `${n * -100}%` },
      };
   };

   const DURATION = 0.4;
   const outerVariants = getVariants(1);
   const innerVariants = getVariants(-1);
   return (
      <motion.div
         variants={outerVariants}
         initial="initial"
         animate="animate"
         exit="exit"
         transition={{ duration: DURATION }}
         className="w-full h-full overflow-hidden"
      >
         <motion.div
            variants={innerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: DURATION }}
            className="w-full h-full overflow-hidden"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
