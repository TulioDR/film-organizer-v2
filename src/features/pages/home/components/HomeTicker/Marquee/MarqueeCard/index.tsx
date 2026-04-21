import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Media } from "@/common/models/Media";
import useHomeContext from "../../../../context/HomeContext";
import CardMark from "./CardMark";
import CardPoster from "./CardPoster";

type Props = {
   media: Media;
   index: number;
};

export default function MarqueeCard({ media, index }: Props) {
   const [isHovered, setIsHovered] = useState(false);

   const onHoverStart = () => {
      setIsHovered(true);
   };
   const onHoverEnd = () => {
      setIsHovered(false);
   };

   const { changeMedia, stopAutoPlay } = useHomeContext();
   const onAnimationComplete = (e: any) => {
      if (e.pathLength !== 1) return;
      changeMedia(index);
      stopAutoPlay();
   };

   return (
      <motion.div
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         onTapStart={onHoverStart}
         onTap={onHoverEnd}
         onTapCancel={onHoverEnd}
         className={`w-full flex-shrink-0 aspect-[2/3] rounded-sm overflow-hidden relative`}
      >
         <CardPoster media={media} isHovered={isHovered} />
         <AnimatePresence>
            {isHovered && (
               <CardMark onAnimationComplete={onAnimationComplete} />
            )}
         </AnimatePresence>
      </motion.div>
   );
}
