import { motion, useAnimate } from "framer-motion";
import React, { useState } from "react";
import useHomeContext from "../../../context/HomeContext";
import { HOME_DURATION } from "../../../constants/ANIMATIONS";
import SelectedAnimation from "./SelectedAnimation";

type Props = {
   icon: string;
   onClick: () => void;
};

export default function NavigationButton({ icon, onClick }: Props) {
   const { isAnimating, stopAutoPlay } = useHomeContext();
   const [scope, animate] = useAnimate();
   const [startLoadingAnimation, setStartLoadingAnimation] = useState(false);

   const handleClick = async () => {
      stopAutoPlay();
      onClick();
      setStartLoadingAnimation(true);
      const { current } = scope;
      const DURATION = HOME_DURATION / 2;
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
      setStartLoadingAnimation(false);
   };

   return (
      <div className="h-full aspect-square relative">
         <motion.button
            onClick={
               isAnimating || startLoadingAnimation ? undefined : handleClick
            }
            className={`h-full aspect-square rounded-full border-2 border-black dark:border-white text-black dark:text-white flex items-center justify-center 
               ${startLoadingAnimation ? "bg-black dark:bg-white text-white dark:text-black" : "hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"}
            `}
         >
            <span className="material-symbols-outlined !text-3xl">{icon}</span>
         </motion.button>
         <SelectedAnimation scope={scope} />
      </div>
   );
}
