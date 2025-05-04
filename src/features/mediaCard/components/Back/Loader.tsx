import React from "react";
import { motion } from "framer-motion";
import useBackground from "@/features/layout/background/hooks/useBackground";
import { MediaModel } from "@/models/MediaModel";
import { layoutActions } from "@/store/slices/layout-slice";
import { useDispatch } from "react-redux";

type Props = {
   isHovered: boolean;
   media: MediaModel;
};

export default function Loader({ isHovered, media }: Props) {
   const { changeBackground } = useBackground();
   const dispatch = useDispatch();
   const onAnimationComplete = (e: any) => {
      if (e.width === "100%") {
         changeBackground(media.id, media.backdrop_path);
         dispatch(layoutActions.hideLayout());
      }
   };

   return (
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white">
         <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{
               duration: isHovered ? 2 : 0.4,
               delay: isHovered ? 0.4 : 0,
            }}
            onAnimationComplete={onAnimationComplete}
            className="h-full bg-blue-500"
         />
      </div>
   );
}
