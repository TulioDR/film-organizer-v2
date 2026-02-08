import React from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { ROTATE_DURATION } from "@/features/media-card/constants/ANIMATIONS_DURATIONS";

type Props = {
   children: React.ReactNode;
   layoutId: string;
};

export default function TransitionContainer({ children, layoutId }: Props) {
   return createPortal(
      <motion.div
         layout
         layoutRoot
         className="fixed top-0 left-0 pl-32 flex items-center h-[100svh] z-50 pointer-events-none"
      >
         <div className="aspect-[2/3] bg-red-500 w-[410px]">
            <motion.div
               layoutId={layoutId}
               transition={{ duration: ROTATE_DURATION }}
               className="w-full [perspective:2000px] h-full"
            >
               <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 360 }}
                  transition={{ duration: ROTATE_DURATION }}
                  className="relative [transform-style:preserve-3d] w-full h-full"
               >
                  {children}
               </motion.div>
            </motion.div>
         </div>
      </motion.div>,
      document.body,
   );
}
