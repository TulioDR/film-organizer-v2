import React from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { ROTATE_DURATION } from "@/features/media-card/constants/ANIMATIONS_DURATIONS";

type Props = {
   children: React.ReactNode;
   layoutId: string;
   scale: number;
   height: number;
   container: HTMLElement;
};

export default function TransitionContainer({
   children,
   layoutId,
   scale,
   height,
   container,
}: Props) {
   return createPortal(
      <motion.div
         layoutId={layoutId}
         style={{ scale: scale, height: height }}
         transition={{ duration: ROTATE_DURATION }}
         className="aspect-[2/3] [perspective:2000px]"
      >
         <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 360 }}
            transition={{ duration: ROTATE_DURATION }}
            className="relative [transform-style:preserve-3d] w-full h-full"
         >
            {children}
         </motion.div>
      </motion.div>,
      container
   );
}
