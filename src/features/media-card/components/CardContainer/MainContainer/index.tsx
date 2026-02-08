import React from "react";
import { useAnimate, motion } from "framer-motion";
import { ROTATE_DURATION } from "@/features/media-card/constants/ANIMATIONS_DURATIONS";
import InnerMainContainer from "./InnerMainContainer";
import cardAnimation from "@/features/pages/media-type/animations/cardAnimation";

type Props = {
   layoutId: string;
   children: React.ReactNode;
   direction: "prev" | "next" | "default";
};

export default function MainContainer({
   layoutId,
   children,
   direction,
}: Props) {
   const [scope, animate] = useAnimate();
   const ROTATE_CLASS = "media-card";

   const onHoverStart = async () => {
      animate(
         "." + ROTATE_CLASS,
         { rotateY: 180 },
         { duration: ROTATE_DURATION },
      );
   };
   const onHoverEnd = async () => {
      await animate(
         "." + ROTATE_CLASS,
         { rotateY: 360 },
         { duration: ROTATE_DURATION },
      );
      animate("." + ROTATE_CLASS, { rotateY: 0 }, { duration: 0 });
   };

   return (
      <motion.div
         initial={cardAnimation[direction].initial}
         className="h-full w-full media-card"
      >
         <InnerMainContainer
            scope={scope}
            layoutId={layoutId}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            ROTATE_CLASS={ROTATE_CLASS}
         >
            {children}
         </InnerMainContainer>
      </motion.div>
   );
}
