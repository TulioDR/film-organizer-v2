import React from "react";
import { animate, motion } from "framer-motion";
import useBackground from "@/features/layout/background/hooks/useBackground";
import { layoutActions } from "@/store/slices/layout-slice";
import Poster from "@/common/components/Poster";
import Loader from "./Loader";
import { Media } from "@/common/models/Media";
import useAppDispatch from "@/store/hooks/useAppDispatch";

type Props = {
   media: Media;
   currentMedia?: Media;
};

export default function BackHeader({ media, currentMedia }: Props) {
   const title = media.name || media.title;
   const backdrop = media.backdrop_path;

   const { removeBackground, changeBackground } = useBackground();
   const dispatch = useAppDispatch();

   const onHoverStart = async () => {
      if (!backdrop) return;
      await animate(".loader-animation", { width: "100%" }, { duration: 1 });
      changeBackground(media.id, media.backdrop_path);
      dispatch(layoutActions.hideLayout());
   };
   const onHoverEnd = async () => {
      animate(".loader-animation", { width: "0%" }, { duration: 0.1 });
      if (currentMedia) {
         changeBackground(currentMedia.id, currentMedia.backdrop_path);
      } else {
         removeBackground();
      }
      dispatch(layoutActions.revealLayout());
   };

   return (
      <motion.div
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         className="relative"
      >
         <Poster alt={title} posterPath={backdrop} size="original" back />
         <Loader />
      </motion.div>
   );
}
