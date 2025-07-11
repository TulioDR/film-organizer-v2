import React, { useState } from "react";
import { motion } from "framer-motion";
import { itemVariant } from "@/animations/revealVariants";

type Props = {
   children: React.ReactNode;
   buttonRef: React.RefObject<HTMLDivElement>;
};

export default function Container({ children, buttonRef }: Props) {
   const [hasOverflow, setHasOverflow] = useState(false);
   const onAnimationComplete = (e: any) => {
      if (e === "animate") setHasOverflow(true);
   };

   return (
      <div
         className={`w-16 aspect-square ${
            hasOverflow ? "" : "overflow-hidden"
         }`}
      >
         <motion.div
            variants={itemVariant}
            ref={buttonRef}
            onAnimationComplete={onAnimationComplete}
            className="w-10 sm:w-16 aspect-square"
         >
            {children}
         </motion.div>
      </div>
   );
}
