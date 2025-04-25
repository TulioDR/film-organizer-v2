import Poster from "@/components/Poster";
import { MediaModel } from "@/models/MediaModel";
import React, { useState } from "react";
import { motion } from "framer-motion";
import useBackground from "@/features/layout/background/hooks/useBackground";
import Link from "next/link";

type Props = {
   media: MediaModel;
};

export default function MarqueeCard({ media }: Props) {
   const { changeBackground, removeBackground } = useBackground();

   const [isHovered, setIsHovered] = useState(false);

   const onHoverStart = () => {
      changeBackground(media.id, media.backdrop_path);
      setIsHovered(true);
   };
   const onHoverEnd = () => {
      removeBackground();
      setIsHovered(false);
   };

   return (
      <Link href={`/movie/${media.id}`}>
         <motion.div
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            className="w-full flex-shrink-0 aspect-[2/3] rounded-lg overflow-hidden relative"
         >
            <motion.div
               animate={{ scale: isHovered ? 1.1 : 1 }}
               transition={{ duration: 0.4, ease: "easeOut" }}
               className="w-full h-full relative"
            >
               <Poster
                  alt={media.title || media.name}
                  posterPath={media.poster_path}
                  size="md"
               />
            </motion.div>
            <motion.div
               animate={{ opacity: isHovered ? 1 : 0 }}
               transition={{ duration: 0.2, ease: "easeOut" }}
               className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center p-4"
            >
               <span className="text-xl text-white font-medium text-center">
                  {media.title || media.name}
               </span>
            </motion.div>
         </motion.div>
      </Link>
   );
}
