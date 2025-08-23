import React from "react";
import { motion, useAnimate } from "framer-motion";
import { ROTATE_DURATION } from "@/features/media-card/constants/ANIMATIONS_DURATIONS";

type Props = {
   layoutId: string;
   children: React.ReactNode;
};

export default function MainContainer({ layoutId, children }: Props) {
   const [scope, animate] = useAnimate();

   const CLASSNAME = ".rotate-card";

   const onHoverStart = async () => {
      animate(CLASSNAME, { rotateY: 180 }, { duration: ROTATE_DURATION });
   };
   const onHoverEnd = async () => {
      await animate(CLASSNAME, { rotateY: 360 }, { duration: ROTATE_DURATION });
      animate(CLASSNAME, { rotateY: 0 }, { duration: 0 });
   };

   return (
      <motion.div
         layoutId={layoutId}
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         ref={scope}
         className="h-full w-full [perspective:2000px]"
      >
         <motion.div
            className={`relative [transform-style:preserve-3d] w-full h-full rotate-card`}
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
