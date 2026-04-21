import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MediaDetailsModel } from "../models/MediaDetailsModel";
import useBackground from "@/features/layout/background/hooks/useBackground";
import { useLenis } from "lenis/react";
import useAppSelector from "@/store/hooks/useAppSelector";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { backgroundActions } from "@/store/slices/background-slice";

type Props = {
   children: React.ReactNode;
   media: MediaDetailsModel;
};

export default function MediaIdContainer({ children, media }: Props) {
   const { hideUi } = useAppSelector((state) => state.background);
   const { changeBackground } = useBackground();

   useEffect(() => {
      changeBackground(media.backdrop_path);
   }, [media.backdrop_path, changeBackground]);

   const lenis = useLenis();
   useEffect(() => {
      if (!lenis) return;
      lenis.scrollTo("top", { immediate: true });
      return () => {};
   }, [lenis]);

   const dispatch = useAppDispatch();
   useEffect(() => {
      return () => {
         dispatch(backgroundActions.hideBackground());
      };
   }, [dispatch]);

   return (
      <motion.div
         animate={{ opacity: hideUi ? 0 : 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         className="w-full z-10"
      >
         {children}
      </motion.div>
   );
}
