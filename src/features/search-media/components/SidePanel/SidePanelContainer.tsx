import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isOpen: boolean;
   onAnimationStart: (x: any) => void;
   onAnimationComplete: (x: any) => void;
};

export default function SidePanelContainer({
   children,
   isOpen,
   onAnimationStart,
   onAnimationComplete,
}: Props) {
   return (
      <div className="w-full h-full overflow-hidden">
         <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? "0%" : "100%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            onAnimationStart={onAnimationStart}
            onAnimationComplete={onAnimationComplete}
            className="w-full h-full overflow-hidden"
         >
            <motion.div
               initial={{ x: "-100%" }}
               animate={{ x: isOpen ? "0%" : "-100%" }}
               exit={{ x: "-100%" }}
               transition={{ duration: 0.4 }}
               className="w-full h-full pointer-events-auto overflow-hidden"
            >
               {children}
            </motion.div>
         </motion.div>
      </div>
   );
}
