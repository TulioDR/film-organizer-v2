import React, { useState } from "react";
import { motion } from "framer-motion";
import Poster from "@/common/components/Poster";
import { Media } from "@/common/models/Media";

type Props = {
   media: Media;
   changeSelectedMedia: (media: Media) => void;
   isSelected: boolean;
};

export default function MarqueeCard({
   media,
   changeSelectedMedia,
   isSelected,
}: Props) {
   const [isHovered, setIsHovered] = useState(false);

   const onHoverStart = () => {
      setIsHovered(true);
   };
   const onHoverEnd = () => {
      setIsHovered(false);
   };

   const onAnimationComplete = () => {
      console.log(media);
      changeSelectedMedia(media);
   };

   return (
      <motion.div
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         className={`w-full flex-shrink-0 aspect-[2/3] rounded-sm overflow-hidden relative`}
      >
         <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full relative"
         >
            <Poster
               alt={media.title || media.name}
               posterPath={media.poster_path}
               front
               size="md"
            />
         </motion.div>
         {(isHovered || isSelected) && (
            <motion.div className="absolute bottom-1 right-1 h-4 aspect-square rounded-full border border-border-light dark:border-border-dark -rotate-90">
               <svg className="w-full h-full overflow-visible ">
                  <motion.circle
                     r="50%"
                     cx="50%"
                     cy="50%"
                     onAnimationComplete={onAnimationComplete}
                     className="stroke-accent fill-transparent"
                     strokeWidth={4}
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1, transition: { duration: 1 } }}
                  />
               </svg>
            </motion.div>
         )}
      </motion.div>
   );
}
