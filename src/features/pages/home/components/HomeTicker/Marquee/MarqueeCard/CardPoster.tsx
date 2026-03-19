import React from "react";
import { motion } from "framer-motion";
import Poster from "@/common/components/Poster";
import { Media } from "@/common/models/Media";

type Props = {
   media: Media;
   isHovered: boolean;
};

export default function CardPoster({ media, isHovered }: Props) {
   return (
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
   );
}
