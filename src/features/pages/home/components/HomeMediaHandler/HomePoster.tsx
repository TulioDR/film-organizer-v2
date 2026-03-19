import React, { useEffect } from "react";
import {
   AnimationOptions,
   motion,
   useAnimate,
   usePresence,
} from "framer-motion";
import Poster from "@/common/components/Poster";
import useHomeContext from "../../context/HomeContext";
import { HOME_TRANSITION } from "../../constants/ANIMATIONS";

type Props = {
   frontPath: string;
};

export default function HomePoster({ frontPath }: Props) {
   const [scope, animate] = useAnimate();
   const [isPresent, safeToRemove] = usePresence();

   const { isForward } = useHomeContext();

   useEffect(() => {
      if (isPresent) return;
      const exitAnimation = async () => {
         await animate(
            scope.current,
            { x: isForward ? "-100%" : "100%" },
            HOME_TRANSITION as AnimationOptions,
         );
         safeToRemove();
      };
      exitAnimation();
   }, [isForward, isPresent]);

   return (
      <motion.div
         ref={scope}
         initial={{ x: isForward ? "100%" : "-100%" }}
         animate={{ x: 0, transition: HOME_TRANSITION }}
         className="w-full h-full absolute top-0 left-0"
      >
         <Poster alt="Featured Poster" posterPath={frontPath} size="md" />
      </motion.div>
   );
}
