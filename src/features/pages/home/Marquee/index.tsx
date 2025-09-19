import React from "react";
import MarqueeCard from "./MarqueeCard";
import MarqueeInnerContainer from "./MarqueeInnerContainer";
import { useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { Media } from "@/common/models/Media";

type Props = {
   array: Media[];
   reverse: boolean;
   initialY: number;
   setSrc: React.Dispatch<React.SetStateAction<string | null>>;
   isHovered: boolean;
};

export default function Marquee({
   array,
   reverse,
   initialY,
   setSrc,
   isHovered,
}: Props) {
   const direction = reverse ? -1 : 1;
   const baseY = useMotionValue(initialY);
   const y = useTransform(baseY, [-100, 100], ["-100%", `100%`]);

   useAnimationFrame((_t, delta) => {
      // Apply Loop
      if (baseY.get() >= 100 || baseY.get() <= -100) {
         baseY.jump(0);
         return;
      }
      const velocity = isHovered ? 0.4 : 1.3;
      const moveBy = (direction * delta) / 1000;
      baseY.set(baseY.get() + moveBy * velocity);
   });

   return (
      <div className="flex items-center flex-1 h-full relative">
         <MarqueeInnerContainer y={y} className="top-0">
            <MarqueeInnerContainer className="bottom-full">
               {array.map((media) => (
                  <MarqueeCard key={media.id} media={media} setSrc={setSrc} />
               ))}
            </MarqueeInnerContainer>
            {array.map((media) => (
               <MarqueeCard key={media.id} media={media} setSrc={setSrc} />
            ))}
            <MarqueeInnerContainer className="top-full">
               {array.map((media) => (
                  <MarqueeCard key={media.id} media={media} setSrc={setSrc} />
               ))}
            </MarqueeInnerContainer>
         </MarqueeInnerContainer>
      </div>
   );
}
