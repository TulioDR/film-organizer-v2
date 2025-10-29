import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useBackground from "@/features/layout/background/hooks/useBackground";
import { layoutActions } from "@/store/slices/layout-slice";
import Poster from "@/common/components/Poster";
import { Media } from "@/common/models/Media";
import useAppDispatch from "@/store/hooks/useAppDispatch";

type Props = {
   media: Media;
   currentMedia?: Media;
};

export default function BackHeader({ media, currentMedia }: Props) {
   const title = media.name || media.title;
   const backdrop = media.backdrop_path;

   const { removeBackground, changeBackground } = useBackground();
   const dispatch = useAppDispatch();

   const [isHovered, setIsHovered] = useState(false);

   const handleClick = () => {
      changeBackground(media.id, media.backdrop_path);
      dispatch(layoutActions.hideLayout());
   };

   const onHoverStart = async () => {
      if (!backdrop) return;
      setIsHovered(true);
   };
   const onHoverEnd = async () => {
      setIsHovered(false);
      if (currentMedia) {
         changeBackground(currentMedia.id, currentMedia.backdrop_path);
      } else {
         removeBackground();
      }
      dispatch(layoutActions.revealLayout());
   };

   return (
      <motion.div
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         className="p-1.5 pb-0"
      >
         <div className="relative w-full h-full">
            <Poster alt={title} posterPath={backdrop} size="original" back />
            <AnimatePresence>
               {isHovered && (
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3 }}
                     onClick={handleClick}
                     className="absolute cursor-pointer top-0 left-0 w-full h-full flex items-center justify-center text-center bg-black/90 dark:bg-white/90"
                  >
                     <div className="text-white dark:text-black w-min uppercase font-black">
                        View Backdrop
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </motion.div>
   );
}
