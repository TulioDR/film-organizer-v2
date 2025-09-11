import React, { useEffect } from "react";
import { motion, useAnimate, usePresence } from "framer-motion";
import InitialText from "./InitialText";
import InitialArrow from "./InitialArrow";

type Props = {
   setInitialOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function InitialMessage({ setInitialOpen }: Props) {
   const [scope, animate] = useAnimate();
   const [isPresent, safeToRemove] = usePresence();

   useEffect(() => {
      const handleInitialAnimations = async () => {
         await animate(".item", { y: 0 }, { duration: 0.4 });
         await animate(".arrow-body", { width: "100%" }, { duration: 0.4 });
         await animate(".arrow-head", { width: "100%" }, { duration: 0.2 });
         setTimeout(() => {
            setInitialOpen(true);
         }, 200);
      };
      handleInitialAnimations();
   }, []);

   useEffect(() => {
      if (isPresent) return;
      const exitAnimation = async () => {
         animate(".item", { y: 0 }, { duration: 0.4 });
         await animate(".arrow-head", { width: "0%" }, { duration: 0.1 });
         await animate(".arrow-body", { width: "0%" }, { duration: 0.3 });
         safeToRemove();
      };
      exitAnimation();
   }, [isPresent]);

   return (
      <motion.div
         ref={scope}
         className="fixed top-0 left-0 h-screen w-full flex items-center justify-center px-32"
      >
         <div className="w-full flex items-center gap-8">
            <div className="flex-1" />
            <div className="text-center">
               <InitialText>
                  Click on the button to use the discover panel
               </InitialText>
               <InitialText>to search Movies or TV series</InitialText>
               <InitialText>with specific parameters</InitialText>
            </div>
            <InitialArrow />
         </div>
      </motion.div>
   );
}
