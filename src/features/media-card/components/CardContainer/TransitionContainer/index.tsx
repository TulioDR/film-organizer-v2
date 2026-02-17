import React from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { ROTATE_DURATION } from "@/features/media-card/constants/ANIMATIONS_DURATIONS";

type Props = {
   children: React.ReactNode;
   layoutId: string;
   onAnimationComplete: () => void;
};

export default function TransitionContainer({
   children,
   layoutId,
   onAnimationComplete,
}: Props) {
   const DURATION = ROTATE_DURATION * 2;
   return createPortal(
      <motion.div
         layout
         layoutRoot
         className="fixed top-0 left-0 pl-32 flex items-center h-[100svh] z-50 pointer-events-none"
      >
         <motion.div
            layoutId={layoutId}
            transition={{ duration: DURATION }}
            className="[perspective:2000px] aspect-[2/3] w-[410px]"
         >
            <motion.div
               initial={{ rotateY: 180 }}
               animate={{ rotateY: 360 }}
               transition={{ duration: DURATION }}
               onAnimationComplete={onAnimationComplete}
               className="relative [transform-style:preserve-3d] w-full h-full transition-container"
            >
               {children}
            </motion.div>
         </motion.div>
      </motion.div>,
      document.body,
   );
}
