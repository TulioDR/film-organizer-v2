import React, { useState } from "react";
import { Media } from "@/common/models/Media";
import MediaGroup from "../../models/MediaGroup";
import { motion } from "framer-motion";
import GroupTicker from "./GroupTicker";

type Props = {
   changeSelectedMedia: (media: Media) => void;
   allGroups: [MediaGroup, MediaGroup, MediaGroup];
   mediaGroup: MediaGroup;
   media: Media;
};

export default function HomeTicker({
   changeSelectedMedia,
   allGroups,
   mediaGroup,
   media,
}: Props) {
   const [isHovered, setIsHovered] = useState(false);
   const onHoverStart = () => setIsHovered(true);
   const onHoverEnd = () => setIsHovered(false);

   const currentIndex = allGroups.findIndex((g) => g.id === mediaGroup.id);

   return (
      <motion.div
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         className="w-[410px] h-full flex-shrink-0 brightness-50 lg:brightness-100 pointer-events-none lg:pointer-events-auto overflow-hidden relative"
      >
         <motion.div
            animate={{ x: `-${(100 / allGroups.length) * currentIndex}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-full flex-shrink-0 flex gap-1 w-max"
         >
            {allGroups.map((group) => (
               <GroupTicker
                  key={group.id}
                  currentMedia={media}
                  groupMedia={group.media}
                  isHovered={isHovered}
                  changeSelectedMedia={changeSelectedMedia}
               />
            ))}
         </motion.div>
      </motion.div>
   );
}
