import React, { useEffect, useRef, useState } from "react";
import { useAnimate, motion } from "framer-motion";
import { ROTATE_DURATION } from "@/features/media-card/constants/ANIMATIONS_DURATIONS";

type Props = {
   layoutId: string;
   children: React.ReactNode;
   isLoading: boolean;
};

export default function MainContainer({
   layoutId,
   children,
   isLoading,
}: Props) {
   const [scope, animate] = useAnimate();
   const ROTATE_CLASS = "rotate-card";

   const [isHovered, setIsHovered] = useState(false);
   const isFirstRender = useRef(true);

   useEffect(() => {
      if (isFirstRender.current) {
         isFirstRender.current = false;
         return;
      }
      const animations = async () => {
         if (isHovered) {
            animate(
               "." + ROTATE_CLASS,
               { rotateY: 180 },
               { duration: ROTATE_DURATION },
            );
         } else {
            await animate(
               "." + ROTATE_CLASS,
               { rotateY: 360 },
               { duration: ROTATE_DURATION },
            );
            animate("." + ROTATE_CLASS, { rotateY: 0 }, { duration: 0 });
         }
      };
      animations();
   }, [isHovered]);

   const onHoverStart = async () => {
      setIsHovered(true);
   };
   const onHoverEnd = async () => {
      if (isLoading) return;
      setIsHovered(false);
   };

   return (
      <motion.div
         ref={scope}
         tabIndex={0}
         layoutId={layoutId}
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         onFocus={onHoverStart}
         onBlur={onHoverEnd}
         className="h-full w-full [perspective:2000px]"
      >
         <motion.div
            className={`[transform-style:preserve-3d] w-full h-full relative ${ROTATE_CLASS}`}
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
