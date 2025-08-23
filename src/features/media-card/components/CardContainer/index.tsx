import { motion } from "framer-motion";
import MainContainer from "./MainContainer";
import TransitionContainer from "./TransitionContainer";
import { useEffect, useState } from "react";
import Store from "@/common/models/Store";
import { useSelector } from "react-redux";

type Props = {
   children: React.ReactNode;
   id: string;
   height: number | null;
   scale: number | null;
};

export default function CardContainer({ children, id, height, scale }: Props) {
   const [container, setContainer] = useState<HTMLElement | null>(null);

   useEffect(() => {
      const container = document.getElementById("TRANSITION_CARD_CONTAINER");
      setContainer(container);
   }, []);
   const [isAnimated, setIsAnimated] = useState(false);
   const onAnimationComplete = () => setIsAnimated(true);

   const DURATION = 0.3;

   const item1 = {
      initial: { y: "101%" },
      animate: { y: "0%", transition: { duration: DURATION } },
      exit: {
         y: "-101%",
         overflow: "hidden",
         pointerEvents: "none",
         transition: { duration: DURATION },
      },
   };
   const item2 = {
      initial: { y: "-101%" },
      animate: { y: "0%", transition: { duration: DURATION } },
      exit: {
         y: "101%",
         overflow: "hidden",
         pointerEvents: "none",
         transition: { duration: DURATION },
      },
   };
   const { isHidden } = useSelector((state: Store) => state.layout);

   return (
      <motion.div
         id={id}
         animate={{ opacity: isHidden ? 0 : 1 }}
         transition={{ duration: 0.2 }}
         className={`aspect-[2/3] w-full
            ${isAnimated ? "" : "pointer-events-none overflow-hidden"}
         `}
      >
         <motion.div
            onAnimationComplete={onAnimationComplete}
            variants={item1}
            className={`w-full h-full 
               ${isAnimated ? "" : "overflow-hidden pointer-events-none"}
            `}
         >
            <motion.div
               variants={item2}
               className={`w-full h-full 
                  ${isAnimated ? "" : "overflow-hidden pointer-events-none"}
               `}
            >
               {scale && height && container ? (
                  <TransitionContainer
                     container={container}
                     layoutId={id}
                     scale={scale}
                     height={height}
                  >
                     {children}
                  </TransitionContainer>
               ) : (
                  <MainContainer layoutId={id}>{children}</MainContainer>
               )}
            </motion.div>
         </motion.div>
      </motion.div>
   );
}
