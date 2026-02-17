import cardAnimation from "@/features/pages/media-type/animations/cardAnimation";

import { motion, useAnimate, usePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { ROTATE_DURATION } from "../../constants/ANIMATIONS_DURATIONS";

type Props = {
   children: React.ReactNode;
   direction?: "prev" | "next" | "default";
   isLoading: boolean;
};

export default function CardContainer({
   children,
   direction,
   isLoading,
}: Props) {
   const lenis = useLenis();
   const ROTATE_CLASS = "rotate-card";
   const [scope, animate] = useAnimate();
   const [isPresent, safeToRemove] = usePresence();
   const [showTransition, setShowTransition] = useState(false);

   const TRANSITION_DURATION = ROTATE_DURATION * 2;

   useEffect(() => {
      if (isPresent) return;
      if (isLoading) {
         const exitAnimation = async () => {
            await animate(
               "." + ROTATE_CLASS,
               { rotateY: 360 },
               { duration: TRANSITION_DURATION },
            );
            safeToRemove();
            lenis!.scrollTo("top", { immediate: true });
         };
         setShowTransition(true);
         exitAnimation();
         return;
      }
      safeToRemove();
   }, [isPresent, isLoading]);

   const onHoverStart = async () => {
      animate(
         "." + ROTATE_CLASS,
         { rotateY: 180 },
         { duration: ROTATE_DURATION },
      );
   };
   const onHoverEnd = async () => {
      if (isLoading) return;
      await animate(
         "." + ROTATE_CLASS,
         { rotateY: 360 },
         { duration: ROTATE_DURATION },
      );
      animate("." + ROTATE_CLASS, { rotateY: 0 }, { duration: 0 });
   };

   return (
      <motion.div
         ref={scope}
         initial={direction ? cardAnimation[direction].initial : false}
         className={`aspect-[2/3] w-full ${isLoading ? "pointer-events-none" : "media-card"}`}
      >
         <div
            className={`${showTransition ? "fixed top-0 left-0 pl-32 flex items-center h-[100svh] z-50" : "h-full w-full"}`}
         >
            <motion.div
               layout
               transition={{ layout: { duration: TRANSITION_DURATION } }}
               onHoverStart={onHoverStart}
               onHoverEnd={onHoverEnd}
               className={`[perspective:2000px] aspect-[2/3] ${showTransition ? "w-[410px]" : "w-full"}`}
            >
               <motion.div
                  className={`relative [transform-style:preserve-3d] w-full h-full ${ROTATE_CLASS}`}
               >
                  {children}
               </motion.div>
            </motion.div>
         </div>
      </motion.div>
   );
}
