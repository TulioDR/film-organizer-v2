import React from "react";
import { AnimationScope, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   ROTATE_CLASS: string;
   layoutId: string;
   scope: AnimationScope<any>;
   onHoverStart?: () => void;
   onHoverEnd?: () => void;
   onFocus?: () => void;
   onBlur?: () => void;
   tabIndex?: true;
};

export default function InnerMainContainer({
   children,
   ROTATE_CLASS,
   tabIndex,
   layoutId,
   scope,
   onHoverStart,
   onHoverEnd,
   onFocus,
   onBlur,
}: Props) {
   return (
      <motion.div
         tabIndex={tabIndex ? 0 : undefined}
         layoutId={layoutId}
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         onBlur={onBlur}
         onFocus={onFocus}
         ref={scope}
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
