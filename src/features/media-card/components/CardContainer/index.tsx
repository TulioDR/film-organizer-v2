import cardAnimation from "@/features/pages/media-type/animations/cardAnimation";
import MainContainer from "./MainContainer";
import TransitionContainer from "./TransitionContainer";
import { motion, usePresence } from "framer-motion";
import { useEffect } from "react";

type Props = {
   children: React.ReactNode;
   layoutId: string;
   direction?: "prev" | "next" | "default";
   isLoading: boolean;
};

export default function CardContainer({
   children,
   layoutId,
   direction,
   isLoading,
}: Props) {
   const [isPresent, safeToRemove] = usePresence();
   const onAnimationComplete = () => {
      if (!isPresent) safeToRemove();
   };
   useEffect(() => {
      if (!isPresent && !isLoading) safeToRemove();
   }, [isPresent, isLoading]);

   return (
      <motion.div
         initial={direction ? cardAnimation[direction].initial : false}
         className={`aspect-[2/3] w-full media-card ${isLoading ? "pointer-events-none" : ""}`}
      >
         {isLoading && !isPresent ? (
            <TransitionContainer
               layoutId={layoutId}
               onAnimationComplete={onAnimationComplete}
            >
               {children}
            </TransitionContainer>
         ) : (
            <MainContainer layoutId={layoutId} isLoading={isLoading}>
               {children}
            </MainContainer>
         )}
      </motion.div>
   );
}
