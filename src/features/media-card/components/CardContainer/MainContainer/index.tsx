import React from "react";
import { useAnimate } from "framer-motion";
import { ROTATE_DURATION } from "@/features/media-card/constants/ANIMATIONS_DURATIONS";
import InitialAnimationContainer from "./InitialAnimationContainer";
import Responsive from "@/common/components/Responsive";
import { LG_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import InnerMainContainer from "./InnerMainContainer";

type Props = {
   layoutId: string;
   children: React.ReactNode;
};

export default function MainContainer({ layoutId, children }: Props) {
   const [scope, animate] = useAnimate();
   const ROTATE_CLASS = "rotate-card";

   const onHoverStart = async () => {
      animate(
         "." + ROTATE_CLASS,
         { rotateY: 180 },
         { duration: ROTATE_DURATION }
      );
   };
   const onHoverEnd = async () => {
      await animate(
         "." + ROTATE_CLASS,
         { rotateY: 360 },
         { duration: ROTATE_DURATION }
      );
      animate("." + ROTATE_CLASS, { rotateY: 0 }, { duration: 0 });
   };

   return (
      <InitialAnimationContainer>
         <Responsive maxWidth={LG_MEDIA_QUERY}>
            <InnerMainContainer
               tabIndex
               scope={scope}
               layoutId={layoutId}
               onFocus={onHoverStart}
               onBlur={onHoverEnd}
               ROTATE_CLASS={ROTATE_CLASS}
            >
               {children}
            </InnerMainContainer>
         </Responsive>
         <Responsive minWidth={LG_MEDIA_QUERY}>
            <InnerMainContainer
               scope={scope}
               layoutId={layoutId}
               onHoverStart={onHoverStart}
               onHoverEnd={onHoverEnd}
               ROTATE_CLASS={ROTATE_CLASS}
            >
               {children}
            </InnerMainContainer>
         </Responsive>
      </InitialAnimationContainer>
   );
}
