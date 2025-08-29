import { motion } from "framer-motion";
import MainContainer from "./MainContainer";
import TransitionContainer from "./TransitionContainer";
import { useEffect, useState } from "react";

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

   return (
      <motion.div id={id} className="aspect-[2/3] w-full">
         {scale && height && container ? (
            <TransitionContainer
               layoutId={id}
               scale={scale}
               height={height}
               container={container}
            >
               {children}
            </TransitionContainer>
         ) : (
            <MainContainer layoutId={id}>{children}</MainContainer>
         )}
      </motion.div>
   );
}
