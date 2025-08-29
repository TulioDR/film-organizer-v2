import React from "react";
import { motion, useAnimate } from "framer-motion";
import { ROTATE_DURATION } from "@/features/media-card/constants/ANIMATIONS_DURATIONS";
import InitialAnimationContainer from "./InitialAnimationContainer";

type Props = {
   layoutId: string;
   children: React.ReactNode;
};

export default function MainContainer({ layoutId, children }: Props) {
   const [scope, animate] = useAnimate();

   const ROTATE_CLASS = "rotate-card";

   const onHoverStart = async () => {
      animate(
         "." + ROTATE_CLASS,
         { rotateY: 180 },
         { duration: ROTATE_DURATION }
      );
   };
   const onHoverEnd = async () => {
      await animate(
         "." + ROTATE_CLASS,
         { rotateY: 360 },
         { duration: ROTATE_DURATION }
      );
      animate("." + ROTATE_CLASS, { rotateY: 0 }, { duration: 0 });
   };

   return (
      <InitialAnimationContainer>
         <motion.div
            layoutId={layoutId}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            ref={scope}
            className="h-full w-full [perspective:2000px]"
         >
            <motion.div
               className={`[transform-style:preserve-3d] w-full h-full relative ${ROTATE_CLASS}`}
            >
               {children}
            </motion.div>
         </motion.div>
      </InitialAnimationContainer>
   );
}
