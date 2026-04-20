import MainContainer from "../MainContainer";
import TransitionContainer from "../TransitionContainer";
import { motion, usePresence } from "framer-motion";
import { useEffect } from "react";

type Props = {
   children: React.ReactNode;
   layoutId: string;
   isLoading: boolean;
};

export default function Desktop({ children, layoutId, isLoading }: Props) {
   const [isPresent, safeToRemove] = usePresence();
   const onAnimationComplete = () => {
      if (!isPresent) safeToRemove();
   };
   useEffect(() => {
      if (!isPresent && !isLoading) safeToRemove();
   }, [isPresent, isLoading]);

   return (
      <motion.div
         layout
         className={`aspect-[2/3] w-full ${isLoading || !isPresent ? "pointer-events-none" : ""}`}
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
