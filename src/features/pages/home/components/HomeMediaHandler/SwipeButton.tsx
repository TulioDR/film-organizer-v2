import { motion, useAnimate } from "framer-motion";
import React, { useState } from "react";

type Props = {
   icon: string;
   onClick: () => void;
};

export default function SwipeButton({ icon, onClick }: Props) {
   const [scope, animate] = useAnimate();
   const [isAnimating, setIsAnimating] = useState(false);

   const handleClick = async () => {
      onClick();

      setIsAnimating(true);
      const { current } = scope;
      const DURATION = 0.5;
      await animate(
         current,
         { pathLength: 1 },
         { duration: DURATION, ease: "easeIn" },
      );
      await animate(current, { rotateX: 180 }, { duration: 0 });
      await animate(
         current,
         { pathLength: 0 },
         { duration: DURATION, ease: "easeOut" },
      );
      await animate(current, { rotateX: 0 }, { duration: 0 });
      setIsAnimating(false);
   };

   return (
      <div className="h-full aspect-square relative">
         <motion.button
            onClick={isAnimating ? undefined : handleClick}
            className={`h-full aspect-square rounded-full border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black flex items-center justify-center 
               ${isAnimating ? "bg-black dark:bg-white text-white dark:text-black" : ""}
            `}
         >
            <span className="material-symbols-outlined !text-3xl">{icon}</span>
         </motion.button>
         <div className={`absolute inset-0 pointer-events-none`}>
            <svg className="w-full h-full overflow-visible p-px">
               <motion.circle
                  ref={scope}
                  r="50%"
                  cx="50%"
                  cy="50%"
                  className="stroke-accent fill-transparent"
                  strokeWidth={4}
                  initial={{ pathLength: 0 }}
               />
            </svg>
         </div>
      </div>
   );
}
