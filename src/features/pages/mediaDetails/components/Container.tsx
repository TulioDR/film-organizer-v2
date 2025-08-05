import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MediaDetailsModel } from "../models/MediaDetailsModel";
import useBackground from "@/features/layout/background/hooks/useBackground";
import useScrollToTop from "@/common/hooks/useScrollToTop";

type Props = {
   children: React.ReactNode;
   media: MediaDetailsModel;
};

export default function Container({ children, media }: Props) {
   useScrollToTop();

   const { changeBackground } = useBackground();

   useEffect(() => {
      changeBackground(media.id, media.backdrop_path);
   }, [media]);

   return (
      <motion.div
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         className="w-full pb-24 lg:pb-4 xl:pb-8 px-4 lg:px-24 xl:px-32"
      >
         {children}
      </motion.div>
   );
}
