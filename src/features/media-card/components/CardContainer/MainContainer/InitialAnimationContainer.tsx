import React, { useEffect, useState } from "react";
import { motion, useIsPresent } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function InitialAnimationContainer({ children }: Props) {
   const isPresent = useIsPresent();
   // const [isAnimating, setIsAnimating] = useState(true);
   const [isAnimating, setIsAnimating] = useState(false);

   const onAnimationComplete = (e: any) => {
      if (e === "animate") setIsAnimating(false);
   };
   useEffect(() => {
      if (!isPresent) setIsAnimating(true);
   }, [isPresent]);

   const DURATION = 0.3;
   const item1 = {
      initial: { y: "-101%" },
      animate: { y: "0%" },
      exit: { y: "-101%" },
   };
   const item2 = {
      initial: { y: "101%" },
      animate: { y: "0%" },
      exit: { y: "101%" },
   };

   // ${isAnimating ? "overflow-hidden pointer-events-none" : ""}
   return (
      <motion.div
         className={`h-full w-full 
         ${isAnimating ? "overflow-hidden pointer-events-none" : ""}
         `}
      >
         <motion.div
            variants={item1}
            transition={{ duration: DURATION }}
            onAnimationComplete={onAnimationComplete}
            className={`h-full w-full 
               ${isAnimating ? "overflow-hidden" : ""}
            `}
         >
            <motion.div
               variants={item2}
               transition={{ duration: DURATION }}
               className={`h-full w-full 
                  ${isAnimating ? "overflow-hidden" : ""}
               `}
            >
               {children}
            </motion.div>
         </motion.div>
      </motion.div>
   );
}
