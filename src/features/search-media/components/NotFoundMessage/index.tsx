import { useAnimate, usePresence } from "framer-motion";
import React, { useEffect } from "react";
import InitialText from "../InitialMessage/InitialText";
import useStopLoader from "@/features/layout/loader/hooks/useStopLoader";

type Props = {};

export default function NotFoundMessage({}: Props) {
   const [scope, animate] = useAnimate();
   const [isPresent, safeToRemove] = usePresence();

   useStopLoader();

   useEffect(() => {
      const handleInitialAnimations = async () => {
         await animate(".item", { y: 0 }, { duration: 0.4 });
      };
      handleInitialAnimations();
   }, []);

   useEffect(() => {
      if (isPresent) return;
      const exitAnimation = async () => {
         animate(".item", { y: 0 }, { duration: 0.4 });
         safeToRemove();
      };
      exitAnimation();
   }, [isPresent]);

   return (
      <div
         ref={scope}
         className="fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center px-32"
      >
         <InitialText>Nothing was found.</InitialText>
         <InitialText>Please try something else.</InitialText>
      </div>
   );
}
