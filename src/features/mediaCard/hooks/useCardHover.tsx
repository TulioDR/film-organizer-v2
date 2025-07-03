import { useState } from "react";
import { ROTATE_DURATION } from "../constants/ANIMATIONS_DURATIONS";
import { useDispatch } from "react-redux";
import { useAnimate } from "framer-motion";
import useBackground from "@/features/layout/background/hooks/useBackground";
import { MediaModel } from "@/models/MediaModel";
import { layoutActions } from "@/store/slices/layout-slice";

export default function useCardHover(
   media: MediaModel,
   currentMedia?: MediaModel
) {
   const [isHovered, setIsHovered] = useState<boolean>(false);
   const [scope, animate] = useAnimate();
   const dispatch = useDispatch();
   const { removeBackground, changeBackground } = useBackground();

   const onHoverStart = async () => {
      setIsHovered(true);
      animate(".rotate-card", { rotateY: 180 }, { duration: ROTATE_DURATION });
      await animate(".loader-animation", { width: "100%" }, { duration: 2 });
      changeBackground(media.id, media.backdrop_path);
      dispatch(layoutActions.hideLayout());
   };
   const onHoverEnd = async () => {
      setIsHovered(false);
      animate(".loader-animation", { width: "0%" }, { duration: 1 });
      if (currentMedia) {
         changeBackground(currentMedia.id, currentMedia.backdrop_path);
      } else {
         removeBackground();
      }
      dispatch(layoutActions.revealLayout());
      await animate(
         ".rotate-card",
         { rotateY: 360 },
         { duration: ROTATE_DURATION }
      );
      animate(".rotate-card", { rotateY: 0 }, { duration: 0 });
   };

   return { isHovered, scope, onHoverStart, onHoverEnd };
}
