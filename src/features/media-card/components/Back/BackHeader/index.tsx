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
   isLoading: boolean;
};

export default function BackHeader({ media, currentMedia, isLoading }: Props) {
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
         initial={false}
         animate={{ height: isLoading ? 0 : "auto" }}
         transition={{ duration: 0.2 }}
         className="relative w-full overflow-hidden"
      >
         <Poster alt={title} posterPath={backdrop} size="original" back />
         <AnimatePresence>
            {isHovered && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white/70 dark:bg-black/70"
               >
                  <button
                     onClick={handleClick}
                     className="text-black dark:text-white w-max font-medium py-1 px-3 rounded-lg bg-white dark:bg-black border border-border-light dark:border-border-dark hover:border-black dark:hover:border-white"
                  >
                     View Backdrop
                  </button>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.div>
   );
}
