import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MediaDetailsModel } from "../models/MediaDetailsModel";
import useBackground from "@/features/layout/background/hooks/useBackground";
import Store from "@/common/models/Store";
import { useSelector } from "react-redux";

type Props = {
   children: React.ReactNode;
   media: MediaDetailsModel;
};

export default function MediaIdContainer({ children, media }: Props) {
   const { changeBackground, removeBackground } = useBackground();

   const { isHidden } = useSelector((state: Store) => state.layout);

   useEffect(() => {
      changeBackground(media.id, media.backdrop_path);
      return () => removeBackground();
   }, [media]);

   return (
      <motion.div
         animate={{ opacity: isHidden ? 0 : 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         className="w-full z-10"
      >
         {children}
      </motion.div>
   );
}
