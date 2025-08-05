import React from "react";
import { motion } from "framer-motion";
import Bookmark from "@/features/bookmark/components/Bookmark";
import GlassContainer from "@/common/components/GlassContainer";

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
         <GlassContainer className="h-full aspect-square overflow-hidden">
            <Bookmark
               media={media}
               type={mediaType}
               className="hover:bg-white hover:text-black"
            />
         </GlassContainer>
      </motion.div>
   );
}
