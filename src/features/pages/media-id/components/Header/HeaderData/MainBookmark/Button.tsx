import React from "react";
import { motion } from "framer-motion";
import Bookmark from "@/features/bookmark/components/Bookmark";

type Props = {
   media: any;
   mediaType: "movie" | "tv";
};

export default function Button({ mediaType, media }: Props) {
   const transition = {
      layout: { duration: 0.3 },
   };

   return (
      <motion.div
         layoutId="details-bookmark"
         transition={transition}
         className="w-full h-full relative z-20"
      >
         <Bookmark media={media} mediaType={mediaType} />
      </motion.div>
   );
}
