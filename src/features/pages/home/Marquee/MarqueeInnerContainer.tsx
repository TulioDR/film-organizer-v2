import React from "react";
import { motion, MotionValue } from "framer-motion";

type Props = {
   y?: MotionValue<string>;
   className: string;
   children: React.ReactNode;
};

export default function MarqueeInnerContainer({
   y,
   className,
   children,
}: Props) {
   const GAP = 16;
   return (
      <motion.div
         style={{
            y,
            gap: GAP,
            paddingTop: GAP / 2,
            paddingBottom: GAP / 2,
         }}
         className={`w-full flex flex-col absolute ${className}`}
      >
         {children}
      </motion.div>
   );
}
