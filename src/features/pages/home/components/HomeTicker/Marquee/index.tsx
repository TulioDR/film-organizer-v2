import React from "react";
import MarqueeCard from "./MarqueeCard";
import {
   useAnimationFrame,
   useMotionValue,
   useTransform,
   motion,
} from "framer-motion";
import { Media } from "@/common/models/Media";

type Props = {
   array: Media[];
   reverse: boolean;
   initialY: number;
   changeSelectedMedia: (media: Media) => void;
   isHovered: boolean;
   currentMedia: Media;
};

export default function Marquee({
   array,
   reverse,
   initialY,
   changeSelectedMedia,
   isHovered,
   currentMedia,
}: Props) {
   const direction = reverse ? -1 : 1;
   const baseY = useMotionValue(initialY);
   const y = useTransform(baseY, [-100, 100], ["-100%", `100%`]);

   useAnimationFrame((_t, delta) => {
      if (baseY.get() >= 100 || baseY.get() <= -100) {
         baseY.jump(0);
         return;
      }
      const velocity = isHovered ? 0.1 : 0.8;
      const moveBy = (direction * delta) / 1000;
      baseY.set(baseY.get() + moveBy * velocity);
   });

   return (
      <div className="flex items-center flex-1 h-full">
         <motion.div
            style={{ y }}
            className={`w-full h-max flex flex-col gap-1 py-0.5 relative`}
         >
            {Array.from({ length: 3 }).map((_, index) => (
               <div
                  className={`flex flex-col w-full h-max gap-1 py-0.5 
                     ${index === 1 ? "absolute bottom-full" : ""}
                     ${index === 2 ? "absolute top-full" : ""}
                  `}
               >
                  {array.map((media, index) => (
                     <MarqueeCard
                        key={media.id + "-" + index}
                        media={media}
                        changeSelectedMedia={changeSelectedMedia}
                        isSelected={media.id === currentMedia.id}
                     />
                  ))}
               </div>
            ))}
         </motion.div>
      </div>
   );
}
