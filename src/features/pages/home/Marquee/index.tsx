import { MediaModel } from "@/models/MediaModel";
import React, { useState } from "react";
import MarqueeCard from "./MarqueeCard";
import MarqueeInnerContainer from "./MarqueeInnerContainer";
import {
   useAnimationFrame,
   useMotionValue,
   useTransform,
   motion,
   useSpring,
} from "framer-motion";

type Props = {
   array: MediaModel[];
   reverse: boolean;
   initialY: number;
};

export default function Marquee({ array, reverse, initialY }: Props) {
   const baseY = useMotionValue(initialY);
   const direction = reverse ? -1 : 1;

   const [isHovered, setIsHovered] = useState(false);

   useAnimationFrame((_t, delta) => {
      // Apply Loop
      if (baseY.get() >= 100 || baseY.get() <= -100) {
         baseY.jump(0);
         return;
      }

      const velocity = isHovered ? 0.5 : 1;
      const moveBy = (direction * delta) / 1000;
      baseY.set(baseY.get() + moveBy * velocity);
   });

   const smoothY = useSpring(baseY, {
      damping: 50,
      stiffness: 400,
   });

   const y = useTransform(baseY, [-100, 100], ["-100%", `100%`]);
   return (
      <motion.div
         onHoverStart={() => setIsHovered(true)}
         onHoverEnd={() => setIsHovered(false)}
         className="flex items-center flex-1 h-full relative overflow-hidden"
      >
         <MarqueeInnerContainer y={y} className="top-0">
            <MarqueeInnerContainer className="bottom-full">
               {array.map((media) => (
                  <MarqueeCard key={media.id} media={media} />
               ))}
            </MarqueeInnerContainer>
            {array.map((media) => (
               <MarqueeCard key={media.id} media={media} />
            ))}
            <MarqueeInnerContainer className="top-full">
               {array.map((media) => (
                  <MarqueeCard key={media.id} media={media} />
               ))}
            </MarqueeInnerContainer>
         </MarqueeInnerContainer>
      </motion.div>
   );
}
