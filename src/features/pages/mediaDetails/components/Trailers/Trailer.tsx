import Poster from "@/components/Poster";
import React, { useState } from "react";
import { Video } from "../../models/MediaDetailsModel";
import { motion } from "framer-motion";

type Props = {
   trailer: Video;
};

export default function Trailer({ trailer }: Props) {
   const [showPlay, setShowPlay] = useState<boolean>(false);

   const onHoverStart = () => {
      setShowPlay(true);
   };
   const onHoverEnd = () => {
      setShowPlay(false);
   };

   return (
      <motion.a
         href={`https://www.youtube.com/watch?v=${trailer.key}`}
         target="_blank"
         rel="noreferrer"
         onMouseEnter={onHoverStart}
         onMouseLeave={onHoverEnd}
         className="flex flex-col"
      >
         <div className="relative aspect-video flex-shrink-0 rounded-xl overflow-hidden">
            <motion.div
               animate={{ scale: showPlay ? 1.1 : 1 }}
               transition={{ duration: 0.2, ease: "easeInOut" }}
               className="w-full h-full"
            >
               <Poster
                  alt={trailer.name}
                  posterPath={trailer.key}
                  size="md"
                  backPoster
                  trailer
               />
            </motion.div>
            <motion.div
               animate={{ opacity: showPlay ? 1 : 0 }}
               transition={{ duration: 0.2 }}
               className="absolute inset-0 bg-black/60 flex items-center justify-center"
            >
               <div className="rounded-full aspect-square w-8 border-gray-400 border-[3px] grid place-content-center">
                  <span className="material-symbols-outlined">play_arrow</span>
               </div>
            </motion.div>
         </div>
         <div className="w-full text-xs lg:text-sm truncate pt-2">
            {trailer.name}
         </div>
      </motion.a>
   );
}
