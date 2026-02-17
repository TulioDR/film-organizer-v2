import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MediaDetailsModel } from "../models/MediaDetailsModel";
import useBackground from "@/features/layout/background/hooks/useBackground";
import useAppSelector from "@/store/hooks/useAppSelector";
import { useLenis } from "lenis/react";

type Props = {
   children: React.ReactNode;
   media: MediaDetailsModel;
};

export default function MediaIdContainer({ children, media }: Props) {
   const { changeBackground } = useBackground();

   const { isHidden } = useAppSelector((state) => state.layout);

   useEffect(() => {
      changeBackground(media.id, media.backdrop_path);
   }, [media]);

   const lenis = useLenis();
   useEffect(() => {
      lenis!.scrollTo("top", { immediate: true });
      return () => {};
   }, []);

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
