import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useScrollToTop from "@/hooks/useScrollToTop";
import { MediaDetailsModel } from "../models/MediaDetailsModel";
import useBackground from "@/features/layout/background/hooks/useBackground";

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
         className="w-full pb-8 px-32"
      >
         {children}
      </motion.div>
   );
}
