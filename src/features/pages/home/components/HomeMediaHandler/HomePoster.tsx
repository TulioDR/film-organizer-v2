import React, { useEffect } from "react";
import {
   AnimationOptions,
   motion,
   useAnimate,
   usePresence,
} from "framer-motion";
import Poster from "@/common/components/Poster";

type Props = {
   frontPath: string;
   isForward: boolean;
};

export default function HomePoster({ frontPath, isForward }: Props) {
   const [scope, animate] = useAnimate();
   const [isPresent, safeToRemove] = usePresence();

   const TRANSITION: AnimationOptions = { duration: 1, ease: "easeInOut" };

   useEffect(() => {
      if (isPresent) return;
      const exitAnimation = async () => {
         await animate(
            scope.current,
            { x: isForward ? "-100%" : "100%" },
            TRANSITION,
         );
         safeToRemove();
      };
      exitAnimation();
   }, [isForward, isPresent]);

   return (
      <motion.div
         ref={scope}
         initial={{ x: isForward ? "100%" : "-100%" }}
         animate={{ x: 0, transition: TRANSITION }}
         className="w-full h-full absolute top-0 left-0"
      >
         <Poster alt="Featured Poster" posterPath={frontPath} size="md" />
      </motion.div>
   );
}
